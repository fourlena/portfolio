import React from 'react';
import style from "./Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "../project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer} `}>
                <h2>Projects</h2>
                <div className={style.projects}>
                    <Project title={'ToDo list'} discription={'Architecto beatae consequatur, culpa doloremque, dolorum ex explicabo facilis'}/>
                    <Project title={'Social network'}  discription={'Architecto beatae consequatur, culpa doloremque, dolorum ex explicabo facilis'}/>
                </div>
            </div>

        </div>
    );
};

export default Projects;