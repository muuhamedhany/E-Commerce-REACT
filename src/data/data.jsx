import React, { useState, useEffect } from 'react';

const useProducts = () => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await fetch(
          'https://fakestoreapi.com/products',
        );
        if (!productsResponse.ok) {
          throw new Error(`HTTP error! status: ${productsResponse.status}`);
        }
        const productsData = await productsResponse.json();
        setData(productsData);

        // Fetch categories
        const categoriesResponse = await fetch(
          'https://fakestoreapi.com/products/categories',
        );
        if (!categoriesResponse.ok) {
          throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
        }
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, categories, loading, error };
};

export default useProducts;
