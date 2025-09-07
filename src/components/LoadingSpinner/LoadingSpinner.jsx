// src/components/LoadingSpinner/LoadingSpinner.jsx
import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium' }) => {
  return (
    <div className={`spinner-container spinner-${size}`}>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;