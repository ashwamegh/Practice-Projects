import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCcZmq_YvT0IYOc8b9aXjq1h_MWy-xm4l0',
      authDomain: 'auth-react-native-1a790.firebaseapp.com',
      databaseURL: 'https://auth-react-native-1a790.firebaseio.com',
      projectId: 'auth-react-native-1a790',
      storageBucket: 'auth-react-native-1a790.appspot.com',
      messagingSenderId: '68918987705',
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>
Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
}
