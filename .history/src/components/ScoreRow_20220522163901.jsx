import React from "react";

const checkTitle = title => {
    return (
        <React.Fragment>
        <div className="cell rank">{rank}</div>
        <div className="cell name">{name}</div>
        <div className="cell score">{score}</div>
        </React.Fragment>
    )
}

const ScoreRow = ({ rank, name, score, title }) => {
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
