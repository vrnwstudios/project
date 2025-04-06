import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = () => {
  const webcamRef = useRef(null);
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Capture webcam frame
  const captureFrame = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        sendFrame(imageSrc.split(",")[1]); // Remove metadata
      } else {
        console.error("❌ Error: Failed to capture image.");
        setError("Failed to capture image. Please try again.");
      }
    }
  }, []);

  // Send frame to backend
  const sendFrame = async (imageData) => {
    try {
      console.log("📨 Sending frame to backend...");
      const response = await axios.post("http://127.0.0.1:5000/detect", {
        image: imageData,
      });
      console.log("✅ Prediction received:", response.data.prediction);
      setPrediction(response.data.prediction);
      setError("");
    } catch (error) {
      console.error("❌ Error sending frame:", error);
      setError("Failed to get prediction. Check server logs.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/web.png')", // Replace with your actual path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "grey", marginBottom: "20px" }}>"Please stand in a well lit room for better results"</h1>

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
        style={{
          borderRadius: "8px",
          border: "4px solid white",
          marginBottom: "20px",
        }}
      />

      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <button
          onClick={captureFrame}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#fff",
            color: "#1D4ED8",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          📸 Capture
        </button>

        <button
          onClick={() => navigate("/text")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#10B981",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Proceed
        </button>

        <button
          onClick={() => navigate("/text")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#F59E0B",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          CONFIRM
        </button>
      </div>

      <h2 style={{ color: "white" }}>
        Prediction: {prediction || "Waiting..."}
      </h2>
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}
    </div>
  );
};

export default App;
