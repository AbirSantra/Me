import React from "react";
import "./Navbar.css";
import logo from "../../img/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="#skills" className="link">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#stack" className="link">
                                Stack
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="link">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#hire-me" className="main-btn">
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav-links-mobile">
                <ul>
                    <li><a href="#skills" class="mobile-link"><i class="fas fa-file-code"></i></a></li>
                    <li><a href="#stack" class="mobile-link"><i class="fas fa-layer-group"></i></a></li>
                    <li><a href="#about" class="mobile-link"><i class="fas fa-user"></i></a></li>
                    <li><a href="#projects" class="mobile-link"><i class="fas fa-briefcase"></i></a></li>
                    <li><a href="#hire-me" class="mobile-link"><i class="fas fa-envelope-open-text"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
