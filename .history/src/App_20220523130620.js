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
=======
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
    </div>
  );
>>>>>>> dc13f097669dfd9999d5a854cb468b25054b6280
}

export default App;
