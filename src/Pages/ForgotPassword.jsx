import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useToast } from '../context/ToastContext'; // Import useToast

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const { checkEmailExists } = useAuth(); // Use checkEmailExists from AuthContext
  const { showToast } = useToast(); // Use showToast from ToastContext

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      showToast('Please enter your email address.', 'error');
      return;
    }

    if (checkEmailExists(email)) {
      showToast('Password reset link has been sent!', 'success');
    } else {
      showToast('Email not found.', 'error');
    }
    setEmail(''); // Clear email after submission
  };

  return (
    <div className="cont mt-15 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 FacultyGlyphic">
          Forgot Your Password?
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your email address below, and we'll send you a link to reset
          your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., john.doe@example.com" // Added placeholder
              className="mt-1 block w-full px-3 py-2 border
               border-gray-300 rounded-md shadow-sm
                focus:outline-none focus:ring-[var(--primary)]
                 focus:border-[var(--primary)]"
            />
          </div>

          <button
            type="submit"
            className="w-full primary-button py-2 px-4 text-lg"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Remember your password?{' '}
          <Link to="/Login" className="text-[var(--primary)] hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
