import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom'; // Import useLocation and Link
import Navbar from '../components/NavBar/Navbar'; // Corrected import path
// Removed ThemeToggle import
import ScrollUp from '../components/ScrollUp/Scrollup';
import Footer from '../components/Footer/Footer';
import { WishlistProvider } from '../context/WishlistContext'; // Import WishlistProvider
import { CartProvider } from '../context/CartContext'; // Import CartProvider
import { ToastProvider } from '../context/ToastContext'; // Import ToastProvider
import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider
import useProducts from '../data/data'; // Import useProducts hook

const RootLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const { filteredData } = useProducts(); // Use useProducts hook

  const shouldShowBreadcrumbs =
    location.pathname !== '/' &&
    location.pathname !== '/Login' &&
    location.pathname !== '/Signup' &&
    location.pathname !== '/forgot-password';

  let breadcrumbItems = [];

  if (shouldShowBreadcrumbs) {
    if (pathnames[0] === 'product' && pathnames[1]) {
      // Product details page: Home / Category / Product Title
      const productId = parseInt(pathnames[1]);
      const product = filteredData.find((p) => p.id === productId);
      if (product) {
        breadcrumbItems.push({ label: 'Home', path: '/' });
        breadcrumbItems.push({
          label: product.category.replace(/%20/g, ' '),
          path: `/Shop/${product.category}`,
        });
        breadcrumbItems.push({ label: product.title, path: location.pathname });
      } else {
        // Fallback if product not found, display original path
        breadcrumbItems.push({ label: 'Home', path: '/' });
        pathnames.forEach((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          breadcrumbItems.push({
            label: name.replace(/%20/g, ' '),
            path: routeTo,
          });
        });
      }
    } else {
      // Other pages: Home / Segment1 / Segment2 ...
      breadcrumbItems.push({ label: 'Home', path: '/' });
      pathnames.forEach((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        breadcrumbItems.push({
          label: name.replace(/%20/g, ' '),
          path: routeTo,
        });
      });
    }
  }

  return (
    <ToastProvider>
      {' '}
      {/* Wrap with ToastProvider */}
      <WishlistProvider>
        {' '}
        {/* Wrap with WishlistProvider */}
        <CartProvider>
          {' '}
          {/* Wrap with CartProvider */}
          <AuthProvider>
            {' '}
            {/* Wrap with AuthProvider */}
            <div>
              <Navbar />

              {shouldShowBreadcrumbs && breadcrumbItems.length > 0 && (
                <nav className="text-sm mb-6 cont mt-15">
                  <ol className="list-none p-0 inline-flex">
                    {breadcrumbItems.map((item, index) => {
                      const isLast = index === breadcrumbItems.length - 1;
                      return (
                        <li key={item.label} className="flex items-center">
                          {isLast ? (
                            <span className="text-gray-800 capitalize">
                              {item.label}
                            </span>
                          ) : (
                            <Link
                              to={item.path}
                              className="text-gray-600 hover:text-[var(--primary)] capitalize"
                            >
                              {item.label}
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
          </AuthProvider>
        </CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
};

export default RootLayout;
