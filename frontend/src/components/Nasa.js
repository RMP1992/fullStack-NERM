import React, { useState } from 'react';
import Modal from 'react-modal';

const Nasa = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className="buttons" onClick={() => setModalIsOpen(true)}>Nasa</button>
            <Modal isOpen={modalIsOpen} className="nasa-modal">
                <div className="nasapic">
                    <img src={props.Nasa} alt="nasa"/>
                </div>
            </Modal>
            
        </div>
    )
}

export default Nasa
