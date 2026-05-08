import "./App.css";
import "./index.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import ImageProfile from "./components/ImageProfile";
import image from "./assets/image.jpg";
import HeroDetails from "./components/HeroDetails";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Tool from "./pages/Tool";
import WorkTogether from "./components/WorkTogether";
import Certifications from "./components/Certifications";

function RouteScroller() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionByPath: Record<string, string> = {
      "/": "home",
      "/projects": "projects",
      "/experience": "experience",
      "/tools": "tools",
    };

    const targetId = sectionByPath[pathname] ?? "home";
    const target = document.getElementById(targetId);

    if (!target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const homePage = (
    <>
      <section id="home" className="scroll-mt-28">
        <ImageProfile
          name="Mark Agbayani"
          image={image}
          tag="Full-stack developer building clean, user-focused digital experiences."
        />
        <HeroDetails />
      </section>
      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>
      <section id="experience" className="scroll-mt-28">
        <Experience />
      </section>
      <section id="tools" className="scroll-mt-28">
        <Tool />
      </section>
      <section className="scroll-mt-28">
        <Certifications />
      </section>
      <section className="scroll-mt-28">
        <WorkTogether />
      </section>
    </>
  );

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

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
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading, { once: true });

    return () => window.removeEventListener("load", finishLoading);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className="loader-overlay"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="loader-panel">
            <div className="loader"></div>
            <p className="loader-name">Mark Agbayani</p>
          </div>
        </div>
      )}

      <div className={isLoading ? "page-hidden" : "page-ready"}>
        <NavBar />
        <RouteScroller />
        <Routes>
          <Route path="/" element={homePage} />
          <Route path="/projects" element={homePage} />
          <Route path="/experience" element={homePage} />
          <Route path="/tools" element={homePage} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
