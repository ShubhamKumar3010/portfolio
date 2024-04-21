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
          <b>C</b>ollege <b>Pro</b>jects
        </div>
      </Grid>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "fit-content",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: !isMobileView ? "row" : "column",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <Project
            projectName="Hotel MB International (Web Project)"
            projectDesc="Developed a React landing page for a hotel using React and Material UI component."
            projectDate="(June 2022-June 2022)"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: !isMobileView ? "row" : "column",
            gap: 50,
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Project
            projectName="Smart Gaya (Android Project)"
            projectDesc="This app provides a platform for the local Gayawis where they can get access to the daily need services such as the contact details of Plumbers, Electricians, AC mechanics, etc. The services of the Smart Gaya App don't stop there. It also brings you an online ration store from where you can order daily groceries and get the delivery at your doorsteps."
            projectDate="(August 2020-October 2020)"
          />
          <Project
            projectName="Matangi (Android Project)"
            projectDesc="Developed an Android app for a cafe with a food junction and game parlor, offering a comprehensive dining and entertainment
            experience in one convenient application."
            projectDate="(May 2020-July 2020)"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
