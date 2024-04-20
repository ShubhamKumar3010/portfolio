import { Chip, Grid, useMediaQuery, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import DataObjectIcon from "@mui/icons-material/DataObject";
import HtmlIcon from "@mui/icons-material/Html";
import React from "react";

const Skill = () => {
  const chipStyle = {
    color: "black",
    border: "solid 2px black",
    margin: "10px",
    padding: "2px",
  };
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  return (
    <Grid paddingX={isMobileView?"10px": "250px"} marginBottom="35px">
      <div
        style={{
          fontSize: isMobileView ? "25px" : "60px",
          color: "#514F4F",
          marginBottom: "20px",
        }}
      >
        <b>Tech</b>nical <b>S</b>kills
      </div>
      <div>
        <Chip icon={<CodeIcon />} sx={chipStyle} label="C" />
        <Chip icon={<CodeIcon />} sx={chipStyle} label="C++" />
        <Chip icon={<JavascriptIcon />} sx={chipStyle} label="JavaScript" />
        <Chip icon={<DataObjectIcon />} sx={chipStyle} label="TypeScript" />
        <Chip icon={<HtmlIcon />} sx={chipStyle} label="HTML" />
        <Chip icon={<CssIcon />} sx={chipStyle} label="CSS" />
        <Chip icon={<CodeIcon />} sx={chipStyle} label="Tailwind CSS" />
        <Chip icon={<CodeIcon />} sx={chipStyle} label="React" />
        <Chip icon={<CodeIcon />} sx={chipStyle} label="Mongo DB" />
        <Chip icon={<CodeIcon />} sx={chipStyle} label="NodeJs" />
        <Chip icon={<CodeIcon />} sx={chipStyle} label="ExpressJs" />
      </div>
    </Grid>
  );
};

export default Skill;
