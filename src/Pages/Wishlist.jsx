import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import useProducts from '../data/data'; // Import useProducts hook
import { Card } from '../components/Card/Card'; // Import Card component
import { useWishlist } from '../context/WishlistContext'; // Import useWishlist hook

const Wishlist = () => {
  const { filteredData, loading, error } = useProducts();
  const { wishlist, removeFromWishlist } = useWishlist(); // Use wishlist from context
  const [sortOrder, setSortOrder] = useState('recently_added'); // New state for sorting

  // Remove the local useEffect that simulates initial wishlist
  // useEffect(() => {
  //   if (filteredData.length > 0) {
  //     const initialWishlist = filteredData
  //       .filter((_, index) => index % 3 === 0)
  //       .slice(0, 4);
  //     setWishlistItems(
  //       initialWishlist.map((item) => ({
  //         ...item,
  //         inStock: Math.random() > 0.5,
  //       })),
  //     );
  //   }
  // }, [filteredData]);

  const handleMoveToCart = (itemId) => {
    console.log(`Move item with ID ${itemId} to cart`);
    // Implement actual cart logic here
    // You might want to remove from wishlist after moving to cart
    removeFromWishlist(itemId);
  };

  const handleRemoveItem = (itemId) => {
    console.log(`Remove item with ID ${itemId} from wishlist`);
    removeFromWishlist(itemId); // Use removeFromWishlist from context
  };

  // New function to handle sorting changes
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Sort wishlist items based on sortOrder
  const sortedWishlistItems = [...wishlist]
    .map((wishlistItem) => {
      const productData = filteredData.find(
        (product) => product.id === wishlistItem.id,
      );
      return productData ? { ...wishlistItem, inStock: productData.inStock } : wishlistItem;
    })
    .sort((a, b) => {
      if (sortOrder === 'price_low_to_high') {
        return a.price - b.price;
      } else if (sortOrder === 'price_high_to_low') {
        return b.price - a.price;
      } else {
        // Default to recently added (no specific sort order for now, assumes initial order)
        return 0;
      }
    });

  return (
    <div className="cont mt-15">
      <h1 className="text-4xl text font-bold text-center mb-4 FacultyGlyphic ">
        Your Wishlist
      </h1>
      <p className="text-xl text text-center  mb-8 ">
        Save your favorite products and shop them later.
      </p>

      {wishlist.length === 0 ? ( // Use wishlist.length from context
        <div className="flex gap-4 text-center flex-col
         items-center justify-center md:p-20 p-10 bg-gray-50 rounded-lg shadow-md">
          <FaHeart className="text-6xl text-[var(--primary)] mb-8 animate-pulse" />
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            Your wishlist is empty. Start exploring and add items you love!
          </p>
          <Link to="/Shop" className="primary-button text-lg px-6 py-3">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div
            className="flex md:flex-row flex-col justify-center gap-4 md:justify-between md:items-center mb-4
           p-4 bg-gray-50 rounded-lg shadow-md"
          >
            <div className="relative">
              <select
                className="w-full px-4 py-3 border border-gray-300 
                rounded-[0.5rem] bg-[var(--accent)] text-white"
                onChange={handleSortChange} // Add onChange handler
                value={sortOrder} // Set the value to sortOrder state
              >
                <option value="recently_added">Sort by: Recently Added</option>
                <option value="price_low_to_high">Sort by: Price (Low to High)</option>
                <option value="price_high_to_low">Sort by: Price (High to Low)</option>
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
              {sortedWishlistItems.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rate={item.rate} // Changed from item.rating?.rate to item.rate
                  inStock={item.inStock}
                  handleMoveToCart={handleMoveToCart}
                  handleRemoveItem={handleRemoveItem}
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
