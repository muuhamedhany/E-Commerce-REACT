import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import useProducts from '../../data/data'; // Import useProducts hook
import { Card } from '../Card/Card'; // Import Card component
// Removed useCart, useWishlist, useToast as Card handles these

const ProductCarousel = () => {
  const scrollRef = useRef(null);
  const { filteredData, loading, error } = useProducts(); // Use useProducts hook
  const [carouselProducts, setCarouselProducts] = useState([]);
  // Removed useCart, useWishlist, useToast hooks

  useEffect(() => {
    if (filteredData && filteredData.length > 0) {
      // Select a subset of products for the carousel (e.g., first 10 or random)
      setCarouselProducts(filteredData.slice(0, 10)); // Or implement more complex logic
    }
  }, [filteredData]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust as needed
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  // Removed handleWishlistClick and handleAddToCartClick

  if (loading)
    return <div className="text-center py-8">Loading recommended products...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error.message}
      </div>
    );

  if (!carouselProducts || carouselProducts.length === 0) {
    return null; // Or a placeholder if no products are available
  }

  return (
    <div className="relative">
      <div
        className="flex overflow-x-scroll scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        {carouselProducts.map((product) => (
          <div key={product.id} className="flex-none w-64 h-[400px] p-4">
            <Card
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rate={product.rating?.rate}
              inStock={product.inStock}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel; 