import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ({tableName}) => {
  console.log(tableName , "- Rendered");

  return (
    <div id={tableName}>
      <ScoreRow rank="Rank" name_text="Name" score_text="Score" />
      <ScoreRow rank_text="1" name_text="John" score_text="10" />
    </div>
  );
};

export default ScoreTable;
