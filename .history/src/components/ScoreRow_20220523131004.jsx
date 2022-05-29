import React from "react";

const checkTitle = (rank, name, score, title ) => {
    // Check if row is title row or not
    if (title === 'true'){
        return (
            <React.Fragment>
            <div className="title cell rank">{rank}</div>
            <div className="title cell name">{name}</div>
            <div className="title cell score">{score}</div>
            </React.Fragment>
        )
    }
    else{
        // Check if row is score row or not
        return (
            <React.Fragment>
            <div className="cell rank">{rank}</div>
            <div className="cell name">{name}</div>
            <div className="cell score">{score}</div>
            </React.Fragment>
        )
    }
    
}

const ScoreRow = ({ rank, name, score, title }) => {
  //console.log("#" + rank + " Score Row - Rendered");

  return (
    checkTitle(rank, name, score, title )
  );
};

export default ScoreRow;
