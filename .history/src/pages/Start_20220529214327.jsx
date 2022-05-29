import React, { Component } from "react";
import $ from 'jquery';
import CustomButton from "../components/CustomButton";

class Start extends Component {
  render() {
    return (

$("#play-button").on('click', function(){
  console.log("Hi");
})
      <main id="start-page">
          <div id="start-title">Hangman</div>
          <div id="button-row" className="hrow">
            <CustomButton id="play-button" type="pri" text="Play" />
            <CustomButton id="leaderboard-button" type="sec" text="Leaderboards" />
          </div>
      </main>
    );
  }
}

export default Start;
