import { Grid } from "@mui/material";
import React from "react";
import Project from "./Project";

const ProjectCard: React.FC = () => {
  return (
    <>
      <Grid paddingX="10px" marginBottom="35px">
        <div
          style={{
            fontSize: "34px",
            color: "#514F4F",
            marginBottom: "30px",
          }}
        >
          <b>P</b>ersonal <b>Pro</b>jects
        </div>
      </Grid>
      <div className="project-grid">
        <Project
          projectName="Hotel MB International (Web Project)"
          projectDesc="Developed a React landing page for a hotel using React and Material UI component."
          projectDate="(June 2022-June 2022)"
        />
        <Project
          projectName="Smart Gaya (Android Project)"
          projectDesc="This app provides a platform for the local Gayawis where they can get access to the daily need services such as the contact details of Plumbers, Electricians, AC mechanics, etc. The services of the Smart Gaya App don't stop there. It also brings you an online ration store from where you can order daily groceries and get the delivery at your doorsteps."
          projectDate="(August 2020-October 2020)"
        />
        <Project
          projectName="Matangi (Android Project)"
          projectDesc="Developed an Android app for a cafe with a food junction and game parlor, offering a comprehensive dining and entertainment experience in one convenient application."
          projectDate="(May 2020-July 2020)"
        />
      </div>
    </>
  );
};

export default ProjectCard;
