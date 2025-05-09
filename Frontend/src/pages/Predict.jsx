import React, { useState } from 'react';
import '../css/Predict.css';
import predictHero from '../assets/images/test4.png';

export default function Predict() {
  const [formData, setFormData] = useState({ name: '', age: '', contact: '', file: null });

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'xray_image') setFormData({ ...formData, file: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: integrate with backend API
    console.log(formData);
  };

  return (
    <>
      <section
        className="predict-hero"
        style={{
          backgroundImage: `url(${predictHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <h1>AI-Powered X-Ray Diagnosis</h1>
        <p>Submit your X-ray image for a rapid, secure diagnosis</p>
      </section>

      <div className="form-container">
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Full Name:<input type="text" name="name" required onChange={handleChange} /></label>
          <label>Age:<input type="number" name="age" required onChange={handleChange} /></label>
          <label>Contact Number:<input type="text" name="contact" required onChange={handleChange} /></label>
          <label>Upload X-ray:<input type="file" name="xray_image" accept="image/*" required onChange={handleChange} /></label>
          <div className="btn-group">
            <button type="submit">Predict Disease</button>
          </div>
        </form>
      </div>
      <div className="predict-info">
        <h3>How It Works</h3>
        <p>Our advanced ensemble of AI models analyzes your X-ray image to detect abnormalities and provide an accurate diagnosis with a confidence score. Rest assured that all your data is securely stored on the blockchain, ensuring data integrity and privacy.</p>
      </div>
    </>
  );
}
