import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart } from 'react-icons/fa';
import useProducts from '../data/data';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';

const ProductDetails = () => {
  const { id } = useParams();
  const { filteredData, loading, error } = useProducts();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (filteredData && id) {
      const foundProduct = filteredData.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [filteredData, id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart({ ...product, quantity: 1 }); // Add one by one to use CartContext logic
      }
      showToast(`${quantity} ${product.title} added to cart!`, 'success');
    }
  };

  const handleWishlistToggle = () => {
    if (product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
        showToast('Item removed from wishlist!', 'error');
      } else {
        addToWishlist({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          rate: product.rating?.rate,
          inStock: product.inStock,
        });
        showToast('Item added to wishlist successfully!', 'success');
      }
    }
  };

  const isProductInWishlist = product ? isInWishlist(product.id) : false;

  if (loading)
    return (
      <div className="text-center py-8 cont mt-15">Loading product details...</div>
    );
  if (error)
    return (
      <div className="text-center py-8 cont mt-15 text-red-500">
        Error: {error.message}
      </div>
    );
  if (!product)
    return (
      <div className="text-center py-8 cont mt-15">Product not found.</div>
    );

  return (
    <div className="cont mt-15">
      {/* Removed Breadcrumbs */}

      <div className="flex flex-col lg:flex-row gap-8 bg-gray-50 p-6 rounded-lg shadow-lg">
        {/* Image Section */}
        <div className="lg:w-1/2 flex items-center justify-center p-4 bg-white rounded-md">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full h-auto max-h-[500px] object-contain"
          />
        </div>

        {/* Product Info & Actions Section */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          {/* Category Badge */}
          <span className="bg-[var(--accent)] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit capitalize">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-gray-700">
            <div className="flex text-[var(--primary)]">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(product.rating.rate) ? '' : 'opacity-30'}
                />
              ))}
            </div>
            <span>
              {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-gray-900 text-3xl font-bold">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-4 py-2 text-lg hover:bg-gray-200 rounded-l-md"
              >
                -
              </button>
              <span className="px-4 py-2 text-lg border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 text-lg hover:bg-gray-200 rounded-r-md"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className={` flex-grow ${!product.inStock ? 'disabled-button' : 'primary-button'}`}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`p-3 rounded-full shadow-md transition-all duration-300
              ${
                isProductInWishlist
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-white text-gray-400 hover:text-[var(--primary)]'
              }`}
            >
              <FaHeart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6 FacultyGlyphic">
          You might also like
        </h2>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;