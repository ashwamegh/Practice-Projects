import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players';

import App from './../imports/ui/App';

Meteor.startup(() =>{
  Tracker.autorun(function(){
    let players = Players.find({}).fetch();

    let jsx = (
      <div>
        <App />
        { players.map((player) => <p key={player._id}>{player.name} have scored {player.score} point(s).</p>) }
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });

  let playerName = prompt("Enter the Player name");
  let playerPoints = prompt("Enter the player score.");
  playerName!==null && playerPoints!==null? Players.insert({name: playerName, score: playerPoints}):alert("Both fields are required");
  console.log(Players.find({name: playerName}).fetch());

});
