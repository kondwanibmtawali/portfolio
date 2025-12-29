import React from "react";
import ansible from '../assets/images/ansible.png';
import cronhelper from '../assets/images/cronhelper.png';
import Konnectly from '../assets/images/Konnectly.png';
import "../assets/styles/Project.scss";
import ufcproj from '../assets/images/UFC Data Proj.png';
import taskmanager from '../assets/images/Task Manager.png';
import primes from '../assets/images/Primes.png';
import nlp from '../assets/images/Natural Language Processing.png';
import encoder from '../assets/images/Encoder.png';
import chirper from '../assets/images/Chirper.png';
import bulldogsocial from '../assets/images/BulldogSocial.png';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Work & Projects</h1>
            <div className="projects-grid">
                {/* Konnectly */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/konnectly" target="_blank" rel="noreferrer"><img src={Konnectly} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/konnectly" target="_blank" rel="noreferrer"><h2>Data Driven LLM Investment Pathways</h2></a>
                    <p>An interactive web application that allows users to explore detailed economic data for African countries. The app leverages
                        AI (powered by Grok) to dynamically generate personalized investment opportunity reports based on the country's real-time economic metrics. These reports
                        highlight viable investment pathways—such as agriculture, manufacturing, or tourism—complete with data-backed insights, sector analysis, and growth potential.</p>
                </div>
                {/* Interactive Offset-Based String Encryptor */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/encoder" target="_blank" rel="noreferrer"><img src={encoder} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/encoder" target="_blank" rel="noreferrer"><h2>Interactive Offset‑Based String Encryptor</h2></a>
                    <p>Designed and implemented an interactive string encoder in x86-64 assembly. The program prompts the user for a custom offset and accepts up to five input strings,
                        applying a Caesar-style shift to ASCII characters while dynamically flipping character case. Leveraged system calls, standard C library functions, and
                        memory operations to manage string input, encryption, and output formatting</p>
                </div>
                {/* Natural Language Processing */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/nlp" target="_blank" rel="noreferrer"><img src={nlp} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/nlp" target="_blank" rel="noreferrer"><h2>Natural Language Processing</h2></a>
                    <p>Developed a natural language processing pipeline to classify textual data into predefined categories using the Multinomial Naive Bayes algorithm.
                        Preprocessed input using tokenization and count vectorization, and implemented the classifier with scikit-learn pipelines. Evaluated performance
                        using precision, recall, and F1-score metrics on a test set.</p>
                </div>
                {/* Task Management Web App */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/taskmanager" target="_blank" rel="noreferrer"><img src={taskmanager} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/taskmanager" target="_blank" rel="noreferrer"><h2>Task Management Web App (Django REST + React) </h2></a>
                    <p>Designed and implemented a full-stack web application for managing tasks and group collaboration using Django REST Framework on the backend and React with
                        React Query on the frontend. Features include task creation, due dates, prioritization levels, file uploads, link attachments, and group work support with
                        role-based permissions. Users can view, delete, or reschedule tasks through a clean, student-styled UI..</p>
                </div>
                {/* Bulldog Social */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/bulldogsocial" target="_blank" rel="noreferrer"><img src={bulldogsocial} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/bulldogsocial" target="_blank" rel="noreferrer"><h2>HACKATHON 2025: Social Media Prototype</h2></a>
                    <p>Developed a prototype web application in 72 hours for the 2025 Hackathon addressing the lack of a unified student engagement platform on campus.
                        Bulldog Social reimagines a social media-style experience tailored for students, drawing inspiration from platforms used at prior institutions. The app
                        enables Concordia students to explore recommended interest-based spaces, join communities, access a student marketplace, manage close friend connections, and
                        access help resources—all within a clean, minimal interface.</p>
                </div>
                {/* Cronjob Script */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/crontab-helper" target="_blank" rel="noreferrer"><img src={cronhelper} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/crontab-helper" target="_blank" rel="noreferrer"><h2>Automatated Cronjob Script</h2></a>
                    <p>The script works interactively: it prompts the user for the path to an executable program and a desired schedule (offering predefined options like "hourly" or "daily,"
                        or allowing custom cron expressions), validates that the program exists (using tools like which) and that the cron syntax is correct, displays a confirmation of the
                        generated entry, and then automatically installs the job into the user's crontab.</p>
                </div>
                {/* Chirper: Twitter Clone */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/chirper" target="_blank" rel="noreferrer"><img src={chirper} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/chirper" target="_blank" rel="noreferrer"><h2>Chirper: Twitter Clone </h2></a>
                    <p>Chirper is a collaborative, full-stack web application that replicates core features of Twitter, enabling users to post short messages ("chirps") and
                        interact with them via likes. This project was built as part of a team, with shared responsibilities and version control managed through GitHub.
                        I contributed primarily to the UI design of the homepage, ensuring a modern and intuitive user experience, and I designed and implemented the backend models for
                        posting and displaying chirps (short-form messages) and liking chirps and tracking like counts per user.</p>
                </div>
                {/* MMA Predictions */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/machinelearning" target="_blank" rel="noreferrer"><img src={ufcproj} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/machinelearning" target="_blank" rel="noreferrer"><h2>Predicting MMA Outcomes with Machine Learning</h2></a>
                    <p>A data science project focused on predicting the outcomes of UFC MMA fights using historical fighter statistics and advanced modeling techniques. I scraped and cleaned fighter data,
                        engineered matchup-specific features, and trained machine learning models to predict the winner of a bout between two fighters.The project evaluates model accuracy by comparing
                        predictions with actual fight results, providing insight into which fighting metrics most strongly influence success in the octagon.</p>
                </div>
                {/* Bit-Level Sieve of Eratosthenes in x86-64 Assembly */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/sieveassembly" target="_blank" rel="noreferrer"><img src={primes} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/sieveassembly" target="_blank" rel="noreferrer"><h2>Bit-Level Sieve of Eratosthenes in x86-64 Assembly</h2></a>
                    <p>Developed a fully functional prime number detection program in x86-64 Assembly, using bit-level operations to efficiently implement a variation of the Sieve of Eratosthenes.
                        The program initializes a 10,000-bit array where each bit represents a number’s primality. It marks non-primes using both even and odd multiple elimination, and then prints
                        the first 200 detected prime numbers, followed by the total number of primes up to 10,000.</p>
                </div>
                {/* Ansible */}
                <div className="project">
                    <a href="https://github.com/kondwanibmtawali/ansible" target="_blank" rel="noreferrer"><img src={ansible} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwanibmtawali/ansible" target="_blank" rel="noreferrer"><h2>Declarative Server Configuration Using Ansible</h2></a>
                    <p>A colloborative project that includes the collection of Ansible playbooks designed for automating server setup and application deployment.
                        The project's primary purpose is to streamline the configuration of user accounts, SSH access, and home directories for developers and an administrator, while also
                        deploying the Bagisto e-commerce platform and Grafana monitoring tool using Docker in an idempotent manner.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;