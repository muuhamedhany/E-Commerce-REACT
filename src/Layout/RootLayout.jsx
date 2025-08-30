import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar';
import ThemeToggle from '../components/Theme/ThemeToggle';
import ScrollUp from '../components/ScrollUp/Scrollup';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <ScrollUp />
      <Footer />
    </div>
  );
};

export default RootLayout;
