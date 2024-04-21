import * as React from "react";
import "./App.css";
import HeaderDisplay from "./components/HeaderDisplay";
import FloatingButton from "./components/FloatingButton";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import About from "./components/About";
import { useMediaQuery, useTheme } from "@mui/material";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";

function App() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  
  return (
    <>
      <div className="App">
        <nav className="App-navbar">
          <Navbar />
        </nav>
        <header className="App-header">
          <HeaderDisplay
            name="Shubham"
            designation="Software Developer"
            emailId="shubham8969305655@gmail.com"
            linkedinURL="https://www.linkedin.com/in/shubham-kumar-6aa852171/"
            githubURL="https://github.com/ShubhamKumar3010"
          />
        </header>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <section>
            <About />
          </section>
          <section>
            <Skill />
          </section>
          <section>
            <ExperienceCard />
          </section>
          <section>
            <ProjectCard />
          </section>
        </section>
        <FloatingButton />
      </div>
    </>
  );
}

export default App;
