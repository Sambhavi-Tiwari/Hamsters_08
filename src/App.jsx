import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Encryption from './components/encryption';
import Decryption from './components/decryption';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encryption" element={<Encryption />} />
          <Route path="/decryption" element={<Decryption />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
