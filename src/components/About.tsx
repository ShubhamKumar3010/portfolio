import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ProfilePic from "../assets/profile-pic.png";

const About = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  const aboutDesc =
    "Currently, I am working as a software developer at Infosys, specializing as a Specialist Programmer. I completed my B.Tech in Computer Science in 2022 from JECRC University, Jaipur. I enjoy identifying problems around me that can be solved with software and love working on innovative ideas. My hobbies include watching and playing football, listening to music, and traveling.";
  return (
    <Grid padding="15px" marginBottom="35px">
      <img src={ProfilePic} alt="shubham-img" style={{height:"300px",width:"300px"}}/>
      <div
        style={{
          fontSize: isMobileView ? "25px" : "60px",
          color: "#514F4F",
          marginBottom: "20px",
        }}
      >
        About <b>Me</b>
      </div>
      <div style={{ fontSize: isMobileView ? "15px" : "25px", color: "white" }}>
        {aboutDesc}
      </div>
    </Grid>
  );
};

export default About;
