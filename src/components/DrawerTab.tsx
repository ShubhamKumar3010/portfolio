import * as React from "react";
import Box from "@mui/joy/Box";
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
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 2,
          }}
        >
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton
            sx={{ fontWeight: "lg" }}
            onClick={() => {
              handleHomeClick();
              setOpen(false);
            }}
          >
            Home
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              handleAboutClick();
              setOpen(false);
            }}
          >
            About Me
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              handleTechClick();
              setOpen(false);
            }}
          >
            Technical Skills
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              handleWorkClick();
              setOpen(false);
            }}
          >
            Work Experience
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              handleProjectClick();
              setOpen(false);
            }}
          >
            College Projects
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              handleGalleryClick();
              setOpen(false);
            }}
          >
            Project Glimpse
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              handleAchievementClick();
              setOpen(false);
            }}
          >
            Achievements
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
