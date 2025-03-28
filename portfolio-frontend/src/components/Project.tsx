import React from "react";
import { useTranslation } from "react-i18next";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Project.scss";

const projects = [
  {
    id: "medlab",
    url: "https://medlab.dev",
    githubUrl: "https://github.com/Med-El-Mobarik/medlab",
  },
  {
    id: "archive",
    url: "https://iid-archive.vercel.app/",
    githubUrl: "https://github.com/Med-El-Mobarik/iid-archive",
  },
  {
    id: "formation",
    url: "https://ensakh-formations.vercel.app/",
    githubUrl: "https://github.com/Med-El-Mobarik/formations-ensa-khouribga",
  },
];

function Project() {
  const { t } = useTranslation();
  return (
    <div className="projects-container" id="projects">
      <h1>{t("projects.section.title")}</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a href={project.url} target="_blank" rel="noreferrer">
              <img
                src={`/images/${project.id}.png`}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
            <h2>{t(`projects.${project.id}.name`)}</h2>
            <p>{t(`projects.${project.id}.description`)}</p>
          </div>
        ))}
      </div>
    </div>

    //     <div className="project">
    //       <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
    //         <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
    //       </a>
    //       <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
    //         <h2>Filmate AI</h2>
    //       </a>
    //       <p>
    //         Developed movie finder app with semantic search and sentiment
    //         analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.
    //       </p>
    //     </div>
    //     <div className="project">
    //       <a
    //         href="https://yujisatojr.itch.io/highspeedchase"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
    //       </a>
    //       <a
    //         href="https://yujisatojr.itch.io/highspeedchase"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <h2>High Speed Chase</h2>
    //       </a>
    //       <p>
    //         Designed, developed, and launched a 3D multiplayer racing game with
    //         C# and Unity. This is available on Itch.io for gamers worldwide to
    //         enjoy.
    //       </p>
    //     </div>
    //     <div className="project">
    //       <a
    //         href="https://yujisatojr.itch.io/spacecraft"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
    //       </a>
    //       <a
    //         href="https://yujisatojr.itch.io/spacecraft"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <h2>Astro Raiders</h2>
    //       </a>
    //       <p>
    //         Developed and released a 2D shooting game with C# and Unity. This
    //         project is hosted on the Itch.io public marketplace.
    //       </p>
    //     </div>
    //     <div className="project">
    //       <a
    //         href="https://www.datumlearn.com/"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
    //       </a>
    //       <a
    //         href="https://www.datumlearn.com/"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <h2>Datum: Integrated Learning Platform</h2>
    //       </a>
    //       <p>
    //         This is an online educational platform that provides high-quality,
    //         data science-focused learning resources in the Japanese language. I
    //         created the entire platform from scratch using Ruby on Rails.
    //       </p>
    //     </div>
    //   </div>
  );
}

export default Project;
