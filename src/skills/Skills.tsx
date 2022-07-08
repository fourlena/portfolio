import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "../skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Css'} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum libero pariatur saepe tempore.'}/>
                    <Skill title={'Js'} discription={'Architecto beatae consequatur, culpa doloremque, dolorum ex explicabo facilis'}/>
                    <Skill title={'React'} discription={'harum impedit itaque maxime modi porro sed?'}/>
                </div>

            </div>
        </div>
    );
};

export default Skills;