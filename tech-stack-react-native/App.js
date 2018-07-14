import React from "react";
import { View, UIManager, Platform } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./src/reducers";
import { Header } from "./src/components/common";
import LibraryList from "./src/components/LibraryList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText={"Tech Stack"} />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
