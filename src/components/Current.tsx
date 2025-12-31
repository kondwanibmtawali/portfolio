import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faPersonWalkingArrowRight, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import "../assets/styles/Expertise.scss";

function Current() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Current & Ongoing Work</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faComputer} size="3x" />
                        <h3>Coursework</h3>
                        <p> • Computer Organization</p>
                        <p> • Software Engineering</p>
                        <p> • Statistics</p>
                        <p> </p>

                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Personal Learning</h3>
                        <p> • Microsoft Azure</p>
                        <p> • Amazon Web Services</p>
                        <p> • Data Science & Analytics</p>
                        <p> • Machine Learning</p>
                        <p> </p>

                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPersonWalkingArrowRight} size="3x" />
                        <h3>Long Term Goals & Employment Plan</h3>
                        <p> • Summer 2026: Internship</p>
                        <p> • January 2027: Full-Time Employment </p>
                        <p> • M.S. Data Science & Analytics</p>
                        <p> </p>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Current;