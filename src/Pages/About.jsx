import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShippingFast, FaHeadset, FaLeaf, FaShoppingBag, FaCreditCard, FaStar, FaUndo } from 'react-icons/fa';

const About = () => {
  return (
    <div className="cont mt-15">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white p-8 rounded-lg shadow-md mb-12"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-extrabold mb-4 FacultyGlyphic animate-fade-in-down">
            About Us
          </h1>
          <p className="text-xl font-light max-w-2xl animate-fade-in-up">
            Your trusted destination for quality products at affordable prices.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="our-story-section p-8 bg-white rounded-lg shadow-md mb-12 animate-fade-in dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center FacultyGlyphic dark:text-white">
          Our Story
        </h2>
        <p className="text-md text-gray-700 leading-relaxed text-center max-w-4xl mx-auto dark:text-gray-300">
          We started with a simple idea: to make shopping easier, faster, and more enjoyable for everyone. 
          What began as a small online store has grown into a trusted destination where customers can 
          find everything they love in one place. Our journey has been driven by a passion for connecting 
          people with exceptional products and providing a seamless experience from browsing to delivery.
        </p>
      </div>

      {/* Our Mission & Values Section */}
      <div className="mission-values-section p-8 bg-gray-100 rounded-lg shadow-md mb-12 animate-fade-in dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center FacultyGlyphic dark:text-white">
          Our Mission & Values
        </h2>
        <p className="text-md text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8 dark:text-gray-300">
          Our mission is to deliver quality products at fair prices while providing a seamless online shopping experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="value-item flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
            <FaCheckCircle className="text-[var(--primary)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Quality Products</h3>
          </div>
          <div className="value-item flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
            <FaShippingFast className="text-[var(--primary)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Fast & Reliable Shipping</h3>
          </div>
          <div className="value-item flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
            <FaHeadset className="text-[var(--primary)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Great Customer Support</h3>
          </div>
          <div className="value-item flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
            <FaLeaf className="text-[var(--primary)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Eco-Friendly Packaging</h3>
          </div>
        </div>
      </div>

      {/* Why Shop With Us? Section */}
      <div className="why-shop-section p-8 bg-white rounded-lg shadow-md mb-12 animate-fade-in dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center FacultyGlyphic dark:text-white">
          Why Shop With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          <div className="shop-feature flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900">
            <FaShoppingBag className="text-[var(--accent)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Wide Product Range</h3>
          </div>
          <div className="shop-feature flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900">
            <FaCreditCard className="text-[var(--accent)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Secure Payments</h3>
          </div>
          <div className="shop-feature flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900">
            <FaStar className="text-[var(--accent)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Customer Satisfaction Guarantee</h3>
          </div>
          <div className="shop-feature flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900">
            <FaUndo className="text-[var(--accent)] text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Easy Returns</h3>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section flex flex-col items-center justify-center text-center p-8 bg-[var(--primary)] text-white rounded-lg shadow-md mb-12 animate-fade-in dark:bg-gray-700">
        <h2 className="text-4xl font-bold mb-6 FacultyGlyphic dark:text-white">
          Join thousands of happy customers and start shopping today!
        </h2>
        <Link
          to="/Shop"
          className="bg-white text-[var(--primary)] px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default About;
