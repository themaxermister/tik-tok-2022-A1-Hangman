import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ({ tableName, rankScore }) => {
  //console.log(tableName, "- Rendered");

  return (
    <div id={tableName}>
      <div className="grid-container">
        <ScoreRow rank="Rank" name="Name" score="Score" title='true' />
        {rankScore.map((scoreRow) => (
          scoreRow.name.length !=== 0 return <ScoreRow rank={scoreRow.rank} name={scoreRow.name}score="10" title={scoreRow.title}/>;
        ))}
      </div>
    </div>
  );
};

export default ScoreTable;
