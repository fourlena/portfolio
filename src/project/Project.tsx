import React from 'react';
import style from "./Project.module.css";

type ProjectPropsType ={
    title:string
    discription: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div>
            <div className={style.projectBlock}>
                <div className={style.picture}>
                    <a className={style.button} href={''} >Watch</a>
                </div>
                <h3>{props.title}</h3>
                <span className={style.description}> {props.discription}</span>
            </div>
        </div>
    );
};

export default Project;