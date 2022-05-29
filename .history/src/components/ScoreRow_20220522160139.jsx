import React from "react";

const ScoreRow = ({rank, name, score})  => {
    console.log("Scorerow - Rendered");
    
    return (
       <React.Fragment>
           <div className="rank"></div>
           <div className="rank"></div>
       </React.Fragment>
    );
}


export default ScoreRow;