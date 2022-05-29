import React, { Component } from "react";
import CustomButton from "../components/CustomButton";

class Start extends Component {
  state = {};

  render() {
    return (
      <main id="start-page">
          <div id="start-title">Hangman</div>
          <React.Component>
          <div id="button-row" className="row">
            <CustomButton type="pri" text="Play" />
            <CustomButton type="sec" text="Leaderboards" />
          </div>
          </React.Component>
      </main>
    );
  }
}

export default Start;
