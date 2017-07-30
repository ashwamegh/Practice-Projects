import React, { Component} from 'react';
import {Players} from './../api/players';

const handleSubmit = (event) => {
  event.preventDefault();

  let playerName = event.target.player.value;

  if (playerName) {
    event.target.player.value = '';

    Players.insert({name: playerName, score: 0});

  }
};

export default AddPlayer = () => (
      <div>
        <form onSubmit={ handleSubmit }>
          <input type="text" name="player"/>
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
