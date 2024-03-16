import { Fab } from "@mui/material";
import React from "react";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

class FloatingButton extends React.Component {
  handleDownload = () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Shubham_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <Fab
          style={{ background: "#7c2bbf" }}
          aria-label="download"
          onClick={this.handleDownload}
        >
          <DownloadForOfflineIcon sx={{ color: "white" }} fontSize="large" />
        </Fab>
      </div>
    );
  }
}

export default FloatingButton;
