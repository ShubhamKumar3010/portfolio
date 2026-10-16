import { Fab, Tooltip } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

function FloatingButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <Tooltip placement="left" title="Open resume on Google Drive" arrow>
        <Fab
          component="a"
          href="https://drive.google.com/file/d/1U0KtQwXPrn_9UqEiQJP5lqJTrilZKwPl/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          style={{ background: "#7c2bbf" }}
          aria-label="Request access to resume on Google Drive"
        >
          <DescriptionOutlinedIcon sx={{ color: "white" }} fontSize="large" />
        </Fab>
      </Tooltip>
    </div>
  );
}

export default FloatingButton;
