import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ({ tableName, rankScore }) => {
  //console.log(tableName, "- Rendered");

  return (
    <div id={tableName}>
      <div className="grid-container">
        <ScoreRow rank="Rank" name="Name" score="Score" title='true' />
        {rankScore.map((scoreRow) => (
          <ScoreRow rank=scoreRow.rank name="John" score="10" title='false' />
        ))}
      </div>
    </div>
  );
};

export default ScoreTable;
