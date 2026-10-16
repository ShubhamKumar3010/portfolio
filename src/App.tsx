import * as React from "react";
import "./App.css";
import HeaderDisplay from "./components/HeaderDisplay";
import FloatingButton from "./components/FloatingButton";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import About from "./components/About";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import Gallery from "./components/Gallery";
import Achievements from "./components/Achievement";
import Footer from "./components/Footer";
import useStore from "./store/store";

function App() {
  const { home, about, tech, work, project, gallery, achievements } =
    useStore();

  return (
    <>
      <div className="App">
        <nav className="App-navbar">
          <Navbar />
        </nav>
        <header className="App-header">
          <section className="hero-section" ref={home}>
            <HeaderDisplay
              name="Shubham"
              designation="Software Developer"
              emailId="shubham8969305655@gmail.com"
              linkedinURL="https://www.linkedin.com/in/shubham-kumar-6aa852171/"
              githubURL="https://github.com/ShubhamKumar3010"
            />
          </section>
        </header>
        <main className="portfolio-content">
          <section className="portfolio-section about-section" ref={about}>
            <About />
          </section>
          <section className="portfolio-section skills-section" ref={tech}>
            <Skill />
          </section>
          <section className="portfolio-section experience-section" ref={work}>
            <ExperienceCard />
          </section>
          <section className="portfolio-section projects-section" ref={project}>
            <ProjectCard />
          </section>
          <section className="portfolio-section gallery-section" ref={gallery}>
            <Gallery />
          </section>
          <section className="portfolio-section achievements-section" ref={achievements}>
            <Achievements />
          </section>
        </main>
        <footer className="portfolio-footer">
          <Footer />
        </footer>
        <FloatingButton />
      </div>
    </>
  );
}

export default App;
