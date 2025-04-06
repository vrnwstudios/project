import React from 'react';
import { useNavigate } from 'react-router-dom';

const TextPage = () => {
  const navigate = useNavigate();
  const textToDisplay = "This is your predicted ISL text shown here."; // Replace with dynamic text if needed

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: "url('/TEXT.png')", // Replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ marginTop: '70px' }}>
        <h1
          style={{
            color: '#ffffff',
            fontSize: '32px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          }}
        >
          {textToDisplay}
        </h1>
      </div>

      <button
        onClick={() => navigate('/pdf')} // or wherever you want
        style={{
          padding: '12px 60px',
          fontSize: '18px',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          color: '#2563EB',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default TextPage;
