import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import { Chip, useMediaQuery, useTheme } from "@mui/material";
import DrawerTab from "./DrawerTab";

function Navbar() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));

  return (
    <>
      <div className="container">
        <nav className="main-nav">
          <Chip
            avatar={
              <Avatar
                alt="Shubham"
                src={
                  "https://media.licdn.com/dms/image/D4D03AQGZ7-JgrWYJWg/profile-displayphoto-shrink_400_400/0/1703011688377?e=1719446400&v=beta&t=MAepxqU9XiywnWewDc96myo6SKo34eURROLBxJ7Yvp0"
                }
              />
            }
            label="Shubham Kumar"
            variant="outlined"
          />
          <ul className="main-menu">
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Technical Skills</a>
            </li>
            <li>
              <a href="#">Work Experience</a>
            </li>
            <li>
              <a href="#">College Projects</a>
            </li>
            <li>
              <a href="#">Project Glimpse</a>
            </li>
            <li>
              <a href="#">Achievements</a>
            </li>
          </ul>

          <ul className="right-menu">
            <li>
              {isMobileView ? <DrawerTab /> : <></>}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
