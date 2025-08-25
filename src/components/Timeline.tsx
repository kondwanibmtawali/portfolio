import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLaptop, faBook } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '/home/kondwani/github-portfolio/src/assets/styles/Timeline.scss'

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Career History</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2022 - 2024"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBook} />}
                    >
                        <h3 className="vertical-timeline-element-title">VCCS | NIACC </h3>
                        <h4 className="vertical-timeline-element-subtitle">Richmond, VA | Mason City, IA</h4>
                        <p>
                            Spent two years acquiring associates degree.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024 - Present"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faLaptop} />}
                    >
                        <h3 className="vertical-timeline-element-title">Concordia University Nebraska</h3>
                        <h4 className="vertical-timeline-element-subtitle">Seward, NE</h4>
                        <p>
                            Data Science, Application Development, Data Structures & Algorithm Analysis
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2025"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className="vertical-timeline-element-title">IT Technician Internship</h3>
                        <h4 className="vertical-timeline-element-subtitle">Seward, NE</h4>
                        <p>
                            Computer Configuration, Network System Management, Cable Termination, IT Operations

                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;