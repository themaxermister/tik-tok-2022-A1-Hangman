import React, { Component } from 'react';

const CustomButton = (text) => {
    console.log(text, "- Rendered");
    return (
        <button
        
        >
            { text }
        </button>
    )
}
 
export default CustomButton;