import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                    I'm  <span className="purple">Harshita Singh </span>  from <span className="purple"> Kanpur, India</span>. 
                       
                        <br />In 2023, I proudly completed my B.Tech in Computer Science and Engineering at Shri Ramswaroop Memorial College of Engineering and Management in Lucknow.
                         <br />
                        <br />
                        Beyond technology, I'm passionate about singing, literary writing, and exploring new places through travel. These pursuits add depth and color to my life.
                    </p>

                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Singing
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Literary Writing
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                       
                    </ul>
                    

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                   
                    <footer className="blockquote-footer">Harshita</footer>
                </blockquote>
                
            </Card.Body>
           
        </Card>
    );
}

export default AboutCard;