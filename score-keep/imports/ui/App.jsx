import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';


export default class App extends Component {

  render(){
    const { title, players, subTitle } = this.props;
    return(
      <div>
        <TitleBar title={title}/>
        <PlayerList players={ players } />
        <AddPlayer />
      </div>
    );
  }
}

App.propTypes ={
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
  subTitle: PropTypes.string
}
