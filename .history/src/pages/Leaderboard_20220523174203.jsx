import React, { Component } from "react";
import CustomButton from "../components/CustomButton";
import ScoreTable from "../components/ScoreTable";

class Leaderboard extends Component {
    render() {
    const { rankScore } = this.props; // Saved state of score data

    return (
      <div id="back-button-container">
        <CustomButton key="1" id="back-button" type="pri" text="Back to Main Menu" />
      </div>
      <main id="leaderboard-page">
          <div id="leaderboard-title" className="sub-title">Leaderboard</div>
          <ScoreTable key="1" rankScore={rankScore} tableName="leaderboard-table" />
      </main>
    );
  }
}

export default Leaderboard;
