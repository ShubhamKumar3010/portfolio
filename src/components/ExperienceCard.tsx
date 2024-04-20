import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";

const ExperienceCard: React.FC = () => {
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
          <b>W</b>ork <b>Exp</b>erience
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fit-content",
          }}
        >
          <Card
            sx={{
              textAlign: "center",
              alignItems: "center",
              "--icon-size": "100px",
            }}
            style={{
              width: "300px",
            }}
          >
            <CardOverflow
              variant="solid"
              color="warning"
              sx={{ backgroundColor: "#0271b1" }}
            >
              <AspectRatio
                variant="outlined"
                ratio="1"
                sx={{
                  m: "auto",
                  transform: "translateY(50%)",
                  borderRadius: "50%",
                  width: "var(--icon-size)",
                  boxShadow: "sm",
                  bgcolor: "background.surface",
                  position: "relative",
                  border: "1px solid #0271b1",
                }}
              >
                <div>
                  <p style={{ fontSize: "25px", fontFamily: "bold" }}>
                    <b>Infosys</b>
                  </p>
                </div>
              </AspectRatio>
            </CardOverflow>
            <Typography
              level="title-lg"
              sx={{ mt: "calc(var(--icon-size) / 2)" }}
            >
              <b>Specialist Programmer</b>
            </Typography>
            <CardContent sx={{ maxWidth: "40ch" }}>
              <b>July 2022 - Present</b>
            </CardContent>
            <CardActions
              orientation="vertical"
              buttonFlex={1}
              sx={{
                "--Button-radius": "40px",
                width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
              }}
            >
              <Button
                variant="solid"
                color="danger"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/infosys/",
                    "_blank"
                  );
                }}
              >
                Visit Website
              </Button>
            </CardActions>
          </Card>
        </div>
      </Grid>
    </>
  );
};

export default ExperienceCard;
