import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
  state = {
    loggedIn: false
  };

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCcZmq_YvT0IYOc8b9aXjq1h_MWy-xm4l0",
      authDomain: "auth-react-native-1a790.firebaseapp.com",
      databaseURL: "https://auth-react-native-1a790.firebaseio.com",
      projectId: "auth-react-native-1a790",
      storageBucket: "auth-react-native-1a790.appspot.com",
      messagingSenderId: "68918987705"
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderContent() {
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case true:
        return <Button>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size={"large"} />;
    }

    if (loggedIn) {
      return;
    }

    return;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
