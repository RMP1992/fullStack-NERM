import React, { useState } from 'react';
import Modal from 'react-modal';

const Manga = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className="buttons" onClick={() => setModalIsOpen(true)}>Manga</button>
            <Modal isOpen={modalIsOpen}>
                <h2>{props.Manga}</h2> 
            </Modal>
        </div>
    )
}

export default Manga
