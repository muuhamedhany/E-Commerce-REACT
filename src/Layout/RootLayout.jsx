import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom'; // Import useLocation and Link
import Navbar from '../components/NavBar/Navbar'; // Corrected import path
// Removed ThemeToggle import
import ScrollUp from '../components/ScrollUp/Scrollup';
import Footer from '../components/Footer/Footer';
import { WishlistProvider } from '../context/WishlistContext'; // Import WishlistProvider
import { CartProvider } from '../context/CartContext'; // Import CartProvider
import { ToastProvider } from '../context/ToastContext'; // Import ToastProvider

const RootLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const shouldShowBreadcrumbs = 
    location.pathname !== '/' &&
    location.pathname !== '/Login' &&
    location.pathname !== '/Signup';

  return (
    <ToastProvider> {/* Wrap with ToastProvider */}
      <WishlistProvider> {/* Wrap with WishlistProvider */}
        <CartProvider> {/* Wrap with CartProvider */}
          <div>
            <Navbar />

            {shouldShowBreadcrumbs && ( // Conditionally render breadcrumbs
              <nav className="text-sm mb-6 cont mt-15">
                <ol className="list-none p-0 inline-flex">
                  <li className="flex items-center">
                    <Link to="/" className="text-gray-600 hover:text-[var(--primary)]">
                      Home
                    </Link>
                    {pathnames.length > 0 && <span className="mx-2">/</span>}
                  </li>
                  {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                      <li key={name} className="flex items-center">
                        {isLast ? (
                          <span className="text-gray-800 capitalize">{name.replace(/%20/g, ' ')}</span>
                        ) : (
                          <Link
                            to={routeTo}
                            className="text-gray-600 hover:text-[var(--primary)] capitalize"
                          >
                            {name.replace(/%20/g, ' ')}
                          </Link>
                        )}
                        {!isLast && <span className="mx-2">/</span>}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

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
