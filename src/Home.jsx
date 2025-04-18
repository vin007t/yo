import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Home.css";
import one from "../src/images/one.jpg";
import two from "../src/images/two.jpg";
import logo from "../src/images/logo.png"; // Import your logo image
import { FaUser } from "react-icons/fa"; // Import person icon from react-icons

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo} alt="Clinic Ease Logo" className="logo-img" />
        </div>
        <Link to="/login">
          <button className="login-btn">
            <FaUser className="user-icon" />
            <span>Login</span>
          </button>
        </Link>
      </nav>

      {/* Banner Section */}
      <div className="swiper-container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={one} alt="Medical facility" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={two} alt="Doctor consultation" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Centered Book Appointment Section */}
      <div className="appointment-section">
        <div className="appointment-card">
          <Link to="/book-appointment">
            <button className="appointment-btn">
              Book an Appointment
            </button>
          </Link>
          <p className="appointment-text">
            Schedule your visit with our expert doctors in just a few clicks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;