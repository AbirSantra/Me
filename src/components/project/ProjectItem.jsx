import React from "react";
// import portfolio from "../../img/showcase/portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

export default function ProjectItem({
    id,
    name,
    desc,
    img,
    stack,
    demo,
    code,
}) {
    return (
        <div className="project-card">
            <div className="project-img">
                <img src={img} alt="project_image" />
            </div>
            <div className="project-description">
                <h3 className="project-title">{name}</h3>
                <p className="text project-desc">{desc}</p>
                <div className="project-stack">
                    {stack.map((stackItem, index) => {
                        return (
                            <div className="stack-item" key={index}>
                                {stackItem}
                            </div>
                        );
                    })}
                    {/* <div className="stack-item">ReactJS</div>
                    <div className="stack-item">NextJS</div>
                    <div className="stack-item">MongoDB</div> */}
                </div>
                <div className="project-links">
                    <div className="link-item">
                        <FontAwesomeIcon icon={faLink} />
                        <a href={demo} target="_blank" rel="noreferrer">
                            Website
                        </a>
                    </div>
                    <div className="link-item">
                        <FontAwesomeIcon icon={faCode} />
                        <a href={code} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
