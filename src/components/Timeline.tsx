import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLaptop, faBook } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Academic & Work History</h1>
                <VerticalTimeline>
                    {/* Associates Degree Card */}
                    <VerticalTimelineElement
                        className="vertical-timeline--work"
                        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2022 - 2024"
                        dateClassName="custom-date"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBook} />}
                    >
                        <h3 className="vertical-timeline-title">VCCS | NIACC </h3>
                        <h4 className="vertical-timeline-subtitle">Richmond, VA | Mason City, IA</h4>
                        <p>
                            Spent two years acquiring associates degree.
                        </p>
                    </VerticalTimelineElement>

                    {/* Concordia Fall'24 */}
                    <VerticalTimelineElement
                        className="vertical-timeline--work"
                        date="Fall 2024"
                        dateClassName="custom-date"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faLaptop} />}
                    >
                        <h3 className="vertical-timeline-title">Concordia University Nebraska</h3>
                        <h4 className="vertical-timeline-subtitle">Seward, NE</h4>
                        <p>
                            Data Science, Computer Systems, Calculus II
                        </p>
                    </VerticalTimelineElement>

                    {/* Concordia Spring'25 */}
                    <VerticalTimelineElement
                        className="vertical-timeline--work"
                        date="Spring 2025"
                        dateClassName="custom-date"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBook} />}
                    >
                        <h3 className="vertical-timeline-title">Concordia Univesity, Nebraska</h3>
                        <h4 className="vertical-timeline-subtitle">Seward, NE</h4>
                        <p>
                            Application Development, Data Structures & Algorithm Analysis, Competitve & Collaborative Programming
                        </p>
                    </VerticalTimelineElement>

                    {/* Concordia Summer'25 */}
                    <VerticalTimelineElement
                        className="vertical-timeline--work"
                        date="Summer 2025"
                        dateClassName="custom-date"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faBriefcase} />}
                    >
                        <h3 className="vertical-timeline-title">IT Management Internship</h3>
                        <h4 className="vertical-timeline-subtitle">Seward, NE</h4>
                        <p>
                            Computer Network Configuration, Network System Management, Cable Termination, IT Operations
                        </p>
                    </VerticalTimelineElement>

                    {/* Concordia Fall'25 */}
                    <VerticalTimelineElement
                        className="vertical-timeline--work"
                        date="Fall 2025"
                        dateClassName="custom-date"
                        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                        icon={<FontAwesomeIcon icon={faLaptop} />}
                    >
                        <h3 className="vertical-timeline-title">Concordia University, Nebraska</h3>
                        <h4 className="vertical-timeline-subtitle">Seward, NE</h4>
                        <p>
                            System Administration, Cybersecurity, Organization Programming Languages, Senior Project
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Timeline;