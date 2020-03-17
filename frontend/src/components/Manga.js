import React, { useState } from 'react';
import Modal from 'react-modal';
import NeonManga from '../images/neonManga.jpg'


const Manga = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className="buttons" onClick={() => setModalIsOpen(true)}>Manga</button>
            <Modal isOpen={modalIsOpen} className="modal">
                <div className='mangapic'>
                    <img src={NeonManga} alt="Neon lights"/>
                </div>
                <div className="manga">
                    <h2>{props.Manga}</h2>
                </div>
                 
            </Modal>
        </div>
    )
}

export default Manga
