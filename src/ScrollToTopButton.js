import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTopButton.css";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top-button ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Go to top"
      title="Go to top"
    >
      <ArrowUp size={20} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
