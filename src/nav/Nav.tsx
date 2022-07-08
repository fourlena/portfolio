import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.navBlock}>
            <a href="" className={style.link}>Main</a>
            <a href="" className={style.link}>Skills</a>
            <a href="" className={style.link}>Projects</a>
            <a href="" className={style.link}>Contacts</a>
        </div>
    );
};

export default Nav;