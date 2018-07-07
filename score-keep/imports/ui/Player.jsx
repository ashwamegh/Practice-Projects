import React, { Component} from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default Player = (props) =>{
  let player = props.player;
  return(
    <p>
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
    </p>
  );
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
