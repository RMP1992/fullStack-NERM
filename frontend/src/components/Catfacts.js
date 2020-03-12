import React, { useState } from 'react';
import Modal from 'react-modal';


const Catfacts = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>

            

        <button className="buttons" onClick={() => setModalIsOpen(true)}>Catfacts</button>
        <Modal isOpen={modalIsOpen}>
        {/* {props.func}  */}
            <h2>modal is open</h2>
            {this.state.showCatfacts === true ?
            <div>
                <p>{this.state.apiCatfacts}</p>
            </div> : null
            } 
        </Modal>

        </div>
    )
}

export default Catfacts
