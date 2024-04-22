import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import { Chip, useMediaQuery, useTheme } from "@mui/material";
import DrawerTab from "./DrawerTab";
import useStore from "../store/store";
function Navbar() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm" || "md"));
  const { about, tech, work, project, gallery, achievements } = useStore();

  const moveToSection = (sectionRef: React.MutableRefObject<any>) => {
    const yOffset = -70;
    const y =
      sectionRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    moveToSection(about);
  };
  const handleTechClick = () => {
    moveToSection(tech);
  };
  const handleWorkClick = () => {
    moveToSection(work);
  };
  const handleProjectClick = () => {
    moveToSection(project);
  };
  const handleGalleryClick = () => {
    moveToSection(gallery);
  };
  const handleAchievementClick = () => {
    moveToSection(achievements);
  };
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
              <p onClick={handleAboutClick}>About Me</p>
            </li>
            <li>
              <p onClick={handleTechClick}>Technical Skills</p>
            </li>
            <li>
              <p onClick={handleWorkClick}>Work Experience</p>
            </li>
            <li>
              <p onClick={handleProjectClick}>College Projects</p>
            </li>
            <li>
              <p onClick={handleGalleryClick}>Project Glimpse</p>
            </li>
            <li>
              <p onClick={handleAchievementClick}>Achievements</p>
            </li>
          </ul>

          <ul className="right-menu">
            <li>{isMobileView ? <DrawerTab /> : <></>}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
