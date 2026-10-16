import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ExperienceCard: React.FC = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
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
          <b>W</b>ork <b>Exp</b>erience
        </div>
        <article className="experience-card">
          <div className="experience-card-topline">
            <span>CAREER LOG <b>01</b></span>
            <span className="experience-status"><i /> Current role</span>
          </div>
          <div className="experience-card-main">
            <div className="experience-company-mark" aria-hidden="true">i</div>
            <div className="experience-card-copy">
              <span className="experience-company">Infosys</span>
              <h3>Specialist Programmer L2</h3>
              <p>Software Development</p>
            </div>
            <span className="experience-card-dates">JUL ’22 — PRESENT</span>
          </div>
          <div className="experience-card-bottom">
            <span>Bangalore, India <i>·</i> Full-time</span>
            <a href="https://www.linkedin.com/company/infosys/" target="_blank" rel="noreferrer">
              Explore company <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </Grid>
    </>
  );
};

export default ExperienceCard;
