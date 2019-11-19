import React from "react";

import styles from './ModalWindow.module.css';

const ModalWindow = (props) => {
    const {onClose, isOpen} = props;

    const close = (e) => {
        e.preventDefault();

        if (onClose) {
            onClose();
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div className={styles.modalContainer}>
                <div>Create a post</div>
                <form className={styles.form}>
                    <label>
                        Photo (optionally) <input type='text' placeholder='Enter URL'/>
                    </label>
                    <label>
                        Description <textarea/>
                    </label>
                </form>
                <div>
                    <button className={styles.button}>Create</button>
                    <button className={styles.button} onClick={close}>Cancel</button>
                </div>
            </div>
            <div className={styles.background} onClick={close}/>
        </div>
    )
};

export default ModalWindow;