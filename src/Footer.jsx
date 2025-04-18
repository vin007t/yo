import React from "react";
import { Link } from "react-router-dom";
import { FaHospital, FaPhone, FaUserMd, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <FaHospital className="footer-icon" />
            About Us
          </h3>
          <ul className="footer-links">
            <li>
            <Link to="/about" className="footer-link">Our Story</Link>
            </li>
            <li>
              <Link to="/mission" className="footer-link">Our Mission</Link>
            </li>
            <li>
              <Link to="/team" className="footer-link">Our Team</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <FaPhone className="footer-icon" />
            Contact
          </h3>
          <ul className="footer-links">
            <li>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </li>
            <li>
              <Link to="/appointment" className="footer-link">Book Appointment</Link>
            </li>
            <li>
              <Link to="/emergency" className="footer-link">Emergency</Link>
            </li>
          </ul>
        </div>

        {/* Doctors Section */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <FaUserMd className="footer-icon" />
            Doctors
          </h3>
          <ul className="footer-links">
            <li>
              <Link to="/doctors" className="footer-link">Our Specialists</Link>
            </li>
            <li>
              <Link to="/specialties" className="footer-link">Specialties</Link>
            </li>
            <li>
              <Link to="/doctor-schedule" className="footer-link">Doctor Schedule</Link>
            </li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <FaMapMarkerAlt className="footer-icon" />
            Location
          </h3>
          <ul className="footer-links">
            <li>
              <Link to="/location" className="footer-link">Our Clinic</Link>
            </li>
            <li>
              <Link to="/directions" className="footer-link">Directions</Link>
            </li>
            <li>
              <Link to="/facilities" className="footer-link">Facilities</Link>
            </li>
          </ul>
        </div>

        {/* Timing Section */}
        <div className="footer-section">
          <h3 className="footer-heading">
            <FaClock className="footer-icon" />
            Timing
          </h3>
          <ul className="footer-links">
            <li>
              <Link to="/opening-hours" className="footer-link">Opening Hours</Link>
            </li>
            <li>
              <Link to="/holidays" className="footer-link">Holiday Schedule</Link>
            </li>
            <li>
              <Link to="/emergency-hours" className="footer-link">Emergency Hours</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Clinic Ease. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;