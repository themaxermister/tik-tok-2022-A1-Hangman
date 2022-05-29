import React from "react";

const ScoreRow = ({rank, name, score})  => {
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