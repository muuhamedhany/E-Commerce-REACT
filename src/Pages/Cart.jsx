import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart hook
import { FaTrashAlt } from 'react-icons/fa'; // Import trash icon
import { PiEmptyBold } from 'react-icons/pi';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'; // Import FeaturedProducts

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart(); // Use cart context
  // Remove the local cartItems state
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: 'Stylish T-Shirt',
  //     image: 'https://via.placeholder.com/100/A78BFA/FFFFFF?text=T-Shirt',
  //     price: 29.99,
  //     quantity: 2,
  //   },
  //   {
  //     id: 2,
  //     name: 'Wireless Headphones',
  //     image: 'https://via.placeholder.com/100/FACC15/FFFFFF?text=Headphones',
  //     price: 79.99,
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     name: 'Smartwatch',
  //     image: 'https://via.placeholder.com/100/34D399/FFFFFF?text=Smartwatch',
  //     price: 199.99,
  //     quantity: 1,
  //   },
  // ]);

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity); // Use updateQuantity from context
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id); // Use removeFromCart from context
  };

  const subtotal = getCartTotal(); // Get subtotal from context
  const shipping = 0; // Placeholder for shipping cost
  const total = subtotal + shipping;

  return (
    <div className="cont mt-15">
      <h1 className="text-4xl font-bold text-center mb-4 FacultyGlyphic">
        Your Shopping Cart
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        Review your items before proceeding to checkout.
      </p>

      {cart.length === 0 ? ( // Use cart.length from context
        <div className="flex flex-col gap-5 items-center justify-center py-20 bg-gray-50 rounded-lg shadow-md">
          <PiEmptyBold size="55" />
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            Your cart is empty. Start shopping to fill it up!
          </p>
          <Link to="/Shop" className="primary-button text-lg px-6 py-3">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="lg:flex lg:space-x-8">
          <div className="flex-grow space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center border rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-0 md:mr-4 mb-4 md:mb-0"
                />
                <div className="flex-grow text-center md:text-left">
                  <Link to={`/product/${item.id}`}>
                    <h2 className="text-xl font-semibold hover:underline text-gray-800">
                      {item.title} {/* Changed item.name to item.title */}
                    </h2>
                  </Link>
                  <p className="text-gray-700">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-700">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    className="px-3 py-1 border rounded-l-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="px-3 py-1 border rounded-r-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-200 p-2 rounded-full hover:bg-red-100"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </div>
            ))}
            <Link
              to="/Shop"
              className="inline-block mt-6 secondary-button px-6 py-3 text-lg"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Shipping:</span>
              <span className="font-semibold">
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="mt-6">
              <input
                type="text"
                placeholder="Enter coupon code (optional)"
                className="w-full p-3 border rounded-md mb-4"
              />
              <button className="w-full primary-button px-6 py-3 text-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-12">
        <h4 className="text-3xl font-bold text-center mb-6 FacultyGlyphic">
          Featured Products
        </h4>
        <FeaturedProducts /> {/* Use FeaturedProducts component */}
      </div>
    </div>
  );
};

export default Cart;
