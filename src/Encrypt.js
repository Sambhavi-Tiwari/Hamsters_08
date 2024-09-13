import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Encrypt = () => {
  const [inputText, setInputText] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [ciphertext, setCiphertext] = useState('');

  const handleEncrypt = () => {
    // Add encryption logic here
    setCiphertext('Encrypted text appears here');
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Encrypt</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to encrypt"
        style={{ width: '100%', height: '100px', border: '2px solid green' }}
      />
      <br />
      <input type="file" />
      <br />
      <input
        type="text"
        value={passphrase}
        onChange={(e) => setPassphrase(e.target.value)}
        placeholder="Enter passphrase"
        style={{ width: '100%', marginTop: '10px' }}
      />
      <br />
      <button onClick={handleEncrypt} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', marginTop: '10px' }}>Encrypt</button>
      <br />
      <textarea
        value={ciphertext}
        readOnly
        placeholder="Ciphertext appears here"
        style={{ width: '100%', height: '100px', border: '2px solid green', marginTop: '10px' }}
      />
      <br />
      <Link to="/decrypt">
        <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', marginTop: '10px' }}>Go to Decrypt</button>
      </Link>
    </div>
  );
};

export default Encrypt;
