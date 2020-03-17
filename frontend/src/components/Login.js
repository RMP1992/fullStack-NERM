import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

const Login = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        
        <div>
            <button className="buttons" onClick={() => setModalIsOpen(true)}><a>Log in</a></button>
            <Modal isOpen={modalIsOpen}>
                <div>
                    {/* <form action="/login" method="POST"> */}
                        <label for="email">Email: </label>
                        <input type="text" name="email"/>
                        <br/>
                        <label for="password">Password: </label>
                        <input type="text" name="password"/>
                        <br/>
                        <input type="submit" value="send" id="submit"/>
                    {/* </form> */}
                </div>
                
            </Modal>
        </div>
        
    )
}

export default Login
