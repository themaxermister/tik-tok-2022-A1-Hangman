import React from "react";

const ScoreRow = ({ rank, name, score }) => {
  console.log("#" + rank + " Score Row - Rendered");

  return (
    <React.Fragment>
        <div className="cell rank">{rank}</div>
        <div className="cell name">{name}</div>
        <div className="cell score">{score}</div>
    </React.Fragment>
  );
};

export default ScoreRow;
