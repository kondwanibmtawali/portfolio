import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import "../assets/styles/Currently.scss";

function Currently() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Current & Ongoing Work</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>Data Science & Machine Learning</h3>
                        <p> </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Currently;