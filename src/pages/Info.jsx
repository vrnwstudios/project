import React from 'react';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: "url('/highlights.png')", // replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <button
        onClick={() => navigate('/screencapture')}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '14px 36px',
          fontSize: '18px',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          color: '#4F46E5', // indigo-600
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateX(-50%) scale(1.05)';
          e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateX(-50%) scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Info;
