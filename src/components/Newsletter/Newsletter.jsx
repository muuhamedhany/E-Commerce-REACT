import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail(''); // Clear the input after submission
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
        Join Our Community
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
        Stay up-to-date with our latest news and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-md shadow-sm hover:bg-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 dark:bg-[var(--primary)] dark:hover:bg-[var(--accent)]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter; 