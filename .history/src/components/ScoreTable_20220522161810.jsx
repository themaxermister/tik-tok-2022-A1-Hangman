import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ({tableName}) => {
  console.log(tableName , "- Rendered");

  return (
    <div id={tableName}>
      <ScoreRow rank="Rank" name="Name" score="Score" />
      <ScoreRow rank="1" name="John" score="10" />
    </ul>
  );
};

export default ScoreTable;
