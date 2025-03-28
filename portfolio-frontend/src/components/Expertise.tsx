import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from "@mui/material/Chip";
import { useTranslation } from "react-i18next";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Nestjs",
  "SQL",
  "PostgreSQL",
  "Mongodb",
  "Angular",
  "Spring Boot",
  "Figma",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "GitLab",
  "Docker",
  "AWS",
  "Jenkins",
  "Linux",
  "Kubernetes",
  "Ansible",
];

const labelsThird = ["OpenAI", "Hadoop", "Spark", "Python", "LlamaIndex"];

function Expertise() {
  const { t } = useTranslation();
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact as IconProp} size="3x" />
            <h3>{t("expertise.fullstack.title")}</h3>
            <p>{t("expertise.fullstack.description")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker as IconProp} size="3x" />
            <h3>{t("expertise.devops.title")}</h3>
            <p>{t("expertise.devops.description")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython as IconProp} size="3x" />
            <h3>{t("expertise.data.title")}</h3>
            <p>{t("expertise.data.description")}</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
