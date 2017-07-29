import React, { Component} from 'react';

export default AddPlayer = (props) => (
      <div>
        <form onSubmit={props.onSubmit}>
          <input type="text" name="player"/>
          <button type="submit">Add Player</button>
        </form>
      </div>
    );
