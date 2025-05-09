// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

import heroImg from '../assets/images/test.jpeg';
import aiDiagIcon from '../assets/images/ai-diagnosis.png';
import secureDataIcon from '../assets/images/secure-data.jpg';
import fastReportIcon from '../assets/images/fast-report.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="hero-content">
          {/* <h1>Welcome to MedChain‑X</h1>
          <p>Revolutionizing healthcare with AI‑powered X‑ray diagnostics.</p> */}
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Link to="/predict" className="button">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Core Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={aiDiagIcon} alt="AI Diagnosis" />
            <h3>AI Diagnosis</h3>
            <p>
              Harness deep learning to detect anomalies in chest X‑rays with
              industry‑leading accuracy—up to 98% sensitivity.
            </p>
          </div>
          <div className="feature-card">
            <img src={secureDataIcon} alt="Secure Data" />
            <h3>Secure Data</h3>
            <p>
              End‑to‑end encryption and blockchain anchoring guarantee complete
              immutability and auditability of your medical records.
            </p>
          </div>
          <div className="feature-card">
            <img src={fastReportIcon} alt="Fast Reports" />
            <h3>Fast Reports</h3>
            <p>
              Get comprehensive, easy‑to‑read diagnostic reports in under 30
              seconds—complete with confidence scores and interactive charts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
