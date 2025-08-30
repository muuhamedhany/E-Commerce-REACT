import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import useProducts from '../data/data'; // Import useProducts hook
import { Card } from '../components/Card/Card'; // Import Card component

const Wishlist = () => {
  const { filteredData, loading, error } = useProducts();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    if (filteredData.length > 0) {
      // Simulate a wishlist by picking some random products or hardcoding IDs
      const initialWishlist = filteredData
        .filter((_, index) => index % 3 === 0)
        .slice(0, 4);
      setWishlistItems(
        initialWishlist.map((item) => ({
          ...item,
          inStock: Math.random() > 0.5,
        })),
      );
    }
  }, [filteredData]);

  const handleMoveToCart = (itemId) => {
    console.log(`Move item with ID ${itemId} to cart`);
    // Implement actual cart logic here
  };

  const handleRemoveItem = (itemId) => {
    console.log(`Remove item with ID ${itemId} from wishlist`);
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="cont mt-15">
      <h1 className="text-4xl font-bold text-center mb-4 FacultyGlyphic ">
        Your Wishlist
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8 dark:text-gray-300">
        Save your favorite products and shop them later.
      </p>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg shadow-md">
          <FaHeart className="text-6xl text-[var(--primary)] mb-8 animate-pulse" />
          <p className="text-2xl font-semibold text-gray-700 mb-4 dark:text-gray-300">
            Your wishlist is empty. Start exploring and add items you love!
          </p>
          <Link to="/Shop" className="primary-button text-lg px-6 py-3">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="relative">
              <select className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] dark:bg-gray-700 dark:text-white dark:border-gray-600">
                <option>Sort by: Recently Added</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
              </select>
            </div>
            <button className="secondary-button px-4 py-2 text-sm">
              Share Wishlist
            </button>
          </div>
          {loading ? (
            <div className="text-center py-8">Loading wishlist items...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              Error loading wishlist: {error.message}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rate={item.rating.rate}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
