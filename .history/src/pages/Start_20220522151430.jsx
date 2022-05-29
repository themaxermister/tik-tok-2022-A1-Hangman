import React, { Component } from "react";
import CustomButton from "../components/CustomButton";

class Start extends Component {
  state = {};
  render() {
    return (
      <main id="start-page">
        <React.Fragment>
          <h2>Hangman</h2>
          <CustomButton type="pri" text="Play" />
          <CustomButton type="sec" text="Leaderboards" />
        </React.Fragment>
      </main>
    );
  }
}

export default Start;
