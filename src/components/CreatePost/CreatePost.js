import React, {Component, useState} from "react";
import styles from './CreatePost.module.css';

const CreatePost = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }
     return (
        <>
            <button onClick={openModal} className={styles.button}>+</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}

const Modal = (props) => {
    const close = (e) => {
        e.preventDefault();

        if (props.onClose) {
            props.onClose();
        }
    }
 
    if (!props.isOpen) {
        return null;
    }

    return (
        <div>
            <div className={styles.modal}>
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
                    <button className={styles.modalButton}>Create</button>
                    <button className={styles.modalButton} onClick={close}>Cancel</button>
                </div>
            </div>
            <div className={styles.modalBackground} onClick={close}/>
        </div>
    )    
}

export default CreatePost;