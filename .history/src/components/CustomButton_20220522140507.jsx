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

const CustomButton = ({type}, {text}) => {
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