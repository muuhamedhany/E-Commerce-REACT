import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="mt-15 px-4 md:px-0"> {/* Removed cont, added responsive padding */}
      <h1 className="text-4xl font-bold text-center
       mb-4 FacultyGlyphic text-gray-900 ">
        Contact Us
      </h1>
      <p className="text-xl text-center mb-8 text-gray-600 ">
        We’d love to hear from you. Reach out with any questions or feedback.
      </p>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto"> {/* Added max-w-7xl mx-auto for centering */}
        {/* Left Section: Contact Information */}
        <div className="w-full lg:w-1/2 space-y-8 mb-8 lg:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 FacultyGlyphic text-gray-900 ">
              Our Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <FaMapMarkerAlt className="text-xl text-[var(--primary)]
                 mr-3" />
                <p>123 E-commerce St, Suite 400, Business City, BC 90210</p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaPhone className="text-xl text-[var(--primary)]
                 mr-3" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaEnvelope className="text-xl text-[var(--primary)]
                 mr-3" />
                <p>info@ecommerce.com</p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaClock className="text-xl text-[var(--primary)]
                 mr-3" />
                <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 FacultyGlyphic text-gray-900 ">
              Follow Us
            </h2>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-300"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-300"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-300"
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-300"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-4 FacultyGlyphic text-gray-900 ">
              Send us a Message
            </h4>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold mb-2 text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[0.5rem] bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  required
                  placeholder="e.g., John Doe"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold mb-2 text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[0.5rem] bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  required
                  placeholder="e.g., john.doe@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold mb-2 text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[0.5rem] bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  required
                  placeholder="e.g., Product Inquiry"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-2 text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[0.5rem] bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  required
                  placeholder="e.g., I have a question about..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="primary-button px-6 py-3 text-lg w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Embed Section */}
      <div className="mt-12 max-w-7xl mx-auto px-4 md:px-0"> {/* Removed cont, added responsive padding and centering */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 ">
            Find Us on the Map
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.250556093845!2d144.9630573153163!3d-37.81410797975149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b1f0b4b2c7%3A0x504567846294ce0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1628173456789!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
