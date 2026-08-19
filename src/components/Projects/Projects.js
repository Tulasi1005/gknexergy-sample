import React, { useEffect, useRef } from "react";
import "./project.css";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    category: "DEVELOPMENT",
    title: "Web & Mobile Development",
    description:
      "Build modern, scalable and responsive websites and mobile applications using industry-standard technologies.",
    features: [
      "HTML, CSS & JavaScript",
      "React, Node.js & MongoDB",
      "Flutter for Mobile Apps",
      "Live Projects & Assignments",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    icon: "⌘",
    number: "01",
  },

  {
    id: 2,
    category: "AI & SOFTWARE",
    title: "Python & AI Development",
    description:
      "Learn Python development with Artificial Intelligence, Machine Learning and Generative AI through practical projects.",
    features: [
      "Python & Advanced Programming",
      "Machine Learning & Deep Learning",
      "Generative AI & LLM Applications",
      "Real-World AI Projects",
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1000&q=85",
    icon: "✦",
    number: "02",
  },

  {
    id: 3,
    category: "DIGITAL MARKETING",
    title: "Digital Marketing",
    description:
      "Master digital growth strategies and learn how brands attract, engage and convert customers online.",
    features: [
      "SEO & Search Marketing",
      "Social Media Marketing",
      "Google Ads & Performance Marketing",
      "Analytics & Campaign Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=85",
    icon: "↗",
    number: "03",
  },

  {
    id: 4,
    category: "DESIGN",
    title: "UI/UX Design",
    description:
      "Create elegant digital experiences with user research, wireframes, prototypes and modern interface design.",
    features: [
      "UI Design & Design Systems",
      "UX Research & User Flows",
      "Figma & Prototyping",
      "Real Client Design Projects",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=85",
    icon: "◈",
    number: "04",
  },

  {
    id: 5,
    category: "CLOUD & DEVOPS",
    title: "Cloud & DevOps",
    description:
      "Develop practical cloud and DevOps skills required to build, deploy and maintain modern applications.",
    features: [
      "AWS & Cloud Fundamentals",
      "Git & GitHub Workflows",
      "Docker & CI/CD",
      "Deployment & Production Projects",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85",
    icon: "☁",
    number: "05",
  },

  {
    id: 6,
    category: "CAREER PROGRAM",
    title: "Industry Training & Hiring",
    description:
      "Transform your skills into a career with structured training, practical assignments and placement-focused preparation.",
    features: [
      "Industry-Oriented Curriculum",
      "Mentorship & Live Projects",
      "Resume & Interview Preparation",
      "Hiring & Placement Support",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    icon: "★",
    number: "06",
  },
];


/* =========================================================
   ICON COMPONENT
========================================================= */

const ServiceIcon = ({ type }) => {
  const icons = {
    "⌘": (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M7 12H4a2 2 0 0 1 0-4h3M17 12h3a2 2 0 0 0 0-4h-3M12 7V4a2 2 0 0 0-4 0v3M12 17v3a2 2 0 0 0-4 0v-3" />
      </svg>
    ),

    "✦": (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
        <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16z" />
      </svg>
    ),

    "↗": (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19L19 5" />
        <path d="M9 5h10v10" />
        <path d="M5 5v4M5 5h4" />
      </svg>
    ),

    "◈": (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l8 5-8 5-8-5 8-5z" />
        <path d="M4 12l8 5 8-5" />
        <path d="M4 17l8 5 8-5" />
      </svg>
    ),

    "☁": (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 18h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.04 9.1 4.5 4.5 0 0 0 7 18z" />
      </svg>
    ),

    "★": (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3z" />
      </svg>
    ),
  };

  return <>{icons[type] || icons["✦"]}</>;
};


/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMove);

    return () => {
      card.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card project-card-${index + 1}`}
    >
      {/* Background glow */}
      <div className="card-mouse-glow"></div>

      {/* Image section */}
      <div className="project-visual">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />

        <div className="image-overlay"></div>

        {/* Decorative dots */}
        <div className="visual-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Floating service icon */}
        <div className="floating-service-icon">
          <ServiceIcon type={project.icon} />
        </div>

        {/* Project number */}
        <div className="project-number">
          {project.number}
        </div>

        {/* Image label */}
        <div className="visual-label">
          <span className="label-dot"></span>
          INDUSTRY READY
        </div>
      </div>


      {/* Content section */}
      <div className="project-content">

        {/* Decorative top line */}
        <div className="content-line"></div>

        <span className="project-category">
          {project.category}
        </span>

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* Features */}
        <ul className="project-features">
          {project.features.map((feature, featureIndex) => (
            <li key={featureIndex}>
              <span className="feature-check">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12l4 4L19 6" />
                </svg>
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Bottom action */}
        <div className="project-action-row">

          <button className="project-button">
            <span>Enroll Now</span>

            <span className="button-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h13" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>

        

        </div>

      </div>

      {/* Decorative border */}
      <div className="card-border"></div>

      {/* Bottom purple shadow */}
      <div className="card-purple-shadow"></div>
    </article>
  );
};


/* =========================================================
   MAIN PROJECT SECTION
========================================================= */

const Projects = () => {

  useEffect(() => {
    const revealItems = document.querySelectorAll(".project-reveal");

    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);


  return (
    <section className="projects-section" id="programs">

      {/* Background decoration */}
      <div className="section-grid"></div>

      <div className="section-orb section-orb-one"></div>
      <div className="section-orb section-orb-two"></div>


      <div className="projects-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="projects-heading project-reveal">

          <div className="heading-left">

            <span className="heading-eyebrow">
              <span className="eyebrow-line"></span>
              WHAT WE OFFER
            </span>

            <h2>
              Learn Skills.
              <br />

              <span className="gradient-text">
                Build Your Future.
              </span>
            </h2>

          </div>


          <div className="heading-right">

            <p>
              Industry-focused programs designed to help students
              develop practical skills, build real-world projects and
              become career-ready professionals.
            </p>

            <div className="heading-stat">
              <strong>06+</strong>
              <span>Career-focused programs</span>
            </div>

          </div>

        </div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-reveal"
              style={{
                "--animation-delay": `${index * 100}ms`,
              }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}

        </div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="projects-bottom project-reveal">

          <div className="bottom-content">

            <span className="bottom-small">
              READY TO START?
            </span>

            <h3>
              Turn your skills into
              <span> real opportunities.</span>
            </h3>

          </div>

          <button className="bottom-button">
            <span>Enroll Now</span>

            <svg viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Projects;