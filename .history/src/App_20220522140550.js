import React, { Component } from "react";
import CustomButton from "./components/CustomButton"
import './App.css';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <CustomButton type="primary" text="Play"/>
      </React.Fragment>
    );
  }
}

export default App;
