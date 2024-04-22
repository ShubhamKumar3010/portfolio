import Grid from "@mui/material/Grid";
import HomeLogo from "../assets/homeLogo.svg";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type HeaderDisplayProps = {
  name: string;
  designation: string;
  emailId: string;
  linkedinURL: string;
  githubURL: string;
};
const HeaderDisplay: React.FC<HeaderDisplayProps> = ({
  name,
  emailId,
  linkedinURL,
  githubURL,
}) => {
  const [mailHovered, setMailHovered] = useState<boolean>(false);
  const [linkedinHovered, setLinkedinHovered] = useState<boolean>(false);
  const [githubHovered, setGithubHovered] = useState<boolean>(false);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));

  return (
    <>
      <Grid
        container
        display={"flex"}
        flexDirection={isMobileView ? "column" : "row"}
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        marginTop="70px"
      >
        <Grid
          padding={isMobileView ? "30px" : "15px"}
          item={true}
          xs={6}
          display={"flex"}
          flexDirection="column"
          fontSize={isMobileView ? "25px" : "50px"}
        >
          <Grid>
            <TypeAnimation
              sequence={[
                `Hello, I'm ${name}`,
                "Nice To Meet  You..",
                `Hello, I'am ${name}`,
              ]}
              wrapper="span"
              speed={30}
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
                color: mailHovered ? "#000" : "#514F4F",
                cursor: mailHovered ? "pointer" : "",
                height: isMobileView ? "50px" : "100px",
                width: isMobileView ? "50px" : "100px",
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
                color: linkedinHovered ? "#000" : "#514F4F",
                cursor: linkedinHovered ? "pointer" : "",
                height: isMobileView ? "50px" : "100px",
                width: isMobileView ? "50px" : "100px",
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
                color: githubHovered ? "#000" : "#514F4F",
                cursor: githubHovered ? "pointer" : "",
                height: isMobileView ? "50px" : "100px",
                width: isMobileView ? "50px" : "100px",
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

        <Grid item={true} xs={6}>
          <img
            src={HomeLogo}
            height={isMobileView ? "150px" : "200px"}
            width={isMobileView ? "250px" : "300px"}
            alt="home-logo"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderDisplay;
