import React, { Component } from "react";
import './css/App.css';
import './css/misc.css';
import Start from "./pages/Start";
import Leaderboard from "./pages/Leaderboard";

class App extends Component {
  state = {
    rank_score : [
      {rank: 1, name:'John', score: 10},
      {rank: 2, name:'Mary', score: 10},
      {rank: 3, name:'John', score: 10},
      {rank: 4, name:'', score: },
      {rank: 5, name:'', score: 0},
    ]
  };
  render(){
    return (
      <Leaderboard />
    );
  }
}

export default App;
