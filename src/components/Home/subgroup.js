import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./subgroup.css";

/* =========================================================
   SERVICE DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Web Development",
    label: "Digital Foundations",

    subtitle:
      "High-performance digital experiences designed to make your business stand out, connect with customers and grow.",

    description:
      "We design and develop scalable, secure and user-friendly websites and web applications tailored to your business needs. From corporate websites and e-commerce platforms to custom applications, we combine clean design with reliable technology.",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90",

    tags: [
      "Corporate Websites",
      "E-Commerce",
      "Custom Applications",
      "UI/UX"
    ],

    features: [
      "Business & Corporate Websites",
      "E-Commerce Platforms",
      "Custom Web Applications",
      "Responsive Web Design",
      "Frontend Development",
      "Backend Development & APIs",
      "CMS & Content Websites",
      "Third-Party Integrations",
      "Migration & Modernization",
      "Hosting & Deployment",
      "Maintenance & Support"
    ],

    tech: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Python",
      "Node.js",
      "PostgreSQL",
      "MongoDB"
    ],

    stats: {
      projects: "15+",
      clients: "12+",
      satisfaction: "98%"
    },

    statLabel: "Digital Projects"
  },

  {
    number: "02",
    title: "Mobile Development",
    label: "Products in Motion",

    subtitle:
      "Mobile experiences built around usability, performance and the way modern customers interact with brands.",

    description:
      "We build secure, scalable and user-friendly mobile applications for startups, businesses and enterprises. From native Android and iOS applications to cross-platform solutions, we create mobile products that deliver smooth and reliable experiences.",

    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=90",

    tags: [
      "Android",
      "iOS",
      "Cross-Platform",
      "UI/UX"
    ],

    features: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform Development",
      "Custom Mobile Applications",
      "UI/UX Design",
      "API & Backend Integration",
      "E-Commerce & Payment Apps",
      "Business & Enterprise Apps",
      "App Testing & Optimization",
      "Deployment & Maintenance"
    ],

    tech: [
      "React Native",
      "Flutter",
      "Android",
      "iOS",
      "Kotlin",
      "Swift",
      "Firebase",
      "REST APIs"
    ],

    stats: {
      projects: "8+",
      clients: "6+",
      satisfaction: "96%"
    },

    statLabel: "Mobile Products"
  },

  {
    number: "03",
    title: "Digital Marketing",
    label: "Visibility With Purpose",

    subtitle:
      "Strategic digital campaigns that help brands become visible, relevant and memorable.",

    description:
      "We help businesses build a strong digital presence through SEO, social media, content marketing, paid campaigns and data-driven strategies. Our approach focuses on meaningful visibility, stronger engagement, qualified leads and sustainable growth.",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90",

    tags: [
      "SEO",
      "Social Media",
      "Content",
      "Analytics"
    ],

    features: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Paid Advertising Campaigns",
      "Email Marketing",
      "Analytics & Reporting",
      "Brand Strategy",
      "Lead Generation",
      "Conversion Optimization",
      "Digital Presence Management"
    ],

    tech: [
      "Google Analytics",
      "SEO",
      "Social Media",
      "Email Marketing",
      "Content Strategy",
      "Performance Marketing"
    ],

    stats: {
      projects: "10+",
      clients: "8+",
      satisfaction: "97%"
    },

    statLabel: "Marketing Campaigns"
  },

  {
    number: "04",
    title: "Nexergy Academy",
    label: "Skills That Stick",

    subtitle:
      "Practical technology training designed to transform learning into real-world capability.",

    description:
      "Nexergy Academy empowers students and professionals with industry-relevant technology skills through practical, hands-on learning. Our programs cover full-stack development, AI, Generative AI, Python, Java, Data Analytics, Cloud, DevOps and emerging technologies.",

    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=90",

    tags: [
      "Training",
      "Workshops",
      "Upskilling",
      "Projects"
    ],

    features: [
      "IT Foundation Program",
      "Full Stack Development",
      "Software Testing",
      "Data & AI",
      "Cloud & DevOps",
      "Python Programming",
      "Java Development",
      "Web & Mobile Development",
      "Real-World Projects",
      "Interview Preparation"
    ],

    tech: [
      "Python",
      "Java",
      "React",
      "Node.js",
      "SQL",
      "AWS",
      "Docker",
      "Git"
    ],

    stats: {
      programs: "6+",
      students: "50+",
      placement: "85%"
    },

    statLabel: "Students Trained"
  },

  {
    number: "05",
    title: "AI & Innovation",
    label: "Intelligence In Practice",

    subtitle:
      "Intelligent technology solutions that turn complex business challenges into opportunities.",

    description:
      "We help businesses leverage artificial intelligence and emerging technologies to gain a competitive advantage. From AI-integrated applications and automation to Generative AI solutions, we transform complex problems into intelligent systems.",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90",

    tags: [
      "AI",
      "Machine Learning",
      "Automation",
      "Innovation"
    ],

    features: [
      "AI-Integrated Applications",
      "Machine Learning Solutions",
      "Generative AI Development",
      "AI-Powered Analytics",
      "Intelligent Automation",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Modeling",
      "AI Strategy & Consulting",
      "Custom AI Solutions"
    ],

    tech: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "LangChain",
      "Machine Learning",
      "NLP",
      "Computer Vision"
    ],

    stats: {
      projects: "5+",
      clients: "4+",
      innovation: "100%"
    },

    statLabel: "Innovation Projects"
  }
];


/* =========================================================
   HELPERS
========================================================= */

const getServiceSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");


/* =========================================================
   COMPONENT
========================================================= */

export default function StartHere() {

  const { service } = useParams();

  const [activeIndex, setActiveIndex] = useState(0);

  const selected =
    services[activeIndex] || services[0];


  /* =====================================================
     ROUTE → SERVICE
  ===================================================== */

  useEffect(() => {

    const nextIndex = services.findIndex(
      (item) =>
        getServiceSlug(item.title) === service
    );

    setActiveIndex(
      nextIndex >= 0 ? nextIndex : 0
    );

  }, [service]);


  /* =====================================================
     SERVICE SWITCH
  ===================================================== */

  const handleServiceChange = (index) => {
    setActiveIndex(index);

    window.setTimeout(() => {
      document
        .querySelector(".premium-service")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
    }, 50);
  };


  return (
    <main className="premium-services-page">

      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      {/* =================================================
          SERVICE SELECTOR
      ================================================= */}



      {/* =================================================
          HEADER
      ================================================= */}

      <section className="premium-header">



        <div className="header-copy">

          <span className="header-kicker">
            TECHNOLOGY • GROWTH • FUTURE
          </span>

          <h1>
            Solutions built
            <br />

            <span>
              for what’s next.
            </span>
          </h1>

          <p>
            From digital products and marketing to
            technology training and AI innovation,
            we create solutions that move businesses
            and people forward.
          </p>

        </div>



      </section>

      <section className="service-navigation">

        <div className="navigation-heading">

          <span>
            OUR CAPABILITIES
          </span>

          <p className="navigation-subtext">
            Select a service to explore
          </p>

        </div>


        <div className="service-navigation-list">

          {services.map((item, index) => (

            <button
              key={item.title}
              type="button"
              className={`service-navigation-item ${index === activeIndex
                  ? "active"
                  : ""
                }`}
              onClick={() =>
                handleServiceChange(index)
              }
            >

              <span className="nav-number">
                {item.number}
              </span>

              <span className="nav-content">

                <small>
                  {item.label}
                </small>

                <strong>
                  {item.title}
                </strong>

              </span>

              <span className="nav-arrow">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>

              </span>

            </button>

          ))}

        </div>

      </section>
      {/* =================================================
          PREMIUM SERVICE
      ================================================= */}

      <section
        className="premium-service"
        key={selected.title}
      >

        {/* ===============================================
            LEFT VISUAL
        =============================================== */}

        <div className="premium-visual">

          <div className="visual-orbit orbit-large" />

          <div className="visual-orbit orbit-small" />


          {/* Purple organic background */}

          <div className="visual-purple purple-back" />

          <div className="visual-purple purple-bottom" />


          {/* Image */}

          <div className="service-image-frame">

            <img
              src={selected.image}
              alt={selected.title}
            />

            <div className="image-overlay" />

          </div>


          {/* Number */}

          <div className="visual-number">

            <span>
              SERVICE
            </span>

            <strong>
              {selected.number}
            </strong>

          </div>


          {/* Play button */}

          <button
            type="button"
            className="visual-play"
            aria-label={`Explore ${selected.title}`}
          >

            <span className="play-inner">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l10-6.5z" />
              </svg>
            </span>

          </button>


          {/* Floating stat */}

          <div className="visual-stat">

            <div className="stat-check">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m6 12 4 4 8-9" />
              </svg>

            </div>

            <div>

              <strong>
                {selected.stats.projects ||
                  selected.stats.programs}
              </strong>

              <span>
                {selected.statLabel}
              </span>

            </div>

          </div>


          {/* Small floating label */}

          <div className="visual-badge">

            <span className="badge-dot" />

            <span>
              DIGITAL
              <br />
              SOLUTIONS
            </span>

          </div>

        </div>


        {/* ===============================================
            RIGHT CONTENT
        =============================================== */}

        <div className="premium-content">

          <div className="content-topline">

            <span>
              ABOUT OUR SERVICE
            </span>

            <span className="content-line" />

            <span>
              {selected.number}
            </span>

          </div>


          <h2>
            {selected.title}
          </h2>


          <p className="premium-subtitle">
            {selected.subtitle}
          </p>


          <p className="premium-description">
            {selected.description}
          </p>


          {/* =============================================
              TAGS
          ============================================= */}

          <div className="premium-tags">

            {selected.tags.map((tag) => (

              <span
                key={tag}
                className="premium-tag"
              >
                {tag}
              </span>

            ))}

          </div>


          {/* =============================================
              WHAT WE DO
          ============================================= */}

          <div className="capability-section">

            <div className="section-label">
              <span />
              WHAT WE DO
            </div>


            <div className="capability-grid">

              {selected.features
                .slice(0, 6)
                .map((feature, index) => (

                  <div
                    className="capability-item"
                    key={feature}
                  >

                    <span className="capability-number">
                      0{index + 1}
                    </span>

                    <span className="capability-check">

                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>

                    </span>

                    <span className="capability-text">
                      {feature}
                    </span>

                  </div>

                ))}

            </div>

          </div>


          {/* =============================================
              BOTTOM
          ============================================= */}

          <div className="premium-bottom">

            <a
              href="/Contact"
              className="premium-cta"
            >

              <span>
                Explore Solution
              </span>

              <span className="cta-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>

              </span>

            </a>


          </div>

        </div>

      </section>



    </main>
  );
}