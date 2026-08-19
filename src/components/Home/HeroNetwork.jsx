import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroNetwork.css";


export default function HeroNetwork() {
  const navigate = useNavigate();

  const getServiceSlug = (service) => {
    return service
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const openService = (service) => {
    const serviceSlug = getServiceSlug(service);
    navigate(`/subgroup/${serviceSlug}`);
  };

  const nodes = [
    {
      title: "Nexergy Academy",
      badge: "AI & TRAINING",
      icon: "🤖",
      description:
        "Building industry-ready technology professionals through practical, hands-on learning.",
      route: "python-for-ai",
      positionClass: "node-top-right",
    },
    {
      title: "Digital Growth",
      badge: "MARKETING",
      icon: "📈",
      description:
        "Helping businesses build visibility, engage customers and generate growth.",
      route: "digital-marketing",
      positionClass: "node-bottom-left",
    },
    {
      title: "Digital Solutions",
      badge: "APP & WEB",
      icon: "🌐",
      description: "Web, Mobile & Software Application Development.",
      route: "web-development",
      positionClass: "node-bottom-right",
    },
  ];

  const handleNodeClick = (node) => {
    if (node.route) {
      openService(node.route);
    }
  };

  const handleNodeKeyDown = (event, node) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNodeClick(node);
    }
  };

  return (
    <section className="network-hero-section">
      {/* Background Lighting & Grid */}
      <div className="hero-grid-lines"></div>
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>

      <div className="hero-inner-container">
        {/* Left Column */}
        <div className="hero-left-content">
          <h1 className="hero-heading">
            Empower Your Future With <br />
            <span className="text-highlight">What We Do</span>
          </h1>

          <p className="hero-subtext">
            GK Nexergy primarily supports students, graduates, working
            professionals, and women returning to their careers by helping them
            develop the technical and professional skills needed in today&apos;s
            digital world.
          </p>

          {/* Action Buttons */}
          <div className="hero-btn-row">
            <button
              className="btn-glow-blue"
              onClick={() => openService("web-development")}
            >
              <span>Explore Services</span>
              <span className="btn-arrow">&rarr;</span>
            </button>
            <button
              className="btn-dark-outline"
              onClick={() => navigate("/contact")}
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* 2x2 Feature Matrix */}
          <div className="hero-feature-matrix">
            <div className="matrix-card">
              <div className="matrix-icon-box">💻</div>
              <div className="matrix-text">
                <h4>Live Projects</h4>
                <p>Real industry applications</p>
              </div>
            </div>

            <div className="matrix-card">
              <div className="matrix-icon-box">👨‍🏫</div>
              <div className="matrix-text">
                <h4>Expert Mentors</h4>
                <p>1-on-1 practical guidance</p>
              </div>
            </div>

            <div className="matrix-card">
              <div className="matrix-icon-box">🎯</div>
              <div className="matrix-text">
                <h4>Placement Support</h4>
                <p>Dedicated career coaching</p>
              </div>
            </div>

            <div className="matrix-card">
              <div className="matrix-icon-box">🏅</div>
              <div className="matrix-text">
                <h4>Industry Certified</h4>
                <p>Globally recognized programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Orbit System */}
        <div className="hero-right-orbit">
          <div className="orbit-canvas">
            <div className="orbit-circle outer-orbit"></div>
            <div className="orbit-circle middle-orbit"></div>
            <div className="orbit-circle inner-orbit"></div>
      

            {/* Center Glowing Hub */}
            {/* Center Glowing Hub - Animated Tech Core */}
<div className="orbit-center-hub">
  <div className="hub-ripple"></div>
  <div className="hub-ripple hub-ripple-2"></div>

  <div
    className="center-logo-disc"
    onClick={() => navigate("/")}
    role="button"
    tabIndex={0}
    title="Go to Home"
  >
    <div className="tech-core">
      <div className="core-ring core-ring-1"></div>
      <div className="core-ring core-ring-2"></div>
      <div className="core-ring core-ring-3"></div>

      <div className="core-center">
        <div className="core-glow"></div>
        <div className="core-inner">
          <span className="core-icon">⚡</span>
        </div>
      </div>
    </div>
  </div>
</div>

            {/* Orbiting Interactive Nodes */}
            <div className="orbit-nodes-layer">
              {nodes.map((node, index) => (
                <div
                  key={index}
                  className={`orbit-node-track ${node.positionClass}`}
                >
                  <div
                    className="orbit-node-pill"
                    onClick={() => handleNodeClick(node)}
                    onKeyDown={(e) => handleNodeKeyDown(e, node)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="node-icon-circle">
                      <span>{node.icon}</span>
                    </div>
                    <div className="node-label-group">
                      <span className="node-badge-tag">{node.badge}</span>
                      <h4 className="node-main-title">{node.title}</h4>
                    </div>

                    {/* Tooltip */}
                    <div className="node-tooltip">
                      <p>{node.description}</p>
                      <span className="tooltip-cta">Explore &rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="hero-wave-separator">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C320,85 580,10 900,45 C1180,75 1360,30 1440,40 L1440,90 L0,90 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}