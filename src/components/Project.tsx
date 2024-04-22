import React from "react";
import "./Project.css";
import Button from "@mui/joy/Button";
import smargGaya from "../assets/smartGaya5.jpg";
import matangi from "../assets/matangi.png";
import hotelMb from "../assets/hotelMb.png";

type ProjectProps = {
  projectName: string;
  projectDesc: string;
  projectDate: string;
};
const Project: React.FC<ProjectProps> = ({
  projectName,
  projectDesc,
  projectDate,
}) => {
  return (
    <div className="project-card-sm">
      <div className="card-border-gradient"></div>
      <div className="card-container">
        <img
          src={
            projectName === "Smart Gaya (Android Project)"
              ? smargGaya
              : projectName === "Matangi (Android Project)"
              ? matangi
              : hotelMb
          }
          alt=""
        />
        <div className="wrapper">
          <div>
            <h1>{projectName}</h1> <h5> {projectDate}</h5>
            <p>{projectDesc}</p>
          </div>
          <Button
            variant="solid"
            sx={{ color: "white", background: "#00fff", marginTop: "15px" }}
            style={{borderRadius:"300px"}}
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=n8BI4MhLTfI",
                "_blank"
              );
            }}
            disabled={
              projectName === "Smart Gaya (Android Project)" ? false : true
            }
          >
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
