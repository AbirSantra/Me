import React from "react";
import heroimg from "../../img/hero-img.svg";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero section">
            <div className="container">
                <div className="hero-text grid-1">
                    <h1 className="hero-header">Hi, I'm Abir Santra</h1>
                    <h2 className="designation">
                        Web Developer & Graphic Designer
                    </h2>
                    <p className="hero-txt">
                        Welcome to my Site! Feel free to have a look around &
                        get in touch.
                    </p>
                    <a href="#about" className="main-btn hero-btn">
                        See More <i className="fas fa-caret-right"></i>
                    </a>
                    <div className="hero-links">
                        <a
                            href="https://www.linkedin.com/in/abir-santra-8a9305205/"
                            className="hero-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://twitter.com/DezignDeck"
                            className="hero-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://github.com/AbirSantra"
                            className="hero-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-img grid-1">
                    <img src={heroimg} alt="person-coding" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
