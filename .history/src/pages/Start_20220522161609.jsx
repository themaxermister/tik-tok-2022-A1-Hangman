import React, { Component } from "react";
import CustomButton from "../components/CustomButton";

class Start extends Component {
  state = {};

  render() {
    return (
      <main id="start-page">
          <div id="start-title">Hangman</div>
          <div id="button-row" className="hrow">
            <CustomButton type="pri" text="Play" />
            <CustomButton type="sec" text="Leaderboards" />
          </div>
      </main>
    );
  }
}

export default Start;
