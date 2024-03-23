import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function Navbar() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        borderRadius: "20px",
        height: isMobileView ? "" : "50px",
        color: "#9655cb",
        fontWeight: "bold",
        backgroundColor: "rgba(76, 76, 76, 0.36)",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography sx={{ color: "white",fontWeight:"" }}>
          <h1><b>S</b>hubham Kumar</h1>
        </Typography>
      </Box>
      <div>
        {/* <Typography variant="h1" fontFamily="Arial">Arial Font</Typography>
      <Typography variant="h2" fontFamily="Times New Roman">Times New Roman Font</Typography>
      <Typography variant="h3" fontFamily="Courier New">Courier New Font</Typography>
      <Typography variant="h4" fontFamily="Georgia">Georgia Font</Typography>
      <Typography variant="h5" fontFamily="Verdana">Verdana Font</Typography>
      <Typography variant="h6" fontFamily="Comic Sans MS">Comic Sans MS Font</Typography> */}
      </div>
      <Box
        sx={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
          display: "flex",
          flexDirection: isMobileView ? "column" : "row",
          color: "white",
        }}
      >
        <a>About </a>
        <a>Experience </a>
        <a>Projects </a>
        <a>Contact </a>
      </Box>
    </div>
  );
}

export default Navbar;
