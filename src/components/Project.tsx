import React from "react";
import bulldogsocial from '/home/kondwani/github-portfolio/src/assets/images/BulldogSocial.png';
import chirper from '/home/kondwani/github-portfolio/src/assets/images/Chirper.png';
import encoder from '/home/kondwani/github-portfolio/src/assets/images/Encoder.png';
import nlp from '/home/kondwani/github-portfolio/src/assets/images/Natural Language Processing.png';
import primes from '/home/kondwani/github-portfolio/src/assets/images/Primes.png';
import taskmanager from '/home/kondwani/github-portfolio/src/assets/images/Task Manager.png';
import ufcproj from '/home/kondwani/github-portfolio/src/assets/images/UFC Data Proj.png';
import '/home/kondwani/github-portfolio/src/assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={encoder} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Interactive Offset‑Based String Encryptor</h2></a>
                    <p>Designed and implemented an interactive string encoder in x86-64 assembly. The program prompts the user for a custom offset and accepts up to five input strings,
                        applying a Caesar-style shift to ASCII characters while dynamically flipping character case. Leveraged system calls, standard C library functions, and
                        memory operations to manage string input, encryption, and output formatting</p>
                </div>
                <div className="project">
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={nlp} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Natural Language Processing</h2></a>
                    <p>Developed a natural language processing pipeline to classify textual data into predefined categories using the Multinomial Naive Bayes algorithm.
                        Preprocessed input using tokenization and count vectorization, and implemented the classifier with scikit-learn pipelines. Evaluated performance
                        using precision, recall, and F1-score metrics on a test set.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/kondwani-mtawali/taskmanager" target="_blank" rel="noreferrer"><img src={taskmanager} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwani-mtawali/taskmanager" target="_blank" rel="noreferrer"><h2>Task Management Web App (Django REST + React) </h2></a>
                    <p>Designed and implemented a full-stack web application for managing tasks and group collaboration using Django REST Framework on the backend and React with
                        React Query on the frontend. Features include task creation, due dates, prioritization levels, file uploads, link attachments, and group work support with
                        role-based permissions. Users can view, delete, or reschedule tasks through a clean, student-styled UI..</p>
                </div>
                <div className="project">
                    <a href="https://github.com/kondwani-mtawali/bulldogsocial" target="_blank" rel="noreferrer"><img src={bulldogsocial} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/kondwani-mtawali/bulldogsocial" target="_blank" rel="noreferrer"><h2>HACKATHON 2025: Social Media Prototype</h2></a>
                    <p>Developed a prototype web application in 72 hours for the 2025 Hackathon addressing the lack of a unified student engagement platform on campus.
                        Bulldog Social reimagines a social media-style experience tailored for students, drawing inspiration from platforms used at prior institutions. The app
                        enables Concordia students to explore recommended interest-based spaces, join communities, access a student marketplace, manage close friend connections, and
                        access help resources—all within a clean, minimal interface.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/andrewfynaardt/chirper" target="_blank" rel="noreferrer"><img src={chirper} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/andrewfynaardt/chirper" target="_blank" rel="noreferrer"><h2>Chirper: Twitter Clone </h2></a>
                    <p>Chirper is a collaborative, full-stack web application that replicates core features of Twitter, enabling users to post short messages ("chirps") and
                        interact with them via likes. This project was built as part of a team, with shared responsibilities and version control managed through GitHub.
                        I contributed primarily to the UI design of the homepage, ensuring a modern and intuitive user experience, and I designed and implemented the backend models for
                        posting and displaying chirps (short-form messages) and liking chirps and tracking like counts per user.</p>
                </div>
                <div className="project">
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={ufcproj} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>Predicting MMA Outcomes with Machine Learning</h2></a>
                    <p>A data science project focused on predicting the outcomes of UFC MMA fights using historical fighter statistics and advanced modeling techniques. I scraped and cleaned fighter data,
                        engineered matchup-specific features, and trained machine learning models to predict the winner of a bout between two fighters.The project evaluates model accuracy by comparing
                        predictions with actual fight results, providing insight into which fighting metrics most strongly influence success in the octagon.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={primes} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Bit-Level Sieve of Eratosthenes in x86-64 Assembly</h2></a>
                    <p>Developed a fully functional prime number detection program in x86-64 Assembly, using bit-level operations to efficiently implement a variation of the Sieve of Eratosthenes.
                        The program initializes a 10,000-bit array where each bit represents a number’s primality. It marks non-primes using both even and odd multiple elimination, and then prints
                        the first 200 detected prime numbers, followed by the total number of primes up to 10,000.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;