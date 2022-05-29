import React, { Component } from "react";
import './css/App.css';
import './css/misc.css';
import Start from "./pages/Start";
import Leaderboard from "./pages/Leaderboard";

class App extends Component {
  state = {
    rank_score : [
      {rank: 1},
      {},
      {},
      {},
      {}
    ]
  };
  render(){
    return (
      <Leaderboard />
    );
  }
}

export default App;
