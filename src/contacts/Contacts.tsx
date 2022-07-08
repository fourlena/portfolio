import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form className={style.form}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button className={style.button}> Submit </button>
            </div>

        </div>
    );
};

export default Contacts;