import React from 'react';


const CustomButton = ({type, text})  => {
    console.log("CustomButton - Rendered");

    this.getButtonType = ({type}) => {
        if (type === "pri"){
            return "btn btn-primary btn-sm";
        }
        else if (type === "sec"){
            return "btn btn-secondary btn-lg";
        }
        return null;
    }
    
    return (
       <button
        className={ getButtonType(type) }
       >
           { text }
       </button>
    );
}


export default CustomButton;