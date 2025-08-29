import React from 'react';
import AllProducts from './AllProducts';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const { category } = useParams();

  return <AllProducts category={category} />;
};

export default Shop;
