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
          <section ref={home}>
            <HeaderDisplay
              name="Shubham"
              designation="Software Developer"
              emailId="shubham8969305655@gmail.com"
              linkedinURL="https://www.linkedin.com/in/shubham-kumar-6aa852171/"
              githubURL="https://github.com/ShubhamKumar3010"
            />
          </section>
        </header>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <section ref={about}>
            <About />
          </section>
          <section ref={tech}>
            <Skill />
          </section>
          <section ref={work}>
            <ExperienceCard />
          </section>
          <section ref={project}>
            <ProjectCard />
          </section>
          <section ref={gallery}>
            <Gallery />
          </section>
          <section ref={achievements}>
            <Achievements />
          </section>
        </section>
        <footer>
          <Footer />
        </footer>
        <FloatingButton />
      </div>
    </>
  );
}

export default App;
