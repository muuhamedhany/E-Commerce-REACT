import React from 'react';

const Toast = ({ message, type }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300`}
      style={{ opacity: 1 }}
    >
      {message}
    </div>
  );
};

export default Toast; 