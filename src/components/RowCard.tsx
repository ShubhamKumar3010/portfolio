import * as React from "react";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";

type RowCardProps = {
  cardType: "Exp." | "Educ.";
  line1Content: string;
  line2Content: string;
};
const RowCard: React.FC<RowCardProps> = ({
  cardType,
  line1Content,
  line2Content,
}) => {
  const isExperience = cardType === "Exp.";

  return (
    <article
      className={`profile-fact ${isExperience ? "profile-fact--experience" : "profile-fact--education"}`}
    >
      <div className="profile-fact-icon">
        {isExperience ? <BadgeIcon /> : <SchoolIcon />}
      </div>
      <div className="profile-fact-copy">
        <span className="profile-fact-label">
          {isExperience ? "Experience" : "Education"}
        </span>
        <strong>{line1Content}</strong>
        <span>{line2Content}</span>
      </div>
      <span className="profile-fact-index">{isExperience ? "01" : "02"}</span>
    </article>
  );
};

export default RowCard;
