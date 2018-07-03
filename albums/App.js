import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, AlbumList } from './src/components/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header headerText={'Albums'} />
      <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
