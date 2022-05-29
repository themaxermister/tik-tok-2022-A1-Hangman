import React from "react";
import '../css/App.css';

const CustomButton = ({type, text})  => {
    console.log("CustomButton - Rendered");
    console.log({type});
    
    return (
       <button
        className={ getButtonType(type) }
       >
           { text }
       </button>
    );
}


export default CustomButton;