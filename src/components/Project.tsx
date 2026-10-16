import React from "react";
import smargGaya from "../assets/smartGaya5.jpg";
import matangi from "../assets/matangi.png";
import hotelMb from "../assets/hotelMb.png";

type ProjectProps = {
  projectName: string;
  projectDesc: string;
  projectDate: string;
};
const Project: React.FC<ProjectProps> = ({
  projectName,
  projectDesc,
  projectDate,
}) => {
  const projectTitle = projectName.replace(/\s*\([^)]*\)/, "");
  const projectType = projectName.match(/\(([^)]*)\)/)?.[1] || "Project";
  const projectPeriod = projectDate.replace(/[()]/g, "");
  const projectNumber = projectTitle.startsWith("Hotel")
    ? "01"
    : projectTitle === "Smart Gaya"
    ? "02"
    : "03";
  const projectVisual = projectTitle.startsWith("Hotel")
    ? "hotel"
    : projectTitle === "Smart Gaya"
    ? "smart-gaya"
    : "matangi";
  const projectImage =
    projectTitle === "Smart Gaya"
      ? smargGaya
      : projectTitle === "Matangi"
      ? matangi
      : hotelMb;

  return (
    <article className="project-card">
      <div className={`project-card-art project-card-art--${projectVisual}`}>
        <img src={projectImage} alt={`${projectTitle} project preview`} loading="lazy" />
        <span className="project-card-index">{projectNumber}</span>
        <span className="project-card-type">{projectType}</span>
      </div>
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>SELECTED WORK</span>
          <time>{projectPeriod}</time>
        </div>
        <h3>{projectTitle}</h3>
        <p>{projectDesc}</p>
        {projectTitle === "Smart Gaya" ? (
          <a
            className="project-card-link"
            href="https://www.youtube.com/watch?v=n8BI4MhLTfI"
            target="_blank"
            rel="noreferrer"
          >
            View project <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="project-card-archive">Project archive <span aria-hidden="true">↗</span></span>
        )}
      </div>
    </article>
  );
};

export default Project;
