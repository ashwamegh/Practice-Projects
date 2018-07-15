import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from 'firebase';

import reducers from './src/reducers';

export default class App extends Component {
  
  componentWillMount(){
    const  config = {
      apiKey: "AIzaSyBQ96RqE44YeMkSL8kHrjP_ynK8eh4E8JQ",
      authDomain: "manager-react-native-78193.firebaseapp.com",
      databaseURL: "https://manager-react-native-78193.firebaseio.com",
      projectId: "manager-react-native-78193",
      storageBucket: "",
      messagingSenderId: "755390051433"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
