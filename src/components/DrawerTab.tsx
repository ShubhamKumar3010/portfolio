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
  const { about } = useStore();

  const moveToSection = (sectionRef: React.MutableRefObject<any>) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    moveToSection(about);
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
          <ListItemButton sx={{ fontWeight: "lg" }}>Home</ListItemButton>
          <ListItemButton
            onClick={() => {
              handleAboutClick();
              setOpen(false);
            }}
          >
            About Me
          </ListItemButton>
          <ListItemButton>Technical Skills</ListItemButton>
          <ListItemButton>Work Experience</ListItemButton>
          <ListItemButton>College Projects</ListItemButton>
          <ListItemButton>Project Glimpse</ListItemButton>
          <ListItemButton>Achievements</ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
