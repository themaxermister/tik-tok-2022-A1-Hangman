<<<<<<< HEAD
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
      {rank: 3, name:'Charles', score: 10},
      {rank: 4, name:'', score: 0},
      {rank: 5, name:'', score: 0}
    ]
  };
  render(){
    return (
      //<Leaderboard rankScore={this.state.rank_score} />
      <Start />
    );
  }
export default App;
