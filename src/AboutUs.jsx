import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Clinic Ease</h1>
        <p>Your trusted healthcare partner</p>
      </header>

      <main className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded By Vineet Tiwari Daddy of Aditya Paniluli, Clinic Ease has been providing exceptional healthcare 
            services to our community. We started with a single clinic and have 
            grown to become a network of healthcare professionals dedicated to 
            your wellbeing.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To provide accessible, affordable, and high-quality healthcare 
            services to all our patients. We believe in treating the whole person, 
            not just the symptoms.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of board-certified physicians, experienced nurses, 
            and compassionate support staff who work together to ensure you receive 
            the best possible care.
          </p>
        </section>

        <div className="back-home">
          <Link to="/" className="home-link">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;