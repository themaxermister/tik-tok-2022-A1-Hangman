import React from 'react';

const getButtonType = type => {
    if (type === "pri"){
        return "btn btn-primary btn-sm";
    }
    else if (type === "sec"){
        return "btn btn-secondary btn-lg";
    }
}

export default CustomButton = ({type, text})  => {
    console.log("CustomButton - Rendered");
    
    return (
       <button
        className={ getButtonType(type) }
       >
           { text }
       </button>
    );
}
