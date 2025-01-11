import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ProfilePic from "../assets/profile-pic.png";
import RowCard from "./RowCard";

const About = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  const aboutDesc =
    "I am currently working as a Software Developer at Infosys, specializing as a Specialist Programmer. I completed my B.Tech in Computer Science from JECRC University, Jaipur. I enjoy identifying problems around me that can be solved with software and love working on innovative ideas. My hobbies include watching and playing football, listening to music, and traveling.";

    const getYearsOfExperience = (startDate: string): number => {
      const start = new Date(startDate);
      const now = new Date();
    
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
    
      if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      }
    
      if (months < 0) {
        years -= 1;
        months += 12;
      }
    
      const totalMonths = years * 12 + months + (days / new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate());
      return totalMonths / 12;
    };
    const yearsOfExperience = getYearsOfExperience("2022-07-21").toFixed(1);

  return (
    <Grid
      paddingLeft={isMobileView ? "15px" : "200px"}
      paddingRight={isMobileView ? "15px" : "200px"}
      marginBottom="35px"
      gap="10px"
    >
      <div
        style={{
          fontSize: isMobileView ? "25px" : "60px",
          color: "#514F4F",
          marginBottom: "20px",
        }}
      >
        About <b>Me</b>
      </div>
      <div
        style={{
          fontSize: isMobileView ? "16px" : "25px",
          padding: "5px",
          marginBottom: "80px",
        }}
      >
        {aboutDesc}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobileView ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobileView ? "50px" : "10px",
        }}
      >
        <img
          src={ProfilePic}
          alt="shubham-img"
          style={{
            height: isMobileView ? "250px" : "300px",
            width: isMobileView ? "250px" : "300px",
          }}
        />
        <RowCard
          cardType="Exp."
          line1Content={`${yearsOfExperience} Years`}
          line2Content="Software Developer"
        />
        <RowCard
          cardType="Educ."
          line1Content="2018-2022"
          line2Content="Btech-CSE"
        />
      </div>
    </Grid>
  );
};

export default About;
