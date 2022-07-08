import React from 'react';
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`} >
                <h2>Lena Pavlovich</h2>
                <div className={style.icons}>
                    <div className={style.icon}>pic</div>
                    <div className={style.icon}>pic</div>
                    <div className={style.icon}>pic</div>
                    <div className={style.icon}>pic</div>
                </div>
                <span>All Rights Reserved</span>
            </div>
        </div>
    );
};

export default Footer;