import React from "react";
import ScoreRow from "./ScoreRow";

const ScoreTable = ()  => {
    console.log("Scorerow - Rendered");
    
    return (
       <React.Component>
           <ScoreRow rank_text='Rank' name_text='Name' score_text='Score' />
           <ScoreRow rank_text={rank} name_text='John' score_text=10 />
       </React.Component>
    );
}


export default ScoreTable;