import React, { Component } from "react";
import BackButton from "../components/BackButton";
import CustomButton from "../components/CustomButton";
import ScoreTable from "../components/ScoreTable";

class Leaderboard extends Component {
    render() {
    const { rankScore } = this.props; // Saved state of score data

    return (
      <main id="leaderboard-page">
          <div id="back-button-container">
            <BackButton key="1" id="back-button"/>
          </div>
          <div id="leaderboard-title" className="sub-title">Leaderboard</div>
          <ScoreTable key="1" rankScore={rankScore} tableName="leaderboard-table" />
      </main>
    );
  }
}

export default Leaderboard;
