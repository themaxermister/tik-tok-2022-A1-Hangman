import React, { Component } from "react";
import CustomButton from "../components/CustomButton";
import ScoreTable from "../components/ScoreTable";

class Leaderboard extends Component {
    render() {
    const { rankScore } = this.props; // Saved state of score data

    return (
      <main id="leaderboard-page">
          <div id="back-button-container">
          BackButton
          </div>
          <div id="leaderboard-title" className="sub-title">Leaderboard</div>
          <ScoreTable key="1" rankScore={rankScore} tableName="leaderboard-table" />
      </main>
    );
  }
}

export default Leaderboard;
