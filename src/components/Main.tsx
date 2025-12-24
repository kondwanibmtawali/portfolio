import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '/home/kondwani/github-portfolio/src/assets/styles/Main.scss';
import ProfileIMG from '/home/kondwani/github-portfolio/src/assets/images/ProfileIMG.png';

function Main() {

    return (
        <div className="container">
            <div className="about-section">
                <div className="image-wrapper">
                    <img src={ProfileIMG} alt="Avatar" />
                </div>
                <div className="content">
                    <div className="social_icons">
                        <a href="https://github.com/kondwanibmtawali" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/kondwani-mtawali-a52072307/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                    </div>
                    <h1>Kondwani Mtawali</h1>
                    <p>Computer Science Undergraduate</p>

                    <div className="mobile_social_icons">
                        <a href="https://github.com/kondwanibmtawali" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/kondwani-mtawali-a52072307/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;