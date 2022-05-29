import React, { Component } from "react";
import CustomButton from "./components/CustomButton"
import './App.css';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <CustomButton type="pri" text="Play"/>
        <CustomButton type="pri" text="Play"/>
      </React.Fragment>
    );
  }
}

export default App;
