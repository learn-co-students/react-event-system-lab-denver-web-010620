import React, { Component } from 'react';

// Code EyesOnMe Component Here
class EyesOnMe extends Component {
    printFocusMessage = () => {
        console.log('Good!');
    }

    printBlurMessage = () => {
        console.log('Hey! Eyes on me!');
    }

    render() {
        return(
            <button onFocus={this.printFocusMessage} onBlur={this.printBlurMessage}></button>
        )
    }
}

export default EyesOnMe