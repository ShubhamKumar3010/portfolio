import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import Menu from "@mui/icons-material/Menu";
import useStore from "../store/store";

export default function DrawerTab() {
  const [open, setOpen] = React.useState(false);
  const { home, about, tech, work, project, gallery, achievements } =
    useStore();

  const moveToSection = (sectionRef: React.MutableRefObject<any>) => {
    const yOffset = -70;
    const y =
      sectionRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleHomeClick = () => {
    moveToSection(home);
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
    <React.Fragment>
      <IconButton
        className="spatial-menu-trigger"
        variant="outlined"
        color="neutral"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="portfolio-navigation-drawer"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        id="portfolio-navigation-drawer"
        className="spatial-drawer"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="spatial-drawer-header">
          <span className="spatial-drawer-monogram">SK</span>
          <span className="spatial-drawer-title">
            <small>PORTFOLIO / NAVIGATION</small>
            <strong>Shubham Kumar</strong>
          </span>
          <ModalClose
            className="spatial-drawer-close"
            aria-label="Close navigation menu"
            sx={{ position: "initial" }}
          />
        </div>
        <div className="spatial-drawer-label">
          <span>EXPLORE</span>
          <span>07 SECTIONS</span>
        </div>
        <List
          className="spatial-drawer-list"
          size="lg"
          component="nav"
          aria-label="Portfolio sections"
          sx={{
            flex: "none",
            fontSize: "lg",
          }}
        >
          <ListItemButton
            className="spatial-drawer-item"
            sx={{ fontWeight: "lg" }}
            onClick={() => {
              handleHomeClick();
              setOpen(false);
            }}
          >
            <span className="spatial-drawer-index">01</span>
            <span>Home</span>
          </ListItemButton>
          <ListItemButton
            className="spatial-drawer-item"
            onClick={() => {
              handleAboutClick();
              setOpen(false);
            }}
          >
            <span className="spatial-drawer-index">02</span>
            <span>About Me</span>
          </ListItemButton>
          <ListItemButton
            className="spatial-drawer-item"
            onClick={() => {
              handleTechClick();
              setOpen(false);
            }}
          >
            <span className="spatial-drawer-index">03</span>
            <span>Technical Skills</span>
          </ListItemButton>
          <ListItemButton
            className="spatial-drawer-item"
            onClick={() => {
              handleWorkClick();
              setOpen(false);
            }}
          >
            <span className="spatial-drawer-index">04</span>
            <span>Work Experience</span>
          </ListItemButton>
          <ListItemButton
            className="spatial-drawer-item"
            onClick={() => {
              handleProjectClick();
              setOpen(false);
            }}
          >
            <span className="spatial-drawer-index">05</span>
            <span>Personal Projects</span>
          </ListItemButton>
          <ListItemButton
            className="spatial-drawer-item"
            onClick={() => {
              handleGalleryClick();
              setOpen(false);
            }}
          >
            <span className="spatial-drawer-index">06</span>
            <span>Project Glimpse</span>
          </ListItemButton>
          <ListItemButton
            className="spatial-drawer-item"
            onClick={() => {
              handleAchievementClick();
              setOpen(false);
            }}
          >
            <span className="spatial-drawer-index">07</span>
            <span>Achievements</span>
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
