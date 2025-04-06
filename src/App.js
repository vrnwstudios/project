import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Info from './pages/Info';
import Screencapture from './pages/Screencapture';
import Text from './pages/Text';
import Pdf from './pages/Pdf';
import Concluding from './pages/Concluding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/info" element={<Info />} />
        <Route path="/screencapture" element={<Screencapture />} />
        <Route path="/text" element={<Text />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/concluding" element={<Concluding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
