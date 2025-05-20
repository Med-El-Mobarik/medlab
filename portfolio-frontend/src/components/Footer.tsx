import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Med-El-Mobarik" target="_blank" rel="noreferrer" aria-label="Github"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/med-el-mobarik/" target="_blank" rel="noreferrer" aria-label="Linkedin"><LinkedInIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;