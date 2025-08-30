import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductCarousel = ({ products }) => {
  const scrollRef = useRef(null);

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

  if (!products || products.length === 0) {
    return null; // Or a placeholder if no products are available
  }

  return (
    <div className="relative">
      <div
        className="flex overflow-x-scroll scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-64 p-4">
            <Link to={`/products/${product.id}`}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
                  <button className="mt-3 w-full bg-[var(--primary)] text-white py-2 rounded-md hover:bg-[var(--accent)] transition-colors duration-300">
                    View Product
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ProductCarousel; 