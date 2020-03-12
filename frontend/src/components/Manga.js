import React from 'react'

const Manga = (props) => {
    return (
        <div>
            <button className="buttons" onClick={props.func}>Manga</button>
        </div>
    )
}

export default Manga
