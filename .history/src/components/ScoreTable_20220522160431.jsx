import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ({rank, name, score})  => {
    console.log("Scorerow - Rendered");
    
    return (
       <React.Component>
           <ScoreRow rank_text={rank} name_text={name} score_text={score} />
           <ScoreRow rank_text={rank} name_text={name} score_text={score} />
       </React.Component>
    );
}


export default ScoreTable;