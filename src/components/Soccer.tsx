import React from "react";
import '../assets/styles/Project.scss';
import mainfooty from '../assets/images/main-footy.jpg'


interface FootballProps {
    onShowJourney: () => void;
}

function Football({ onShowJourney }: FootballProps) {
    return (
        <div className="projects-container" id="projects">
            <h1>Soccer</h1>
            <div className="projects-grid">
                <div className="project">
                    <div onClick={onShowJourney} style={{ cursor: "pointer" }}>
                        <img src={mainfooty} className="zoom" alt="thumbnail" width="100%" />
                        <h2>My Student Athlete Journey</h2>
                    </div>
                    <p>
                        While studying Computer Science and preparing for a career in the tech industry,
                        I’ve also had the privilege of being a student-athlete. Soccer has been a defining
                        part of my life, teaching me the value of hard work, discipline, consistency,
                        teamwork, and resilience in the face of challenges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Football;