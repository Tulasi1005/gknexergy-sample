import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Learn.css";

const courses = [
  {
    id: "foundational",
    number: "01",
    theme: "theme-gold",
    flag: "MOST POPULAR • ALL-IN-ONE",
    title: "Foundational Tech Accelerator",
    subtitle: "Python + PostgreSQL + AWS/Azure Cloud + AI Basics",
    duration: "16 Weeks Intensive",
    mode: "Live Mentorship + Real Projects",
    targetAudience: "Freshers, College Graduates & Career Returnees",
    highlights: [
      "Master Core & Advanced Python Programming",
      "Enterprise Database Design with PostgreSQL",
      "Deploy & Scale on AWS / Microsoft Azure",
      "Integrate Modern AI APIs & Prompt Engineering",
      "Complete Capstone Project for Your Resume"
    ],
    whatsappMsg: "Hi GK Nexergy, I want to enroll/know more about the Foundational Tech Accelerator Course (Python, PostgreSQL, Cloud, AI)."
  },
  {
    id: "cyber-security",
    number: "02",
    theme: "theme-crimson",
    flag: "HIGH DEMAND DEFENSE",
    title: "Cyber Security & Ethical Hacking",
    subtitle: "Vulnerability Assessment • Penetration Testing • Defense",
    duration: "12 Weeks Practical",
    mode: "Hands-on Virtual Labs",
    targetAudience: "Aspiring Security Analysts & IT Pros",
    highlights: [
      "Network Packet Sniffing & Wireshark Deep-Dive",
      "Kali Linux, Metasploit & Penetration Testing Tools",
      "OWASP Top 10 Web Application Vulnerabilities",
      "Real-World Defense & Incident Response Protocols",
      "Industry Certification Preparation"
    ],
    whatsappMsg: "Hi GK Nexergy, I want details on the Cyber Security & Ethical Hacking course."
  },
  {
    id: "ai-marketing",
    number: "03",
    theme: "theme-purple",
    flag: "NEXT-GEN SKILLS",
    title: "AI Tools & Digital Marketing",
    subtitle: "Generative AI • Workflow Automation • Smart SEO",
    duration: "8 Weeks Fast-Track",
    mode: "Live Campaign Case Studies",
    targetAudience: "Marketers, Creators & Business Owners",
    highlights: [
      "Generative AI Mastery: ChatGPT, Midjourney & Copilots",
      "Automated Content Pipelines & High-ROI Copywriting",
      "AI-Powered SEO Auditing & Keyword Intelligence",
      "Data-Driven Social Media Ads & Conversion Funnels",
      "Build Automated Marketing Agents"
    ],
    whatsappMsg: "Hi GK Nexergy, please share syllabus & timings for AI Tools and Digital Marketing."
  },
  {
    id: "databases",
    number: "04",
    theme: "theme-emerald",
    flag: "CORE DATA ARCHITECTURE",
    title: "Databases In-Depth",
    subtitle: "Relational Engines • Query Optimization • Indexing",
    duration: "10 Weeks Deep-Dive",
    mode: "Architectural Lab Sessions",
    targetAudience: "Backend Developers & Data Engineers",
    highlights: [
      "PostgreSQL & MySQL Internal Execution Engines",
      "Complex SQL, CTEs & Advanced Window Functions",
      "Query Profiling, Explain Plans & Indexing Tuning",
      "ACID Transactions, Locking & Concurrency Control",
      "Introduction to NoSQL & Distributed Data Systems"
    ],
    whatsappMsg: "Hi GK Nexergy, I am interested in the Databases In-Depth masterclass."
  }
];

function Learn() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="gk-learn-section">
      <Container>
        {/* Eye-Catching Header */}
        <div className="gk-learn-header text-center">
          <div className="gk-badge-pill">
            <span className="live-dot"></span>
            PROPOSED INDUSTRY PROGRAMS
          </div>
          <h1 className="gk-headline">
            Build Real IT Skills. <br />
            <span className="gk-gradient-text">Fast-Track Your Tech Career.</span>
          </h1>
          <p className="gk-lead-text">
            Learn directly from mentors with <strong>25+ years of software delivery experience</strong>. 
            Industry-aligned curriculum with live project immersion.
          </p>

          {/* Quick Metrics Bar */}
          <div className="gk-stats-row">
            <div className="gk-stat-item">
              <span className="stat-num">25+</span>
              <span className="stat-lbl">Years IT Heritage</span>
            </div>
            <div className="gk-stat-divider"></div>
            <div className="gk-stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Hands-On Practice</span>
            </div>
            <div className="gk-stat-divider"></div>
            <div className="gk-stat-item">
              <span className="stat-num">1-on-1</span>
              <span className="stat-lbl">Mentor Support</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Course Cards Grid */}
        <Row className="g-4 mt-2">
          {courses.map((course) => (
            <Col key={course.id} lg={6} className="d-flex">
              <div 
                className={`gk-course-card ${course.theme} ${hoveredCard === course.id ? "card-hovered" : ""}`}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top Number & Tag */}
                <div className="gk-card-meta">
                  <span className="gk-tag-label">{course.flag}</span>
                  <span className="gk-card-number">{course.number}</span>
                </div>

                {/* Course Title & Core Focus */}
                <div className="gk-card-main">
                  <h2 className="gk-course-title">{course.title}</h2>
                  <p className="gk-course-stack">{course.subtitle}</p>

                  <div className="gk-pill-details">
                    <span className="gk-info-badge">⏱️ {course.duration}</span>
                    <span className="gk-info-badge">💻 {course.mode}</span>
                  </div>

                  <div className="gk-target-audience">
                    <strong>Best for:</strong> {course.targetAudience}
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="gk-syllabus-box">
                    <h5 className="syllabus-heading">What You Will Master:</h5>
                    <ul className="syllabus-list">
                      {course.highlights.map((item, idx) => (
                        <li key={idx}>
                          <span className="check-bullet">✔</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Call-to-Action Bar */}
                <div className="gk-card-actions">
                  <a
                    href={`https://wa.me/919704585960?text=${encodeURIComponent(course.whatsappMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="gk-whatsapp-btn"
                  >
                    <span>Enroll / Inquire on WhatsApp</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a href="tel:+919704585960" className="gk-call-direct">
                    📞 Call 9704585960
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        
      </Container>
    </div>
  );
}

export default Learn;
