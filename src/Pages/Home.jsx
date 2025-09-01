import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CircularGalleryUse from '../components/CircularGallery/CircularGalleryUse';
import Silk from '../components/Silk/Silk';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryItem = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const testimonialItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero Banner Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative  md:h-[660px] h-[660px] bg-cover bg-center
         flex flex-col items-center justify-center text-center
          "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1713947506242-8fcae733d158?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute  inset-0 bg-black opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex px-4 md:px-0 flex-col items-center text-white z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            Shop the Latest Trends at Unbeatable Prices
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[1.2rem] md:text-[1.5rem] mb-8"
          >
            Discover fashion, electronics, and more – all in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
          >
            <Link to="/Shop" className="primary-button z-10 text-[1.5rem]">
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Featured Categories */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="cont mt-15 mb-12"
      >
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" font-bold text-center mb-10 FacultyGlyphic "
        >
          Shop by Category
        </motion.h4>
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          <motion.div variants={categoryItem} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
            <Link
              to="/Shop/men's%20clothing"
              className="relative  bg-cover bg-center flex flex-col
           items-center justify-center text-white py-8 rounded-lg
            shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-45 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg  text-white  text-center font-semibold ">
                  Men's Fashion
                </h3>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={categoryItem} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
            <Link
              to="/Shop/men's%20clothing"
              className="relative  bg-cover bg-center flex flex-col
           items-center justify-center text-white py-8 rounded-lg
            shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-45 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg  text-white  text-center font-semibold ">
                  Women's Fashion
                </h3>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={categoryItem} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
            <Link
              to="/Shop/electronics"
              className="relative  bg-cover bg-center flex flex-col
           items-center justify-center text-white py-8 rounded-lg
            shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-45 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg  text-white  text-center font-semibold ">
                  Electronics
                </h3>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={categoryItem} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
            <Link
              to="/Shop/jewelery"
              className="relative  bg-cover bg-center flex flex-col
           items-center justify-center text-white py-8 rounded-lg
            shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-45 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg  text-white  text-center font-semibold ">
                  Jewelery
                </h3>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={categoryItem} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
            <Link
              to="/Shop/shoes"
              className="relative  bg-cover bg-center flex flex-col
           items-center justify-center text-white py-8 rounded-lg
            shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?q=80&w=941&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-45 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg  text-white  text-center font-semibold ">
                  Shoes
                </h3>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={categoryItem} transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
            <Link
              to="/Shop/home-living"
              className="relative  bg-cover bg-center flex flex-col
           items-center justify-center text-white py-8 rounded-lg
            shadow-md hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1723200799213-e6cff0c3e641?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-45 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg  text-white  text-center font-semibold ">
                  Home & Living
                </h3>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 3Featured Products / Best Sellers */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="cont mt-15 mb-12"
      >
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold text-center mb-10 FacultyGlyphic "
        >
          Best Sellers
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FeaturedProducts />
        </motion.div>
      </motion.div>

      {/* Deals of the Day / Special Offers */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="my-35"
      >
        {' '}
        <div
          className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]
       text-white mb-12 text-center shadow-lg flex flex-col items-center py-7
        "
        >
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl  mb-4 FacultyGlyphic"
          >
            Today's Deals
          </motion.h4>
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-6"
          >
            Up to{' '}
            <motion.span 
              initial={{ scale: 0.5, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 200 }}
              className=" cate italic text-5xl FacultyGlyphic"
            >
              50%
            </motion.span>{' '}
            off Electronics
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <Link to="/Shop" className="text-[1.3rem] secondary-button">
              Shop Deals
            </Link>
          </motion.div>
        </div>{' '}
      </motion.div>

      {/* New Arrivals */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="cont my-35"
      >
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 FacultyGlyphic "
        >
          Fresh & New
        </motion.h4>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FeaturedProducts />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-15 "
        >
          <Link to="/Shop" className="secondary-button text-[1.3rem] px-6 py-3">
            View All New Arrivals
          </Link>
        </motion.div>
      </motion.div>

      {/* Testimonials / Reviews */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="my-35 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] py-12 mb-12 dark:bg-gray-900"
      >
        <div className="cont">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-10 FacultyGlyphic dark:text-white"
          >
            What Our Customers Say
          </motion.h4>
          <motion.div 
            variants={staggerContainer}
            className="grid cont grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={testimonialItem}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className=" bg-[var(--secondary)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className=" italic mb-4 ">
                "Great quality and fast delivery. I'll definitely shop again!"
              </p>
              <p className="font-semibold ">⭐⭐⭐⭐⭐ – Sarah K.</p>
            </motion.div>
            <motion.div 
              variants={testimonialItem}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.1 }}
              className=" bg-[var(--secondary)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="italic mb-4 ">
                "Amazing products and excellent customer service. Highly
                recommend this store!"
              </p>
              <p className="font-semibold ">⭐⭐⭐⭐⭐ – John D.</p>
            </motion.div>
            <motion.div 
              variants={testimonialItem}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.2 }}
              className=" bg-[var(--secondary)] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className=" italic mb-4 ">
                "I found exactly what I was looking for. Smooth shopping
                experience from start to finish."
              </p>
              <p className="font-semibold ">⭐⭐⭐⭐⭐ – Emily R.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Newsletter Subscription */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="cont "
      >
        <Newsletter />
      </motion.div>
    </>
  );
};

export default Home;
