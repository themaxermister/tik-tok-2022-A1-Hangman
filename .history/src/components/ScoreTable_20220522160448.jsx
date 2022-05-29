import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ()  => {
    console.log("Scorerow - Rendered");
    
    return (
       <React.Component>
           <ScoreRow rank_text='Rank' name_text='Name' score_text='Score' />
           <ScoreRow rank_text={rank} name_text={name} score_text={score} />
       </React.Component>
    );
}


export default ScoreTable;