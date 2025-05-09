import React from 'react';
import '../css/Result.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { name, age, contact, prediction, confidence, blockchain_hash } = state || {};

  React.useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="result-page">
      <h1>🩺 Diagnosis Result</h1>
      <div className="result-card">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Contact:</strong> {contact}</p>
        <div className="alert">
          <p><strong>Prediction:</strong> {prediction}</p>
          <p><strong>Confidence Score:</strong> {confidence}%</p>
          <p><strong>Blockchain Hash:</strong> {blockchain_hash}</p>
        </div>
      </div>
      <div className="extra-info">
        <h2>How Blockchain Enhances Your Data Security</h2>
        <p>At MedChain-X, we harness the power of blockchain technology to ensure that your diagnostic data remains immutable and secure. This decentralized approach not only safeguards your medical records from tampering but also provides a transparent audit trail.</p>
        <p>Our innovative system stores a unique blockchain hash alongside your diagnostic result to certify data integrity. This means you can trust that your medical information is both accurate and securely preserved.</p>
        <button onClick={() => navigate('/about')}>Learn More About Our Technology</button>
      </div>
    </div>
  );
}
