import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar'; // Corrected import path
import ThemeToggle from '../components/Theme/ThemeToggle';
import ScrollUp from '../components/ScrollUp/Scrollup';
import Footer from '../components/Footer/Footer';
import { WishlistProvider } from '../context/WishlistContext'; // Import WishlistProvider
import { CartProvider } from '../context/CartContext'; // Import CartProvider
import { ToastProvider } from '../context/ToastContext'; // Import ToastProvider

const RootLayout = () => {
  return (
    <ToastProvider> {/* Wrap with ToastProvider */}
      <WishlistProvider> {/* Wrap with WishlistProvider */}
        <CartProvider> {/* Wrap with CartProvider */}
          <div>
            <Navbar />

            <Outlet />

            <ScrollUp />
            <Footer />
          </div>
        </CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
};

export default RootLayout;
