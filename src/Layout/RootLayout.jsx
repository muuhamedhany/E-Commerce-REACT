import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar'; // Corrected import path
import ThemeToggle from '../components/Theme/ThemeToggle';
import ScrollUp from '../components/ScrollUp/Scrollup';
import Footer from '../components/Footer/Footer';
import { WishlistProvider } from '../context/WishlistContext'; // Import WishlistProvider

const RootLayout = () => {
  return (
    <WishlistProvider> {/* Wrap with WishlistProvider */}
      <div>
        <Navbar />

        <Outlet />

        <ScrollUp />
        <Footer />
      </div>
    </WishlistProvider>
  );
};

export default RootLayout;
