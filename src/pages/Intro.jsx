import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Intro = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleStartClick = () => {
    setFadeOut(true); // trigger fade-out
    setTimeout(() => {
      navigate('/info'); // navigate after fade-out completes
    }, 500); // match the duration of the animation
  };

  const containerStyle = {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: fadeOut ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
    transition: 'background-color 0.5s ease',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '16px 40px',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: '#4338ca',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{ ...containerStyle, opacity: fadeOut ? 0 : 1, transition: 'opacity 0.5s ease' }}>
      <video autoPlay loop muted style={videoStyle}>
        <source src="/Sign2Text (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={overlayStyle}></div>

      <button
        style={buttonStyle}
        onClick={handleStartClick}
        onMouseOver={(e) => {
          e.target.style.transform = 'translate(-50%, -50%) scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translate(-50%, -50%) scale(1)';
        }}
      >
        START
      </button>
    </div>
  );
};

export default Intro;
