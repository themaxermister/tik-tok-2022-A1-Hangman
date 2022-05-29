import React from "react";

const ScoreRow = ({rank, name, score})  => {
    console.log("Scorerow - Rendered");
    
    return (
       <React.Fragment>
           <div className="rank"></div>
           <div className="name"></div>
           <div className="score"></div>
       </React.Fragment>
    );
}


export default ScoreRow;