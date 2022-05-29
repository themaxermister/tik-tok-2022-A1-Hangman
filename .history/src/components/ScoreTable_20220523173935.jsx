import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ({ tableName, rankScore }) => {
  //console.log(tableName, "- Rendered");

  return (
    <div id={tableName}>
      <div className="grid-container">
        <ScoreRow rank="Rank" name="Name" score="Score" title='true' />
        { rankScore.map(function(scoreRow) { 
          if (scoreRow.name.length > 0)
            return <ScoreRow key={rankScore.indexOf(scoreRow)} rank={scoreRow.rank} name={scoreRow.name}score="10" title={scoreRow.title}/>; 
          return null;
        })};
      </div>
    </div>
  );
};

export default ScoreTable;
