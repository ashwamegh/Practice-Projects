//  Imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Component Imports
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = {
    albums: []
  }

  /**
   * Lifecylce method, when the component will be mounted
   */
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => {
      this.setState({ albums: response.data });
    });
  }

  /**
   * Method to render the albums list using simple album list
   */
  renderAlbums() {
    const { albums } = this.state;

    return albums.map((album) => <AlbumDetail album={album} key={album.title} />);
  }
  

  /**
   * Renders UI for this component
   */
  render() {
    return (
      <View>
      { this.renderAlbums() }
    </View>
    );
  }
}

export default AlbumList
;
