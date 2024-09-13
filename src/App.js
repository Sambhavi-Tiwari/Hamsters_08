
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Encrypt from './Encrypt';
import Decrypt from './Decrypt';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encrypt" element={<Encrypt />} />
        <Route path="/decrypt" element={<Decrypt />} />
      </Routes>
    </Router>
  );
};

export default App;