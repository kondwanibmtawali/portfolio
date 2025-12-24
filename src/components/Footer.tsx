import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '/home/kondwani/github-portfolio/src/assets/styles/Footer.scss'

function Footer() {
    return (
        <footer>
            <div>
                <a href="https://github.com/kondwanibmtawali" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/kondwani-mtawali-a52072307/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
        </footer>
    );
}

export default Footer;