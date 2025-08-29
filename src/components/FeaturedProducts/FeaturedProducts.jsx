import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import useProducts from '../../data/data';

const FeaturedProducts = () => {
  const { data, loading, error } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const categories = [...new Set(data.map((product) => product.category))];
      const selectedProducts = [];

      // Shuffle categories to get random ones
      const shuffledCategories = categories.sort(() => 0.5 - Math.random());

      for (let i = 0; i < 4 && i < shuffledCategories.length; i++) {
        const category = shuffledCategories[i];
        const productsInCategory = data.filter(
          (product) => product.category === category,
        );
        if (productsInCategory.length > 0) {
          // Select a random product from the category
          const randomProduct =
            productsInCategory[
              Math.floor(Math.random() * productsInCategory.length)
            ];
          selectedProducts.push(randomProduct);
        }
      }
      setFeaturedProducts(selectedProducts);
    }
  }, [data]);

  if (loading)
    return <div className="text-center py-8">Loading featured products...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error.message}
      </div>
    );
  if (featuredProducts.length === 0)
    return (
      <div className="text-center py-8 text-gray-500">
        No featured products available.
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8" id='FeaturedProducts'>
      <h1 className="text-3xl font-bold text-center mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
        {featuredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
