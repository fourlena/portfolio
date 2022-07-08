import React from 'react';
import style from "./Skill.module.css";

type SkillProppsType ={
    title: string
    discription:string
}

const Skill = (props:SkillProppsType) => {
    return (
        <div className={style.skillBlock}>
            <div className={style.icon}>icon</div>
            <h3>{props.title}</h3>
            <span className={style.description}> {props.discription}</span>
        </div>
    );
};

export default Skill;