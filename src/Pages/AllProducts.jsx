import React, { useEffect, useState } from 'react';
import useProducts from '../data/data';
import { ThreeDot } from 'react-loading-indicators';
import { Card } from '../components/Card/Card';
import { Link, useLocation } from 'react-router-dom';

const AllProducts = ({ category }) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('search') || '';

  const { filteredData, loading, error } = useProducts(searchQuery);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (filteredData) {
      const uniqueCategories = [
        ...new Set(filteredData.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
      if (category) {
        setFilteredProducts(
          filteredData.filter((product) => product.category === category),
        );
      } else {
        setFilteredProducts(filteredData);
      }
    }
  }, [filteredData, category]);

  if (loading)
    return (
      <div className="flex justify-center items-center mt-15">
        <ThreeDot color={['#49645e', '#5e827a', '#779c94', '#95b1ab']} />
      </div>
    );
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <div className="cont mt-15">
      <h1 className="font-bold text-center mb-8">
        {searchQuery ? (
          <>
            Search Results for '
            <span className="cate FacultyGlyphic">{searchQuery}</span>'
          </>
        ) : category ? (
          <>
            Products in{' '}
            <span className="capitalize FacultyGlyphic cate ">{category}</span>
          </>
        ) : (
          'All Products'
        )}
      </h1>

      <div className="flex  justify-center flex-wrap gap-4 mb-8">
        <Link
          to="/Shop"
          className={`px-4 py-2 rounded-full border-2 border-[var(--accent)] 
             hover:bg-gray-200 transition-colors duration-200
              ${!category ? 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]' : ''}`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/Shop/${cat}`}
            className={`px-4 py-2 rounded-full border-2 border-[var(--accent)]
                hover:bg-gray-200 transition-colors duration-200
                 ${category === cat ? 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]' : ''}`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && !loading && !error && (
        <div className="text-center py-8 text-gray-500 text-xl">
          Items are out of stock.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id} // Add the id prop
            title={product.title}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
            inStock={product.inStock} // Pass the inStock prop
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
