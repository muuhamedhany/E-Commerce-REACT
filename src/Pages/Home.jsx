import React, { useState, useEffect } from 'react';
import CircularGalleryUse from '../components/CircularGallery/CircularGalleryUse';
import Silk from '../components/Silk/Silk';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      {/* Hero Banner Section */}
      <div
        className="relative h-[600px] bg-cover bg-center
         flex flex-col items-center justify-center text-center
          "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1713947506242-8fcae733d158?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center text-white z-10">
          <h1 className="text-center">
            Shop the Latest Trends at Unbeatable Prices
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover fashion, electronics, and more – all in one place.
          </p>
          <Link to="/Shop" className="primary-button text-[1.5rem]">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="cont mt-15 mb-12">
        <h4 className=" font-bold text-center mb-10 FacultyGlyphic ">
          Shop by Category
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <Link
            to="/Shop/men's%20clothing"
            className="flex flex-col items-center justify-center p-6 bg-[var(--accent)]
             rounded-lg shadow-md hover:shadow-lg transition-shadow
              duration-300"
          >
            <h3 className="text-lg font-semibold ">Men's Fashion</h3>
          </Link>
          <Link
            to="/Shop/women's%20clothing"
            className="flex flex-col items-center justify-center p-6
             bg-[var(--accent)]
             rounded-lg shadow-md hover:shadow-lg transition-shadow
              duration-300"
          >
            <h3 className="text-center text-lg font-semibold ">
              Women's Fashion
            </h3>
          </Link>
          <Link
            to="/Shop/electronics"
            className="flex flex-col items-center justify-center p-6 bg-[var(--accent)]
             rounded-lg shadow-md hover:shadow-lg transition-shadow
              duration-300"
          >
            <h3 className="text-lg font-semibold ">Electronics</h3>
          </Link>
          <Link
            to="/Shop/jewelery"
            className="flex flex-col items-center justify-center p-6 bg-[var(--accent)]
             rounded-lg shadow-md hover:shadow-lg transition-shadow
              duration-300"
          >
            <h3 className="text-lg font-semibold ">Jewelery</h3>
          </Link>
          <Link
            to="/Shop/shoes"
            className="flex flex-col items-center justify-center p-6 bg-[var(--accent)]
             rounded-lg shadow-md hover:shadow-lg transition-shadow
              duration-300"
          >
            <h3 className="text-lg font-semibold ">Shoes</h3>
          </Link>
          <Link
            to="/Shop/home-living"
            className="flex flex-col items-center justify-center p-6 bg-[var(--accent)]
             rounded-lg shadow-md hover:shadow-lg transition-shadow
              duration-300"
          >
            <h3 className="text-lg font-semibold ">Home & Living</h3>
          </Link>
        </div>
      </div>

      {/* 3Featured Products / Best Sellers */}
      <div className="cont mt-15 mb-12">
        <h4 className="font-bold text-center mb-10 FacultyGlyphic dark:text-white">
          Best Sellers
        </h4>
        <FeaturedProducts />
      </div>

      {/* Deals of the Day / Special Offers */}
      <div className="my-35">
        {' '}
        <div
          className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]
       text-white mb-12 text-center shadow-lg 
        "
        >
          <h2 className="text-4xl pt-10 mb-4 FacultyGlyphic">Today's Deals</h2>
          <p className="text-xl mb-6">
            Up to{' '}
            <span className=" cate italic text-5xl FacultyGlyphic">50%</span>{' '}
            off Electronics
          </p>

          <Link to="/Shop" className="text-[1.3rem] secondary-button">
            Shop Deals
          </Link>
        </div>{' '}
      </div>

      {/* New Arrivals */}
      <div className="cont mt-15 mb-12">
        <h4 className="text-4xl font-bold text-center mb-10 FacultyGlyphic ">
          Fresh & New
        </h4>

        <FeaturedProducts />

        <div className="text-center mt-15 ">
          <Link to="/Shop" className="secondary-button text-[1.3rem] px-6 py-3">
            View All New Arrivals
          </Link>
        </div>
      </div>

      {/* Testimonials / Reviews */}
      <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] py-12 mb-12 dark:bg-gray-900">
        <div className="cont">
          <h4 className="text-4xl font-bold text-center mb-10 FacultyGlyphic dark:text-white">
            What Our Customers Say
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" bg-[var(--secondary)] p-6 rounded-lg shadow-md ">
              <p className=" italic mb-4 ">
                "Great quality and fast delivery. I'll definitely shop again!"
              </p>
              <p className="font-semibold ">⭐⭐⭐⭐⭐ – Sarah K.</p>
            </div>
            <div className=" bg-[var(--secondary)] p-6 rounded-lg shadow-md">
              <p className="italic mb-4 ">
                "Amazing products and excellent customer service. Highly
                recommend this store!"
              </p>
              <p className="font-semibold ">⭐⭐⭐⭐⭐ – John D.</p>
            </div>
            <div className=" bg-[var(--secondary)] p-6 rounded-lg shadow-md">
              <p className=" italic mb-4 ">
                "I found exactly what I was looking for. Smooth shopping
                experience from start to finish."
              </p>
              <p className="font-semibold ">⭐⭐⭐⭐⭐ – Emily R.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="cont">
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
