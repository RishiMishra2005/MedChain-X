import React from 'react';
import '../css/About.css';
import aboutHero from '../assets/images/test4.png';


export default function About() {
  return (
    <>
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <h1>About MedChain-X</h1>
      </section>
      <div className="about-content">
        <p>MedChain-X is a secure and AI-powered platform designed to assist in the early diagnosis of diseases through X-ray analysis. Users can upload chest X-rays, and the platform utilizes deep learning models to analyze the image and provide a confidence score for possible medical conditions.</p>
        <p>A downloadable report can also be generated, including user information and predictions. All data is handled securely.</p>
        <p>Future improvements include blockchain integration for secure storage and verification of medical data.</p>
      </div>
      <section className="mission-vision">
        <div className="mv-container">
          <div className="mv-card">
            <img src="/images/mission.jpg" alt="Mission" />
            <h3>Our Mission</h3>
            <p>To revolutionize healthcare by making advanced AI diagnostics accessible and secure for everyone.</p>
          </div>
          <div className="mv-card">
            <img src="/images/vision.jpg" alt="Vision" />
            <h3>Our Vision</h3>
            <p>To be the global leader in AI-powered healthcare solutions, setting new standards for diagnostics.</p>
          </div>
          <div className="mv-card">
            <img src="/images/innovation.png" alt="Innovation" />
            <h3>Innovation</h3>
            <p>We continuously innovate to enhance the accuracy, speed, and security of our diagnostic tools.</p>
          </div>
        </div>
      </section>
      <section className="steps">
        <h2>How MedChain-X Works</h2>
        <div className="steps-container">
          <div className="step-item left">
            <h3>Step 1: Upload X-ray</h3>
            <p>Start by uploading a high-quality chest X-ray image from your device.</p>
          </div>
          <div className="step-item right">
            <h3>Step 2: AI Analysis</h3>
            <p>Our AI-driven system analyzes the image to detect and diagnose potential conditions.</p>
          </div>
          <div className="step-item left">
            <h3>Step 3: Generate Report</h3>
            <p>Receive a detailed diagnostic report, complete with confidence scores and insights.</p>
          </div>
          <div className="step-item right">
            <h3>Step 4: Secure Storage</h3>
            <p>Your data is securely stored using advanced encryption and blockchain technology.</p>
          </div>
        </div>
      </section>
    </>
  );
}