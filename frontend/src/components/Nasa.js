import React from 'react'

const Buttons = (props) => {
    return (
        <div>
            <button className="buttons" onClick={props.func}>Nasa</button>
            {/* {this.state.showAPI === true ?
                <div>
                    <img src={this.state.apiNasa} alt="nasa" />
                </div> : null
            } */}
        </div>
    )
}

export default Buttons
