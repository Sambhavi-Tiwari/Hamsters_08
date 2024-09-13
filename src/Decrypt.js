import React, { useState } from 'react';

const Decrypt = () => {
  const [passphrase, setPassphrase] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleDecrypt = () => {
    // Add decryption logic here
    setDecryptedText('Decrypted text appears here');
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Decrypt</h2>
      <input
        type="text"
        value={passphrase}
        onChange={(e) => setPassphrase(e.target.value)}
        placeholder="Enter passphrase"
        style={{ width: '100%', marginTop: '10px' }}
      />
      <br />
      <textarea
        value={ciphertext}
        onChange={(e) => setCiphertext(e.target.value)}
        placeholder="Paste ciphertext here"
        style={{ width: '100%', height: '100px', border: '2px solid red', marginTop: '10px' }}
      />
      <br />
      <button onClick={handleDecrypt} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', marginTop: '10px' }}>Decrypt</button>
      <br />
      <textarea
        value={decryptedText}
        readOnly
        placeholder="Decrypted text appears here"
        style={{ width: '100%', height: '100px', border: '2px solid white', backgroundColor: 'white', marginTop: '10px' }}
      />
    </div>
  );
};

export default Decrypt;