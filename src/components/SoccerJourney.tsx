import React from "react";
import '../assets/styles/SoccerJourney.scss';
import fcrich from "../assets/images/fcrich.png";
import blazers from "../assets/images/blazers.png";
import cune from '../assets/images/koko15_Original.jpg'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { faBriefcase, faLaptop, faBook } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import niacc from "../assets/images/niacc.jpeg";
import gpacwin from "../assets/images/gpacwin.png"
import cunestart from "../assets/images/cunestart.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface FootballJourneyProps {
    mode: string;
    onBack: () => void;
    modeChange: () => void;
}

const FootballJourney: React.FC<FootballJourneyProps> = ({ onBack, mode, modeChange }) => {
    return (
        <div className="soccer-timeline-wrapper">
            <div className={`football-journey-page ${mode}`}>

                <div className="journey-content">
                    <div className="items-container">
                        <div className="journey-header">
                            <button onClick={onBack} className="back-button">
                                ← Back to Portfolio
                            </button>
                            <h1>My Soccer Journey</h1>
                        </div>
                        <VerticalTimeline>
                            {/* FC Richmond - with custom team/player photo */}
                            <VerticalTimelineElement
                                position="left"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: '#ffffffff',
                                    color: 'rgb(39, 40, 34)',
                                    padding: '24px',
                                    alignContent: 'center',
                                    marginLeft: '-20px',   // extra space from center line (for left position)
                                    marginRight: '20px',  // same for right
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid white',
                                }}
                                date="2022 - 2023"
                                dateClassName="custom-date"
                                iconStyle={{
                                    background: '#ffffffff',
                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 1)',
                                    width: '120px',      // make photo big
                                    height: '120px',
                                    marginLeft: '-60px', // center on the line
                                }}
                                icon={
                                    <img
                                        src={fcrich}
                                        alt="FC Richmond"
                                        className="timeline-large-image"
                                    />
                                }
                            >
                                <h3 className="vertical-timeline-element-title">FC Richmond</h3>
                                <p>
                                    Upon arriving to the United States I was determined to play soccer at a high level. Although,
                                    I entered the country having no team to play for. I rigourously sent emails, made phone calls and
                                    eventually got an answer from a club team, FC Richmond. I very quickly was integrated in the team
                                    and was competing from the get go. After a year of playing with the club I was eager to compete at
                                    a higher level.
                                </p>
                            </VerticalTimelineElement>

                            {/* NIACC - with custom team/player photo */}
                            <VerticalTimelineElement
                                position="right"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: '#ffffffff',
                                    color: 'rgb(39, 40, 34)',
                                    padding: '24px',
                                    alignContent: 'center',
                                    marginLeft: '-20px',   // extra space from center line (for left position)
                                    marginRight: '-40px',  // same for right
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid white',
                                }}
                                date="2023 - 2024"
                                dateClassName="custom-date"
                                iconStyle={{
                                    background: '#ffffffff',
                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 1)',
                                    width: '120px',      // make photo big
                                    height: '120px',
                                    marginLeft: '-60px', // center on the line
                                }}
                                icon={
                                    <img
                                        src={niacc}
                                        alt="FC Richmond"
                                        className="timeline-large-image"
                                    />
                                }
                            >
                                <h3 className="vertical-timeline-element-title">NIACC</h3>
                                <p>
                                    After spending a year with FC Richmond I decided to take the next step in my soccer journey and
                                    decided to join the college soccer team at NIACC. This was a significant step in my journey as it allowed me
                                    to compete at a higher level and gain experience in a more structured, competitive environment.
                                </p>
                            </VerticalTimelineElement>

                            {/* Blazers - with custom team/player photo */}
                            <VerticalTimelineElement
                                position="left"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: '#ffffffff',
                                    color: 'rgb(39, 40, 34)',
                                    padding: '24px',
                                    alignContent: 'center',
                                    marginLeft: '-20px',   // extra space from center line (for left position)
                                    marginRight: '20px',  // same for right
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid white',
                                }}
                                date="Summer 2024"
                                dateClassName="custom-date"
                                iconStyle={{
                                    background: '#ffffffff',
                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 1)',
                                    width: '120px',      // make photo big
                                    height: '120px',
                                    marginLeft: '-60px', // center on the line
                                }}
                                icon={
                                    <img
                                        src={blazers}
                                        alt="FC Richmond"
                                        className="timeline-large-image"
                                    />
                                }
                            >
                                <h3 className="vertical-timeline-element-title">Blazers Football Club</h3>
                                <p>
                                    With a full year of college soccer experience under my belt, I was eager to take myself even further. I joined the Blazers,
                                    a semi-professional team in Fairfax County, VA. The Blazers were a semi-professional team that played in the UPS League,
                                    considered the fourth tier of professional soccer in the United States. I was able to compete against some of the great players,
                                    including those who went on to play professionally. This experience was invaluable and helped me to develop my skills and gain valuable
                                    experience in a semi-professional environment.
                                </p>
                            </VerticalTimelineElement>

                            {/* CUNE - with custom team/player photo */}
                            <VerticalTimelineElement
                                position="right"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: '#ffffffff',
                                    color: 'rgb(39, 40, 34)',
                                    padding: '24px',
                                    alignContent: 'right',
                                    marginLeft: '-40px',   // extra space from center line (for left position)
                                    marginRight: '-40px',  // same for right
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid white',
                                }}
                                date="2024 - Present"
                                dateClassName="custom-date"
                                iconStyle={{
                                    background: '#ffffffff',
                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 1)',
                                    width: '120px',      // make photo big
                                    height: '120px',
                                    marginLeft: '-100px', // center on the line
                                }}
                                icon={
                                    <img
                                        src={cunestart}
                                        alt="FC Richmond"
                                        className="timeline-large-image"
                                    />
                                }
                            >
                                <h3 className="vertical-timeline-element-title">Concordia University, Nebraska</h3>
                                <p>
                                    Despite the challenges of adapting to a new country and culture, I was determined to pursue my passion for soccer even further.
                                    I joined the Concordia University, Nebraska soccer team, where I was able to compete at a high level and gain valuable experience
                                    in a college setting. The team was known for being a strong competitor in its conference, including the GPAC Championship wins and
                                    National Tournament appearances. I was proud to represent Concordia and contribute toward a team with a winning formula. This experience
                                    helped me develop my communication and collaboration skills, requiring me to be even more disciplined and dedicated.
                                </p>
                            </VerticalTimelineElement>

                            {/* CUNE -GPAC Championship + Nationals */}
                            <VerticalTimelineElement
                                position="left"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: '#ffffffff',
                                    color: 'rgb(39, 40, 34)',
                                    padding: '24px',
                                    alignContent: 'center',
                                    marginLeft: '-20px',   // extra space from center line (for left position)
                                    marginRight: '20px',  // same for right
                                }}
                                contentArrowStyle={{
                                    borderRight: '7px solid white',
                                }}
                                date="Fall 2025"
                                dateClassName="custom-date"
                                iconStyle={{
                                    background: '#ffffffff',
                                    boxShadow: '0 0 0 4px rgba(255, 255, 255, 1)',
                                    width: '120px',      // make photo big
                                    height: '120px',
                                    marginLeft: '-60px', // center on the line
                                }}
                                icon={
                                    <img
                                        src={gpacwin}
                                        alt="FC Richmond"
                                        className="timeline-large-image"
                                    />
                                }
                            >
                                <h3 className="vertical-timeline-element-title">Conference Championship & National Tournament</h3>
                                <p>
                                    In the Fall 2025 season, I was a senior on a Concordia men's soccer team experiencing a lot of change. The team saw the depature of
                                    several key players resulting in 16 new players joining the squad. The beginning of the season was a struggle, going 2-6 in the first 8 games.
                                    Despite these challenges, the culture within our locker room facilitated change, a turn around, a comeback. In the second half of the season we became a different team. Come play off
                                    time we were ready to compete for the conference championship. On the 11th of November, 2025 we went up against Morningside University for the conference championship. We were able to secure a victory, becoming the 3rd team in program history to win the conference and move on to the National Tournament,
                                    where we beat the #24 ranked team in the country, and eventually got knocked out by the #3 ranked team in the nation. Although we didn't win the national tournament, it was a valuable
                                    experience that played a significant role in my development as a soccer player and as a person. It was a season that taught me the importance of perseverance,
                                    resilience, and the power of unity.
                                </p>
                            </VerticalTimelineElement>

                        </VerticalTimeline>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FootballJourney;
