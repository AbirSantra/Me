import React from 'react'
import './Skill.css'

const Skill = (props) => {
    return (
        <div className='cards-wrap'>
            <div className="card-content">
                <img src={props.icon} alt="card-icon" className='card-icon'/>
                <h3 className="title-sm">{props.title}</h3>
                <p className="text">{props.description}</p>
                <a href="#projects" className="main-btn skills-btn">View Projects</a>
            </div>
        </div>
    )
}

export default Skill
