import React from 'react'
import './Hireme.css'

const Hireme = () => {
    return (
        <div className="hire section" id="hire-me">
            <div className="container">
                <div className="section-header">
                    <h3 className="title">Impressed?</h3>
                    <p className="title-sm">Like what you see? Want to hire me for a project?</p>
                    <p className="text">If you feel that I'm the man for the job, hit me up on my socials or mail me so we can get started on your project! Or even if you just wanna be friends❤️</p>
                </div>
                <div className="hero-links">
                    <a href="https://www.linkedin.com/in/abir-santra-8a9305205/" className="hero-link" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/DezignDeck" className="hero-link" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/AbirSantra" className="hero-link" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                </div>
                <a href="mailto:santraabir8@gmail.com?subject=Project%20Offer" className="main-btn"><i className="fas fa-envelope"></i>Mail me now</a>
            </div>
        </div>
    )
}

export default Hireme
