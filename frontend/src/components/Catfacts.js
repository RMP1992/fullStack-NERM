import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';
import NeonCat from '../images/neonCat.png';

const Catfacts = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="cat-facts">
            <button className="buttons" onClick={() => setModalIsOpen(true)}><a>Catfacts</a></button>
            <Modal isOpen={modalIsOpen} className="modal">
                <div className="modalpic">
                    <img src={NeonCat} alt="Neon Light"/>
                </div>
                <div className="cat">
                    <h2>{props.Cat}</h2>
                </div>
            </Modal>

        </div>
    )
}

export default Catfacts
