import React, {Component} from "react";
import styles from './CreatePost.module.css';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false};
    }

    render() {
        return (
            <>
                <button onClick={() => this.openModal()} className={styles.button}>
                    +
                </button>
                <Modal isOpen={this.state.isModalOpen}
                       onClose={() => this.closeModal()}>
                </Modal>
            </>
        )
    }

    openModal() {
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }
}

class Modal extends Component {
    render() {
        if (!this.props.isOpen) return null;

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
                        <button className={styles.modalButton} onClick={e => this.close(e)}>Cancel</button>
                    </div>
                </div>
                <div className={styles.modalBackground} onClick={e => this.close(e)}/>
            </div>
        )
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

export default CreatePost;