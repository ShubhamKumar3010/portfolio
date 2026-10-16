import HomeLogo from "../assets/homeLogo.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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
  return (
    <div className="hero-content">
      <div className="hero-copy">
        <div className="hero-kicker"><span /> Available for meaningful work</div>
        <p className="hero-greeting">Hello, I’m</p>
        <h1>
          <TypeAnimation
            sequence={[` ${name}`, 1400, " a software developer", 1600]}
            wrapper="span"
            speed={60}
            deletionSpeed={60}
            repeat={Infinity}
          />
          <span className="hero-period">.</span>
        </h1>
        <p className="hero-designation">{designation}</p>
        <p className="hero-summary">
          4+ years of experience building React frontends, developing full-stack
          MERN applications, and working with Java.
        </p>
        <div className="hero-actions">
          <a className="hero-contact" href={`mailto:${emailId}`}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
          <div className="hero-socials" aria-label="Social links">
            <a href={linkedinURL} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={githubURL} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-visual" aria-label="Abstract software developer illustration">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-visual-core">
          <img src={HomeLogo} alt="" />
        </div>
        <div className="hero-coordinate">26° 54′ N<br />75° 47′ E</div>
        <div className="hero-visual-label"><span>01</span> Bangalore, India</div>
      </div>
    </div>
  );
};

export default HeaderDisplay;
