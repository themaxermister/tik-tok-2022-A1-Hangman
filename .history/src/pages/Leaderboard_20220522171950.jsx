import React, { Component } from "react";
import CustomButton from "../components/CustomButton";
import ScoreTable from "../components/ScoreTable";

class Leaderboard extends Component {
    render() {
    const { rank_score } = this.props;
    console.log(rank_score);

    return (
      <main id="leaderboard-page">
          <div id="leaderboard-title" className="sub-title">Leaderboard</div>
          <ScoreTable tableName="leaderboard-table" />
          <div id="back-button-container">
            <CustomButton id="back-button" type="pri" text="Back to Main Menu" />
          </div>
      </main>
    );
  }
}

export default Leaderboard;
