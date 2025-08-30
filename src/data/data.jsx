import React, { useState, useEffect } from 'react';

const useProducts = (searchQuery = '') => {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
        // Add a random inStock property to each product
        const productsWithStock = productsData.map(product => ({
          ...product,
          inStock: Math.random() > 0.5,
        }));
        setData(productsWithStock);

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

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [data, searchQuery]);

  return { filteredData, categories, loading, error };
};

export default useProducts;
