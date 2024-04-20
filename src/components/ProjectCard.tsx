import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Project from "./Project";

const ProjectCard: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  return (
    <>
      <Grid paddingX={isMobileView ? "10px" : "250px"} marginBottom="35px">
        <div
          style={{
            fontSize: isMobileView ? "25px" : "60px",
            color: "#514F4F",
            marginBottom: "30px",
          }}
        >
          <b>C</b>ollege <b>Pr</b>ojects
        </div>
      </Grid>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "fit-content",
        }}
      >
        <Project
          projectName="Smart Gaya"
          projectDesc="This app provides a platform for the local Gayawis where they can get access to the daily need services such as the contact details of Plumbers, Electricians, AC mechanics, etc. The services of the Smart Gaya App don't stop there. It also brings you an online ration store from where you can order daily groceries and get the delivery at your doorsteps."
        />
      </div>
    </>
  );
};

export default ProjectCard;
