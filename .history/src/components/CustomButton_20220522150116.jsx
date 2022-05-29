import React from 'react';

const getButtonType = (type) => {
    if (type === "pri"){
        return "btn btn-primary btn-sm";
    }
    else if (type === "sec"){
        return "btn btn-secondary btn-lg";
    }
    return "none";
}

const CustomButton = ({type, text})  => {
    console.log("CustomButton - Rendered");
    
    return (
        console.log({type});
        
       <button
        className={ getButtonType(type) }
       >
           { text }
       </button>
    );
}


export default CustomButton;