import React, { Component } from "react";
import CustomButton from "../components/CustomButton";
import ScoreTable from "../components/ScoreTable";

class Leaderboard extends Component {
  state = {};

  render() {
    return (
      <main id="leaderboard-page">
          <div id="leaderboard-title" className="sub-title">Leaderboard</div>
          <ScoreTable
      </main>
    );
  }
}

export default Leaderboard;
