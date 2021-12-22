import React from 'react'
import './Skills.css'
import Skill from './Skill'
import feIcon from '../../img/web-design.png'
import beIcon from '../../img/web-dev.png'
import gdIcon from '../../img/graphic-design.png'

const Skills = () => {
    return (
        <div id='skills' className='skills section'>
            <div className="container">
                <div className="section-header">
                    <h3 className="title">My Skills</h3>
                    <p className="text">Here are the skills that I try to perfect everyday!</p>
                </div>
                <div className="cards">
                    <Skill icon={feIcon} title="FrontEnd Development" description="This includes frontend design of any type of website, landing pages and UI designs as well" />
                    <Skill icon={beIcon} title="BackEnd Development" description="This includes creating and working with APIs, databases as well as security and authentication" />
                    <Skill icon={gdIcon} title="Graphics Design" description="This includes all types of graphic design works such as logos, banners, posters, etc" />

                </div>
            </div>
        </div>
    )
}

export default Skills
