import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

const Login = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        
        <div>
            <button className="buttons" onClick={() => setModalIsOpen(true)}>Log in</button>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <div>
                    <form action="/login" method="POST">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email"/>
                        <br/>
                        <label htmlFor="password">Password: </label>
                        <input type="text" name="password"/>
                        <br/>
                        <input type="submit" value="send" id="submit"/>
                    </form>
                </div>
                
            </Modal>
        </div>
        
    )
}

export default Login
