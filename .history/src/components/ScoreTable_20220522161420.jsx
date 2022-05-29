import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ({tableName}) => {
  console.log(tableName , "- Rendered");

  return (
    <div id={tableName}>
      <ScoreRow rank="Rank" name="Name" score_text="Score" />
      <ScoreRow rank="1" name="John" score_text="10" />
    </div>
  );
};

export default ScoreTable;
