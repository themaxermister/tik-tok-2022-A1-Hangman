import React, { Component } from 'react';

const CustomButton = ({type}, {text})  => {
    console.log("CustomButton - Rendered");
    getButtonType = ({select}) => {
        if (select === "pri"){
            return "btn btn-primary btn-sm";
        }
        else if (select === "sec"){
            return "btn btn-secondary btn-lg";
        }
        return null;
    }
    
    return (
       <button
       >

       </button>
    );
}


export default CustomButton;