import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

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
          <div className="contact_infos">
            <a href="tel:+33774375682">
              <LocalPhoneIcon />
              <p>+33 7 74 37 56 82</p>
            </a>
            <a href="mailto:mo.elmobarik@gmail.com">
              <EmailIcon />
              <p>mo.elmobarik@gmail.com</p>
            </a>
          </div>
          <h1>Mohamed El Mobarik</h1>
          <p>{t("job")}</p>

          <Button
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            {t("resume")}
          </Button>

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
