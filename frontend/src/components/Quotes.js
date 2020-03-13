import React, { useState } from 'react';
import Modal from 'react-modal';

const Quotes = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className= "buttons" onClick={() => setModalIsOpen(true)}>Famous Quotes</button>
            <Modal isOpen={modalIsOpen}>
                <h2>{props.Quotes}</h2>
            </Modal>
        </div>
    )
}

export default Quotes
