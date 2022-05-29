import React from "react";

const ScoreRow = ({type, text})  => {
    console.log("Scorerow - Rendered");
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