import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <div className="bg-[var(--accent)] rounded-[0.5rem]
     py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center
      justify-center text-center">
      <h1 className="text-3xl font-extrabold
       text-gray-900 dark:text-white mb-4">
        Join Our Community
      </h1>
      <p className="text-xl text-[#ffffff98]
       mb-8 text-center max-w-md">
        Stay up-to-date with our latest news and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row
       gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-3 border border-gray-300 
          rounded-md shadow-sm focus:outline-none focus:ring-2
           focus:ring-blue-500 focus:border-transparent
            dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <button
          type="submit"
          className="primary-button"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter; 