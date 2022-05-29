import React, { Component } from "react";
import './css/App.css';
import './css/misc.css';
import Start from "./pages/Start";
import Leaderboard from "./pages/Leaderboard";

class App extends Component {
  render(){
    return (
      <Leaderboard />
    );
  }
}

export default App;
