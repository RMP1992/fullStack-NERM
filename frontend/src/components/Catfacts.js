import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

const Catfacts = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="cat-facts">
            <button className="buttons" onClick={() => setModalIsOpen(true)}>Catfacts</button>
            <Modal isOpen={modalIsOpen} className="modal">
                <div className="cat">
                    <h2>{props.Cat}</h2>
                </div>
            </Modal>

        </div>
    )
}

export default Catfacts
