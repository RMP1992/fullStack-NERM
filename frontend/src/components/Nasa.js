import React, { useState } from 'react';
import Modal from 'react-modal';

const Nasa = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className="buttons" onClick={() => setModalIsOpen(true)}>Nasa</button>
            <Modal isOpen={modalIsOpen}>
                <img src={props.Nasa} alt="nasa"/>
            </Modal>
            
        </div>
    )
}

export default Nasa
