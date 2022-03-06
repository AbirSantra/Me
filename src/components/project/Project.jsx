import React from "react";
import "./Project.css";
import projects from "../project/projects.js";
import ProjectItem from "./ProjectItem";

const Project = () => {
    return (
        <div className="portfolio section" id="projects">
            <div className="container">
                <div className="section-header">
                    <h3 className="title">Projects</h3>
                    <p className="text">
                        Here are all the recent projects I have worked on.{" "}
                        <br /> More projects will be added very soon.
                    </p>
                </div>
                <div className="projects-allItems">
                    {projects.map((project, index) => {
                        return (
                            <ProjectItem
                                key={project.id}
                                name={project.name}
                                desc={project.desc}
                                img={project.img}
                                stack={project.stack}
                                demo={project.demo}
                                code={project.code}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Project;
