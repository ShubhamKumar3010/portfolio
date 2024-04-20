import React from "react";
import "./Project.css";
import Button from "@mui/joy/Button";
import smargGayaGif from "../assets/smartGaya.gif";

type ProjectProps = {
  projectName: string;
  projectDesc: string;
};
const Project: React.FC<ProjectProps> = ({ projectName, projectDesc }) => {
  return (
    <div className="project-card-sm">
      <div className="card-border-gradient"></div>
      <div className="card-container">
        <img src={smargGayaGif} alt="" />
        <div className="wrapper">
          <h1>{projectName}</h1>
          <p>{projectDesc}</p>

          <Button
            variant="solid"
            sx={{ color: "white", background: "#7c2bbf" }}
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=n8BI4MhLTfI",
                "_blank"
              );
            }}
            disabled={projectName === "Smart Gaya" ? false : true}
          >
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
