import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players';

import App from './../imports/ui/App';

const handleSubmit = (event)=>{
  event.preventDefault();

  let playerName = event.target.player.value;

  if(playerName){
    event.target.player.value = '';

    Players.insert({
      name: playerName,
      score: 0
    });
    
  }
};

Meteor.startup(() =>{
  Tracker.autorun(function(){
    let players = Players.find({}).fetch();

    let jsx = (
      <div>
        <App />
        <form onSubmit={ handleSubmit }>
          <input type="text" name="player"/>
          <button type="submit">Add Player</button>
        </form>
        { players.map((player) => <p key={player._id}>{player.name} have scored {player.score} point(s).</p>) }
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });

});
