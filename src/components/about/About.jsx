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
                            Based out at West Bengal, India, I completed my
                            schooling from Adamas International School and
                            currently I am a 2nd-Year undergraduate in MCKV
                            Institute of Engineering, looking for awesome
                            oppurtunities.
                        </p>
                        <br />
                        <p className="about-text">
                            I am fairly positive, strong-willed and I always
                            finish what I start. It is my dream to be happy in
                            life and work at what I love. When I'm not coding, I
                            love to hangout with my friends and play video
                            games, listen to music, jam on my drums, watch
                            Anime. Also, I love pasta.❤️
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