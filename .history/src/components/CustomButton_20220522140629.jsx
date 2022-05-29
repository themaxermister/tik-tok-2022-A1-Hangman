import React, { Component } from 'react';

class CustomButton extends Component {
    getButtonType = ({select}) => {
        if (select === "pri"){
            return "btn btn-primary btn-sm";
        }
        else if (select === "sec"){
            return "btn btn-secondary btn-lg";
        }
        return null;
    }
    
    render() { 
        return (
            <button
                type="button"
                className={this.getButtonType({type})}
            >
                { text }
            </button>
        );
    }
}
 
export default CustomButton;

class CustomButton = ({type}, {text}) => {
    console.log(text, "- Rendered");
    
}
 
export default CustomButton;