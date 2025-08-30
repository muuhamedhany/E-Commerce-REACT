import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useToast } from '../context/ToastContext'; // Import useToast

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth(); // Use login from AuthContext
  const { showToast } = useToast(); // Use showToast from ToastContext
  const navigate = useNavigate(); // Use navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for missing fields
    if (!email || !password) {
      showToast('Please enter both email and password.', 'error');
      return;
    }

    const result = login(email, password); // Call login from AuthContext

    if (result.success) {
      showToast(result.message, 'success');
      navigate('/'); // Redirect to home page on success
    } else {
      showToast(result.message, 'error'); // Show error toast for invalid credentials
    }
  };

  return (
    <div className="cont mt-15 flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 FacultyGlyphic">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Log in to your account to continue shopping.
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
              placeholder="e.g., john.doe@example.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="e.g., MySecurePassword123"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/forgot-password" // Link to ForgotPassword page
              className="text-sm text-[var(--primary)] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="w-full primary-button py-2 px-4 text-lg">
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{' '}
          <Link to="/Signup" className="text-[var(--primary)] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;