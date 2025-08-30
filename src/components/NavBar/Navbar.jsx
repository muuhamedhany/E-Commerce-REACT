import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { FaHeart as HeartIcon } from 'react-icons/fa';
import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import { FaUser as UserIcon } from 'react-icons/fa';
import { BsThreeDotsVertical as Dots } from 'react-icons/bs';
import useProducts from '../../data/data';
import { useWishlist } from '../../context/WishlistContext'; // Import useWishlist hook
import { useCart } from '../../context/CartContext'; // Import useCart hook

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { categories, filteredData } = useProducts(searchQuery);
  const { wishlist } = useWishlist(); // Use wishlist hook
  const { getCartItemCount } = useCart(); // Use cart hook
  const authRef = useRef(null);
  const categoriesRef = useRef(null);
  const mobileNavRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    navigate(`/Shop?search=${query}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (authRef.current && !authRef.current.contains(event.target)) {
        setShowAuth(false);
      }
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="md:py-4 shadow-md
     py-5 w-full bg-[var(--background)]"
    >
      <div className="flex cont items-center  justify-between ">
        <Link to="/" className="text-2xl font-bold">
          LOGO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text">
            Home
          </Link>

          {/* Categories Dropdown */}
          <div
            className="relative"
            ref={categoriesRef}
            onClick={() => setShowCategories(!showCategories)}
          >
            <Link className="text">Shop</Link>
            <div
              className={`absolute top-full bg-[var(--secondary)]
            shadow-lg rounded-md p-4 min-w-[200px] mt-3 z-50
            transform transition-all duration-300 origin-top
            ${
              showCategories && categories
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-5'
            }`}
            >
              <Link
                to="/Shop"
                className="block py-2 text capitalize hover:translate-x-2 transition-all"
              >
                All Products
              </Link>
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category}
                  to={`/Shop/${category}`}
                  className="block py-2 text capitalize hover:translate-x-2 transition-all"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/About" className="text">
            About
          </Link>

          <Link to="/Contact" className="text">
            Contact
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/Wishlist" className="relative">
            <HeartIcon size="25" />
            {wishlist.length > 0 && ( // Conditionally render span based on wishlist length
              <span
                className="absolute -top-1 -right-2 bg-[var(--accent)]
            text-[10px] rounded-full w-4 h-4
            flex items-center justify-center"
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/Cart" className="relative">
            <CartIcon size="25" />
            {getCartItemCount() > 0 && ( // Conditionally render span based on cart item count
              <span
                className="absolute -top-1 -right-2 bg-[var(--accent)]
            text-[10px] rounded-full w-4 h-4
            flex items-center justify-center"
              >
                {getCartItemCount()}
              </span>
            )}
          </Link>

          <button
            className="text-2xl"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <Dots />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed z-100 inset-0 bg-[#0000004a] md:hidden transition-all duration-300 ${
            showMobileNav ? ' visible' : ' invisible'
          }`}
        >
          <div
            className={`fixed right-0 top-0 h-full w-[250px] bg-[var(--background)] p-4 
          transform transition-all duration-300 ease-in-out ${
            showMobileNav ? 'translate-x-0' : 'translate-x-full'
          }`}
            ref={mobileNavRef}
          >
            <div className="relative mb-6">
              <input
                type="search"
                placeholder="Search products... (e.g., laptop)"
                value={searchQuery}
                onChange={handleSearch}
                className="px-4 py-2 rounded-full bg-[#779c9433] border-2 border-[var(--accent)]
             w-full focus:border-[var(--primary)] outline-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text text-xl"
                onClick={() => setShowMobileNav(false)}
              >
                Home
              </Link>

              <div className="relative">
                <button
                  className="text text-xl w-full text-left"
                  onClick={() => setShowCategories(!showCategories)}
                >
                  Shop
                </button>
                <div
                  className={`p-3 flex flex-col transition-all duration-500 overflow-auto ${
                    showCategories && categories
                      ? 'max-h-[500px]'
                      : 'max-h-0  -m-3 -p-3'
                  }`}
                >
                  <Link
                    to="/Shop"
                    className="block py-2 text capitalize"
                    onClick={() => {
                      setShowMobileNav(false);
                      setShowCategories(false);
                    }}
                  >
                    All Products
                  </Link>
                  {categories.slice(0, 5).map((category) => (
                    <Link
                      key={category}
                      to={`/Shop/${category}`}
                      className="block py-2 text capitalize"
                      onClick={() => {
                        setShowMobileNav(false);
                        setShowCategories(false);
                      }}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/About"
                className="text text-xl"
                onClick={() => setShowMobileNav(false)}
              >
                About
              </Link>

              <Link
                to="/Contact"
                className="text text-xl"
                onClick={() => setShowMobileNav(false)}
              >
                Contact
              </Link>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to="/Login"
                  onClick={() => setShowMobileNav(false)}
                  className="primary-button w-full"
                >
                  Log In
                </Link>
                <Link
                  to="/Signup"
                  onClick={() => setShowMobileNav(false)}
                  className="secondary-button w-full"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Icons for Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products... (e.g., t-shirt)"
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 rounded-full bg-[#779c9413] border-2 border-[var(--accent)]
             w-[300px] focus:border-[var(--primary)] outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </button>
          </div>

          <Link to="/Wishlist" className="relative">
            <HeartIcon size="25" />
            {wishlist.length > 0 && ( // Conditionally render span based on wishlist length
              <span
                className="absolute -top-1 -right-2 bg-[var(--accent)]
            text-[10px] rounded-full w-4 h-4
            flex items-center justify-center"
              >
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/Cart" className="relative">
            <CartIcon size="25" />
            {getCartItemCount() > 0 && ( // Conditionally render span based on cart item count
              <span
                className="absolute -top-1 -right-2 bg-[var(--accent)]
            text-[10px] rounded-full w-4 h-4
            flex items-center justify-center"
              >
                {getCartItemCount()}
              </span>
            )}
          </Link>

          {/* Auth Dropdown */}
          <div
            className="relative z-100"
            ref={authRef}
            onClick={() => setShowAuth(!showAuth)}
          >
            <UserIcon className="cursor-pointer" size="25" />
            <div
              className={`absolute top-full right-0 bg-[var(--accent)]
            shadow-lg rounded-md p-4 min-w-[200px] mt-3
            transform transition-all duration-300 origin-top
            ${
              showAuth
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-5'
            }`}
            >
              <div className="flex flex-col gap-2">
                <Link to="/Login" className="primary-button">
                  Log In
                </Link>
                <Link to="/Signup" className="secondary-button">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
