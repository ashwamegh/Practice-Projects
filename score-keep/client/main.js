import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const handleSubmit = (event) => {
  event.preventDefault();

  let playerName = event.target.player.value;

  if (playerName) {
    event.target.player.value = '';

    Players.insert({name: playerName, score: 0});

  }
};

Meteor.startup(() => {
  Tracker.autorun(function() {
    let players = Players.find({}).fetch();

    let jsx = (
      <div>
        <TitleBar />
          {players.map((player) => <p key={player._id}>
            {player.name} have scored {player.score} point(s).
            <button onClick={() => player.score === 0
              ? alert("You are at your lowest Score, Shame on You!")
              : Players.update(player._id, {
                $inc: {
                  score: -1
                }
              })}>-1</button>
            <button onClick={() => Players.update(player._id, {
              $inc: {
                score: 1
              }
            })}>+1</button>
            <button onClick={() => Players.remove(player._id)}>X</button>
          </p>)}

        <AddPlayer onSubmit={handleSubmit}/>

      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });

});
