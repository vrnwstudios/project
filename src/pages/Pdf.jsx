import React from 'react';
import jsPDF from 'jspdf';

const Pdf = () => {
  const sampleText = "Today I went to college for a specific reason.";

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(sampleText, 10, 10);
    doc.save("prediction.pdf");
  };

  const readAloud = () => {
    const speech = new SpeechSynthesisUtterance(sampleText);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: "url('/PDF.png')", // Replace with your image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px',
        textAlign: 'center',
      }}
    >
      

      {/* Download PDF Button */}
      <button
        onClick={generatePDF}
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '25%',
          transform: 'translateX(-50%)',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          color: '#1E40AF',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        }}
      >
         Download PDF
      </button>

      {/* Read Aloud Button */}
      <button
        onClick={readAloud}
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '22%',
          transform: 'translateX(50%)',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          color: '#1E40AF',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        }}
      >
         Read Out Loud
      </button>
    </div>
  );
};

export default Pdf;
