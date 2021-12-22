import React from 'react'
import './Stack.css'
import bootstrap from '../../img/stack-logo/bootstrap-logo.png'
import clang from '../../img/stack-logo/c.png'
import canva from '../../img/stack-logo/canva.png'
import cpp from '../../img/stack-logo/cpp.png'
import css3 from '../../img/stack-logo/css-3 (1).png'
import expressjs from '../../img/stack-logo/expressjs.png'
import figma from '../../img/stack-logo/figma.png'
import html5 from '../../img/stack-logo/html-5.png'
import illustrator from '../../img/stack-logo/illustrator.png'
import java from '../../img/stack-logo/java.png'
import javascript from '../../img/stack-logo/js.png'
import mongodb from '../../img/stack-logo/mongodb.png'
import nodejs from '../../img/stack-logo/node-js.png'
import photoshop from '../../img/stack-logo/photoshop.png'
import python from '../../img/stack-logo/python.png'
import reactjs from '../../img/stack-logo/reactjs.png'
import sass from '../../img/stack-logo/sass.png'





const Stack = () => {
    return (
        <div id='stack' className='stack section'>
            <div className="container">
                <div className="section-header">
                    <h3 className="title">My Stack</h3>
                    <p className="text">These are the technologies that I use to develop <br /> websites or design graphics.</p>
                </div>
                <div className="logos">
                    <div className="logo-wrap">
                        <img src={java} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">Java</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={clang} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">C</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={cpp} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">CPP</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={python} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">Python</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={html5} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">HTML5</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={css3} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">CSS3</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={sass} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">SASS</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={bootstrap} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">Bootstrap</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={javascript} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">JavaScript</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={mongodb} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">MongoDB</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={expressjs} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">ExpressJS</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={reactjs} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">ReactJS</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={nodejs} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">NodeJS</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={photoshop} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">Photoshop</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={illustrator} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">Illustrator</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={figma} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">Figma</p>
                    </div>
                    <div className="logo-wrap">
                        <img src={canva} alt="java-logo" className='logo-icon' />
                        <p className="text logo-label">Canva</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack
