import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Database,
  Layers,
  Sparkles,
  Bot,
} from "lucide-react";
import "./PopularLearningTracks.css";

const courseCards = [
  {
    id: "ai-digital-marketing",
    title: "AI Tools &\nDigital Marketing",
    description:
      "Combine modern AI tools with digital campaigns that reach and convert audiences.",
    image: "https://certiprof.com/cdn/shop/articles/DIGITAL_MARKETING_BY_CERTIPROF.webp?v=1742398487", // replace with a clean AI/marketing visual
    imageAlt: "AI tools and digital marketing analytics",
    bullets: [
      "AI Content & Productivity Tools",
      "SEO, SEM, and SMM",
      "Google Ads & Analytics",
      "Live Campaign Projects",
    ],
    accent: "#2563eb",
    buttonClass: "track-button-blue",
    Icon: Bot,
    route: "digital-marketing",
  },
  {
    id: "databases-in-depth",
    title: "Databases\nIn-Depth",
    description:
      "Learn how to design, query, optimize, and manage production-ready databases.",
    image: "https://biztalk360.com/wp-content/uploads/2023/06/MicrosoftTeams-image-102-672x372.jpg", // replace with a clean database/roadmap visual
    imageAlt: "Database and data engineering roadmap",
    bullets: [
      "SQL & Relational Design",
      "PostgreSQL Deep Dive",
      "Indexes, Queries & Performance",
      "Database Projects",
    ],
    accent: "#0891b2",
    buttonClass: "track-button-cyan",
    Icon: Database,
    route: "databases-in-depth",
  },
  {
    id: "foundational-course",
    title: "Foundational\nTechnology Course",
    description:
      "A guided foundation across programming, databases, cloud, and AI fundamentals.",
    image: "https://www.qodequay.com/wp-content/uploads/2025/08/why-python-for-ai-web-development.webp", // replace with a clean Python/AI visual
    imageAlt: "Python and artificial intelligence fundamentals",
    bullets: [
      "Python Programming",
      "PostgreSQL Database",
      "AWS / Azure Cloud Basics",
      "AI Fundamentals",
    ],
    accent: "#4f46e5",
    buttonClass: "track-button-indigo",
    Icon: Layers,
    route: "foundational-course",
  },
];

export default function PopularLearningTracks() {
  const navigate = useNavigate();

  const openService = (route) => {
    navigate(`/subgroup/${route}`);
  };

  return (
    <section className="learning-tracks-section">
      <div className="tracks-background-glow tracks-glow-purple" />
      <div className="tracks-background-glow tracks-glow-blue" />

      <div className="tracks-inner-container">
        {/* Header */}
        <div className="tracks-header">
          <span className="tracks-badge">
            <Sparkles size={14} aria-hidden="true" />
            COURSES OFFERED BY GK NEXERGY
          </span>

          <h2 className="tracks-title">
            Build Skills for Your{" "}
            <span className="text-blue">Digital Career</span>
          </h2>

          <p className="tracks-subtitle">
            Practical, mentor-led programs in security, AI, databases, cloud,
            and programming foundations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="course-cards-grid">
          {courseCards.map((card) => {
            const CardIcon = card.Icon;
            return (
              <article
                key={card.id}
                className="course-card-shell"
                style={{ "--track-accent": card.accent }}
              >
                <div className="course-card-glow" />
                <div className="course-card">
                  {/* Visual / Image side */}
                  <div className="course-card-visual">
                    <img
                      className="course-card-image"
                      src={card.image}
                      alt={card.imageAlt}
                      loading="lazy"
                    />
                    <div className="course-image-overlay" />
                    <div className="card-floating-badge">
                      <CardIcon size={26} strokeWidth={2.2} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="course-card-body">
                    <div className="course-card-content">
                      <h3 className="course-title">{card.title}</h3>
                      <p className="course-description">{card.description}</p>

                      <ul className="course-topics-list">
                        {card.bullets.map((bullet) => (
                          <li key={bullet}>
                            <Check
                              className="topic-check"
                              size={15}
                              strokeWidth={2.5}
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`btn-card-action ${card.buttonClass}`}
                      onClick={() => openService(card.route)}
                    >
                      <span>View Details</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="tracks-bottom-cta-wrap">
          <button
            className="btn-broad-explore"
            onClick={() => navigate("/solutions")}
          >
            <span>Explore All 8+ IT Courses & Enterprise Services</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}