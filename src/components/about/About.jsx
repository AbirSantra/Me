import React from "react";
import "./About.css";
import dp from "../../img/dp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <div className="section about" id="about">
            <div className="container">
                <div className="about-wrapper">
                    <div className="dp">
                        <img src={dp} alt="" />
                    </div>
                    <div className="about-content">
                        <div className="section-header">
                            <h3 className="title">About me</h3>
                            <p className="text">
                                Get to know the man behind the code.
                            </p>
                        </div>
                        <div className="about-text location">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="location-icon"
                            />
                            <p className="location-text">West Bengal, India</p>
                        </div>
                        <br />
                        <p className="about-text">
                            I am a freelance <span>Web Developer</span> (MERN)
                            and <span>Graphics Designer</span>. I aim to create
                            professional websites and designs that{" "}
                            <span>make a difference</span>.
                        </p>
                        <br />
                        <p className="about-text">
                            I started coding since I was in highschool and
                            currently I am a second-year undergraduate studying
                            Information Technology at MCKV Institute of
                            Engineering, <span>looking for opportunities</span>.
                        </p>
                        <br />
                        <p className="about-text">
                            I am fairly <span>positive</span>,{" "}
                            <span>strong-willed</span> and I{" "}
                            <span>always finish what I start</span>. It is my
                            dream to be <span>happy in life</span> and do what I
                            love. When I'm not coding, I love to hangout with my
                            friends and play video games, listen to music, jam
                            on my drums, watch Anime. Also, I love pasta.
                        </p>
                        <a href="#skills" className="about-btn">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
