import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not logged in
  if (!currentUser) {
    navigate('/Login');
    return null; // Or a loading spinner
  }

  const handleLogout = () => {
    logout();
    navigate('/Login');
  };

  return (
    <div className="cont mt-15 flex items-center justify-center min-h-[calc(100vh-100px)] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 FacultyGlyphic">
          My Profile
        </h1>
        <p className="text-center text-gray-600 mb-8">
          View your account details and manage your settings.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name:
            </label>
            <p className="mt-1 text-lg text-gray-900">{currentUser.fullName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <p className="mt-1 text-lg text-gray-900">{currentUser.email}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full secondary-button py-2 px-4 text-lg mt-8"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
