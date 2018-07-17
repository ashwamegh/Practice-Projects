import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import firebase from "firebase";

import reducers from "./src/reducers";
import LoginForm from "./src/components/LoginForm";
import { Header } from "./src/components/common";

export default class App extends Component {
  componentWillMount() {
    const config = {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <View>
          <Header headerText={"Manager"} />
          <LoginForm />
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
