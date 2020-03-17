import React, { Component } from 'react';

// Code Keypad Component Here
class Keypad extends Component {
    printMessage = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password" onKeyUp={this.printMessage}/>
        )
    }
}

export default Keypad
