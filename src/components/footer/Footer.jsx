import React from 'react'
import './Footer.css'
import logo from '../../img/logo-dark.png'

const Footer = () => {
    return (
        <footer className="footer section" id="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-logo">
                    <img src={logo} alt="footer-logo"/>
                </div>
                    
                    <div className="site-links footer-col">
                        <p className="text">Site Map:</p>
                        <ul>
                            <li>
                                <a href="#home" className="site-link">Home</a>
                            </li>
                            <li>
                                <a href="#skills" className="site-link">My Skills</a>
                            </li>
                            <li>
                                <a href="#stack" className="site-link">Tech Stack</a>
                            </li>
                            <li>
                                <a href="#about" className="site-link">About me</a>
                            </li>
                            <li>
                                <a href="#projects" className="site-link">Projects</a>
                            </li>
                            <li>
                                <a href="#hire-me" className="site-link">Hire me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-skills footer-col">
                        <p className="text">Services:</p>
                        <ul>
                            <li>
                                <a href="#skills" className="site-link">Web Design</a>
                            </li>
                            <li>
                                <a href="#skills" className="site-link">Web Dev</a>
                            </li>
                            <li>
                                <a href="#skills" className="site-link">Graphic Design</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="footer-socials footer-col">
                        <p className="text">Follow me:</p>
                        <div className="hero-links">
                            <a href="https://www.linkedin.com/in/abir-santra-8a9305205/" className="hero-link" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://twitter.com/DezignDeck" className="hero-link" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="https://github.com/AbirSantra" className="hero-link" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
            </div>
            <div className="copyright">
                <p className="text">Copyright&copy;2021 All rights reserved | Crafted by <span className="footer-name">Abir Santra</span></p>
            </div>
            <div className="container"></div>
        </div>
    </footer>
    )
}

export default Footer
