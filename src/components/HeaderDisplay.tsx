import Grid from "@mui/material/Grid";
import HomeLogo from "../assets/homeLogo.svg";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

type HeaderDisplayProps = {
  name: string;
  designation: string;
  emailId: string;
  linkedinURL: string;
  githubURL: string;
};
const HeaderDisplay: React.FC<HeaderDisplayProps> = ({
  name,
  designation,
  emailId,
  linkedinURL,
  githubURL,
}) => {
  const [mailHovered, setMailHovered] = useState<boolean>(false);
  const [linkedinHovered, setLinkedinHovered] = useState<boolean>(false);
  const [githubHovered, setGithubHovered] = useState<boolean>(false);

  return (
    <>
      <Grid
        container
        display={"flex"}
        flexDirection="row"
        height="600px"
        flexGrow={1}
        alignItems="center"
      >
        <Grid
          item={true}
          xs={6}
          display={"flex"}
          flexDirection="column"
          fontSize="70px"
          width="50%"
        >
          <Grid>
            <TypeAnimation
              sequence={[
                `Hi, I'am ${name}`,
                "Nice To Meet  You..",
                `Hi, I'am ${name}`,
              ]}
              wrapper="span"
              speed={10}
            />
          </Grid>
          <Grid>
            <div>
              <b>S</b>oftware <b>Dev</b>eloper
            </div>
          </Grid>
          <Grid>
            <EmailIcon
              sx={{
                color: mailHovered ? "#514F4F" : "#cccccc",
                cursor: mailHovered ? "pointer" : "",
                height: "60px",
                width: "60px",
                transition: "color 0.3s",
                "&:hover": {
                  transform: "scale(1.5)",
                },
                padding: "6px",
              }}
              onMouseOver={() => setMailHovered(true)}
              onMouseOut={() => setMailHovered(false)}
              onClick={() => {
                window.open(`mailto:${emailId}`, "_blank");
              }}
            />
            <LinkedInIcon
              fontSize="large"
              sx={{
                color: linkedinHovered ? "#514F4F" : "#cccccc",
                cursor: linkedinHovered ? "pointer" : "",
                height: "60px",
                width: "60px",
                transition: "color 0.3s",
                "&:hover": {
                  transform: "scale(1.5)",
                },
                padding: "6px",
              }}
              onMouseOver={() => setLinkedinHovered(true)}
              onMouseOut={() => setLinkedinHovered(false)}
              onClick={() => {
                window.open(linkedinURL, "_blank");
              }}
            />
            <GitHubIcon
              fontSize="large"
              sx={{
                color: githubHovered ? "#514F4F" : "#cccccc",
                cursor: githubHovered ? "pointer" : "",
                height: "60px",
                width: "60px",
                transition: "color 0.3s",
                "&:hover": {
                  transform: "scale(1.5)",
                },
                padding: "6px",
              }}
              onMouseOver={() => setGithubHovered(true)}
              onMouseOut={() => setGithubHovered(false)}
              onClick={() => {
                window.open(githubURL, "_blank");
              }}
            />
          </Grid>
        </Grid>

        <Grid item={true} xs={6} width="50%">
          <img src={HomeLogo} height="300px" width="400px" alt="home-logo" />
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderDisplay;
