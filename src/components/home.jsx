import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Import external CSS

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to the Encryption-Decryption App</h1>
      <button className="encryption-btn" onClick={() => navigate('/encryption')}>Encryption</button>
      <button className="decryption-btn" onClick={() => navigate('/decryption')}>Decryption</button>
      
      {/* New Section for AES and Kyber Details */}
      <div className="info-section">
        <h2>About AES (Advanced Encryption Standard)</h2>
        <p>
          AES is a symmetric encryption algorithm widely used across the globe to secure data. It supports key sizes of 128, 192, and 256 bits, making it a robust standard for both public and private communication. It's commonly used in secure communications such as VPNs, file encryption, and more.
        </p>

        <h2>About Kyber</h2>
        <p>
          Kyber is a post-quantum cryptographic algorithm, designed to be secure against attacks from quantum computers. It relies on lattice-based cryptography, which is believed to resist quantum attacks, unlike traditional cryptography systems like RSA or ECC. Kyber is part of the NIST post-quantum cryptography standardization process.
        </p>
      </div>
    </div>
  );
}

export default Home;
