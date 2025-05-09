import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/images/profile.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Med-El-Mobarik"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/med-el-mobarik/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Mohamed El Mobarik</h1>
          <p>{t("job")}</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Med-El-Mobarik"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/med-el-mobarik/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
