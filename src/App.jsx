import RootLayout from './Layout/RootLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Wishlist from './Pages/Wishlist';
import ForgotPassword from './Pages/ForgotPassword'; // Import ForgotPassword
import Profile from './Pages/Profile'; // Import Profile
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // Import ProtectedRoute

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/Shop" element={<Shop />}>
            <Route path=":category" element={<Shop />} />
            <Route index element={<Shop />} />
          </Route>
          <Route path="/Product/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
