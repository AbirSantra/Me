import React from 'react'
import './About.css'
import dp from '../../img/dp.jpg'

const About = () => {
    return (
        <div class="section about" id="about">
            <div class="container">
                <div class="about-wrapper">
                    <div class="dp">
                        <img src={dp} alt=""/>
                    </div>
                    <div class="about-content">
                        <div class="about-header">
                            <h3 class="title">About me</h3>
                            <p class="text">Get to know the man behind the code.</p>
                        </div>
                        <p class="about-text">Hey there, I am Abir Santra and I love coding, designing and developing stuff! ❤️</p>
                        <br/>
                        <p class="about-text">Based out at West Bengal, India, I completed my schooling from Adamas International School and currently I am a 2nd-Year undergraduate in MCKV Institute of Engineering, looking for awesome oppurtunities.</p>
                        <br/>
                        <p class="about-text">I am fairly positive, strong-willed and I always finish what I start. It is my dream to be happy in life and work at what I love. When I'm not coding, I love to hangout with my friends and play video games, listen to music, jam on my drums, watch Anime. Also, I love pasta.❤️</p>
                        <a href="#skills" class="about-btn">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
