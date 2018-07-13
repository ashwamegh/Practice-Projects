import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./src/reducers";
import { Header } from "./src/components/common";
import LibraryList from "./src/components/LibraryList";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText={"Tech Stack"} />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
