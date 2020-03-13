import React, { useState } from 'react';
import Modal from 'react-modal';

const Music = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className="buttons" onClick={() => setModalIsOpen(true)}>Music</button>
            <Modal isOpen={modalIsOpen}>
                <h2>{props.Music}</h2>
            </Modal>
        </div>
    )
}

export default Music
