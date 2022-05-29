import React, { Component } from 'react';

const CustomButton = (type, text) => {
    console.log(text, "- Rendered");
    return (
        <button

        >
            { text }
        </button>
    )
}
 
export default CustomButton;