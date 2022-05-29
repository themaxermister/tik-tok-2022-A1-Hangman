import React, { Component } from 'react';

getButtonType = ({select}) => {
    if (select === "pri"){
        return "btn btn-primary btn-sm";
    }
    else if (select === "sec"){
        return "btn btn-secondary btn-lg";
    }
    return null;
}

class CustomButton extends Component {
    state = {  } 
    render() { 
        return ();
    }
}
 
export default CustomButton;

class CustomButton = ({type}, {text}) => {
    console.log(text, "- Rendered");
    return (
        <button
            type="button"
            className={this.getButtonType({type})}
        >
            { text }
        </button>
    )
}
 
export default CustomButton;