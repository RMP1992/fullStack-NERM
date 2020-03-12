import React from 'react'

const Quotes = (props) => {
    return (
        <div>
            <button className= "buttons" onClick={props.func}>Famous Quotes</button>
        </div>
    )
}

export default Quotes
