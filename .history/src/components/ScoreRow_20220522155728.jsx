import React from "react";
import '../css/App.css';

const ScoreRow = ({type, text})  => {
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


export default ScoreRow;