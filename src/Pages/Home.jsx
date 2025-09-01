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
        className="relative  md:h-[660px] h-[660px] bg-cover bg-center
         flex flex-col items-center justify-center text-center
          "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1713947506242-8fcae733d158?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute  inset-0 bg-black opacity-50"></div>
        <div className="flex px-4 md:px-0 flex-col items-center text-white z-10">
          <h1 className="text-center">
            Shop the Latest Trends at Unbeatable Prices
          </h1>
          <p className="text-[1.2rem] md:text-[1.5rem] mb-8">
            Discover fashion, electronics, and more – all in one place.
          </p>
          <Link to="/Shop" className="primary-button z-10 text-[1.5rem]">
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
            className="relative  bg-cover bg-center flex flex-col
         items-center justify-center text-white p-8 rounded-lg
          shadow-md"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg  text-white  text-center font-semibold ">
                Men's Fashion
              </h3>
            </div>
          </Link>

          <Link
            to="/Shop/men's%20clothing"
            className="relative  bg-cover bg-center flex flex-col
         items-center justify-center text-white p-8 rounded-lg
          shadow-md"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg  text-white  text-center font-semibold ">
                Women's Fashion
              </h3>
            </div>
          </Link>

          <Link
            to="/Shop/electronics"
            className="relative  bg-cover bg-center flex flex-col
         items-center justify-center text-white p-8 rounded-lg
          shadow-md"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg  text-white  text-center font-semibold ">
                Electronics
              </h3>
            </div>
          </Link>

          <Link
            to="/Shop/jewelery"
            className="relative  bg-cover bg-center flex flex-col
         items-center justify-center text-white p-8 rounded-lg
          shadow-md"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg  text-white  text-center font-semibold ">
                Jewelery
              </h3>
            </div>
          </Link>

          <Link
            to="/Shop/shoes"
            className="relative  bg-cover bg-center flex flex-col
         items-center justify-center text-white p-8 rounded-lg
          shadow-md"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=941&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg  text-white  text-center font-semibold ">
                Shoes
              </h3>
            </div>
          </Link>

          <Link
            to="/Shop/home-living"
            className="relative  bg-cover bg-center flex flex-col
         items-center justify-center text-white p-8 rounded-lg
          shadow-md"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1723200799213-e6cff0c3e641?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg  text-white  text-center font-semibold ">
                Home & Living
              </h3>
            </div>
          </Link>
        </div>
      </div>

      {/* 3Featured Products / Best Sellers */}
      <div className="cont mt-15 mb-12">
        <h4 className="font-bold text-center mb-10 FacultyGlyphic ">
          Best Sellers
        </h4>
        <FeaturedProducts />
      </div>

      {/* Deals of the Day / Special Offers */}
      <div className="my-35">
        {' '}
        <div
          className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]
       text-white mb-12 text-center shadow-lg flex flex-col items-center py-7
        "
        >
          <h4 className="text-4xl  mb-4 FacultyGlyphic">Today's Deals</h4>
          <h4 className="text-xl mb-6">
            Up to{' '}
            <span className=" cate italic text-5xl FacultyGlyphic">50%</span>{' '}
            off Electronics
          </h4>

          <Link to="/Shop" className="text-[1.3rem] secondary-button">
            Shop Deals
          </Link>
        </div>{' '}
      </div>

      {/* New Arrivals */}
      <div className="cont my-35">
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
      <div className="my-35 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] py-12 mb-12 dark:bg-gray-900">
        <div className="cont">
          <h4 className="text-4xl font-bold text-center mb-10 FacultyGlyphic dark:text-white">
            What Our Customers Say
          </h4>
          <div className="grid cont grid-cols-1 md:grid-cols-3 gap-8">
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
      <div className="cont ">
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
