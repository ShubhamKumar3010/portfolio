import { Box } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box className="footer-inner">
      <div className="footer-main">
        <div className="footer-copy">
          <p className="footer-eyebrow"><span /> Let's connect and share ideas.</p>
          <h2><b>C</b>ontact <b>Me</b></h2>
          <p className="footer-description">
            Have a project, opportunity, or idea in mind? Let’s start a conversation.
          </p>
        </div>
        <div className="footer-links" aria-label="Contact links">
          <a
            href="https://www.linkedin.com/in/shubham-kumar-6aa852171/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
            <span className="footer-link-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="mailto:shubham8969305655@gmail.com">
            <EmailOutlinedIcon />
            <span>Email me</span>
            <span className="footer-link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="footer-meta">
        <span>Shubham Kumar <i /> Software Developer</span>
        <span>Copyright © {currentYear} Shubham Kumar. All Rights Reserved.</span>
      </div>
    </Box>
  );
}

export default Footer;
