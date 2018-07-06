//  Imports
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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

    return albums.map((album) => <Text>{album.title}</Text>);
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
