import React, { useState } from 'react';
import Modal from 'react-modal';
import NeonQuotes from '../images/neonQuotes.jpg'

const Quotes = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className= "buttons" onClick={() => setModalIsOpen(true)}>Famous Quotes</button>
            <Modal isOpen={modalIsOpen} className="modal">
                
                <div className="quote">
                    <h2>{props.Quotes}</h2>
                </div>
                
            </Modal>
        </div>
    )
}

export default Quotes
