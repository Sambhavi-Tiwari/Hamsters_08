import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome to Quantum Suite</h1>
      <div style={{ marginTop: '20px' }}>
        <Link to="/encrypt">
          <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', margin: '10px' }}>Encrypt</button>
        </Link>
        <Link to="/decrypt">
          <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', margin: '10px' }}>Decrypt</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;