import React from 'react';
import { Link } from 'react-router-dom';
import { PiSmileySadBold } from 'react-icons/pi'; // Using a sad smiley icon as an illustration

const NotFound = () => {
  return (
    <div className="cont mt-15 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 FacultyGlyphic">
        404 – Page Not Found
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <PiSmileySadBold className="text-9xl text-[var(--accent)] mb-10 animate-pulse" />
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/" className="primary-button text-lg px-8 py-4">
          Go Back Home
        </Link>
        <Link to="/Shop" className="secondary-button text-lg px-8 py-4">
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default NotFound;