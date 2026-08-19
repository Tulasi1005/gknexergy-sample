import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutCareer.css";
// import aboutCareerImage from "./Gknodes.png";

export default function AboutCareer() {
  const navigate = useNavigate();

  return (
    <section className="about-career-section">
      <div className="about-inner-container">
        {/* Left Column: Text & Checklist */}
        <div className="about-left-text">
          <span className="section-eyebrow-tag">ABOUT US</span>

          <h2 className="about-main-title">
            We Transform Learning <br />
            <span className="about-title-blue">Into Career Success</span>
          </h2>

          <p className="about-description">
            We provide practical knowledge, real-world exposure and career
            support to help students succeed in the digital world.
          </p>

          <ul className="about-checklist">
            <li>
              <span className="check-icon">✓</span>
              <span>Industry-relevant curriculum</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Hands-on live projects</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>100% placement assistance</span>
            </li>
          </ul>

          <button
            className="btn-know-more"
            onClick={() => navigate("/about")}
          >
            <span>Know More About Us</span>
            <span className="btn-arrow">&rarr;</span>
          </button>
        </div>

        {/* Right Column: Illustration Blob */}
        <div className="about-right-visual">
          <div className="illustration-blob-frame">
            <div className="blob-dots-pattern"></div>

            <img
              src='https://www.accesscreative.ac.uk/wp-content/uploads/2025/04/Coding-on-a-laptop.jpg'
              alt="GK Nexergy technology network"
              className="about-career-image"
            />

            {/* Video Play Button */}
            
          </div>
        </div>
      </div>
    </section>
  );
}