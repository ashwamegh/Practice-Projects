import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default PlayerList = (props) => (
  props.players.length ===0?
  <p>Add your first player to get started.</p>:
  <div>
      { props.players.map((player) => <Player key={ player._id } player={player}/>) }
  </div>
);

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
