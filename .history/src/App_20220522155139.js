import React, { Component } from "react";
import './css/App.css';
import './css/misc.css';
import Leaderboard from "./pages/Leaderboard";
import Start from "./pages/Start";

class App extends Component {
  render(){
    return (
      <Leaderboard />
    );
  }
}

export default App;
