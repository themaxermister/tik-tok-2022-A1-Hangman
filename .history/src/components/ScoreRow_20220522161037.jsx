import React from "react";

const ScoreRow = ({rank, name, score})  => {
    console.log(rank, " Score Row - Rendered");
    
    return (
       <React.Fragment>
           <div className="rank">{rank}</div>
           <div className="name">{name}</div>
           <div className="score">{score}</div>
       </React.Fragment>
    );
}


export default ScoreRow;