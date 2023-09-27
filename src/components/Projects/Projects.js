import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import music from "../../Assets/Projects/musicplayer.png";
import csvupload from "../../Assets/Projects/csvupload.png";
import habit from "../../Assets/Projects/habit.png";
import frank from "../../Assets/Projects/frank.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={frank}
                            isBlog={false}
                            title="FRank"
                            description="FilmyRank | FRank is a mini clone of IMDB using HTML , CSS , and vanilla JavaScript. In this Bootstrap framework is used and integrated with OMDB API"
                            ghLink="https://github.com/Harshita043/FRank-IMDB-clone"
                            demoLink="https://harshita043.github.io/FRank-IMDB-clone/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={habit}
                            isBlog={false}
                            title="Habit Tracker"
                            description="Habit Tracker project, enabling users to define and monitor multiple habits. Users can add new habits for seamless tracking and progress monitoring."
                            ghLink="https://github.com/Harshita043/HabitTracker"
                            demoLink="https://nodejs-habit-tracker.onrender.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={csvupload}
                            isBlog={false}
                            title="CSV Upload"
                            description="CSVupload is a Node.js web application that allows users to upload CSV files, display a list of uploaded files, and view the data in a table on the front end. The application also includes a search box that can search through the data and display only the matching rows."
                            ghLink="https://github.com/Harshita043/CSVupload"
                            demoLink="https://csvupload-i6rs.onrender.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={music}
                            isBlog={false}
                            title="Music Player"
                            description="This project is a front-end music player design inspired by Spotify. It offers a visually engaging and user-friendly interface that mirrors Spotify's sleek design, providing users with an immersive music listening experience."
                            ghLink="https://github.com/Harshita043/MusicPlayer"
                            demoLink="https://2zn67f-5000.csb.app/"

                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;