import React, { useState, useEffect } from 'react';
import CircularGalleryUse from '../components/CircularGallery/CircularGalleryUse';
import Silk from '../components/Silk/Silk';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <div className="absolute -z-1 w-full h-[750px] md:h-[670px]">
        <Silk
          speed={20}
          scale={1}
          color="#33433f"
          noiseIntensity={1.5}
          rotation={1}
        />
      </div>
      <div
        className="text-center cont flex mt-25 md:mt-47
         flex-col md:gap-5
       justify-center md:items-center mb-40"
      >
        <h1 className="text-[#f0f4f3]">
          Your Favorite Products, Just a Click Away.
        </h1>
        <h2 className="text-[#f0f4f3] FacultyGlyphic">
          Discover fashion, gadgets, and more — all in one place.
        </h2>

        <div className="text-2xl flex flex-col gap-3 md:w-100">
          <Link to="/Shop" className="mt-10 primary-button">
            Shop Now
          </Link>
          <a href="#CircularGallery" className=" secondary-button">
            Explore Categories
          </a>
        </div>
      </div>

      <div className="bg-[var(--secondary)] py-10 text-center">
        <h1>
          All PRODUCTS ARE NOW{' '}
          <span className="FacultyGlyphic cate italic">50% </span> OFF!
        </h1>
      </div>

      <div id="CircularGallery">
        <CircularGalleryUse />
      </div>

      <div className="cont flex flex-col gap-30 mt-30">
        <FeaturedProducts />

        <div>
          <Newsletter />
        </div>
      </div>
    </>
  );
};

export default Home;
