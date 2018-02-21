import React from "react";
import { StyleSheet, Text, View, Platform, Button, NativeModules } from "react-native";
import { Torch } from NativeModules;

export default class App extends React.Component {
  torchHandler() {
    // if (Platform.OS === "ios") {
    //   Torch.switchState(this.isTorchOn);
    // } else {
    //   const cameraAllowed = await Torch.requestCameraPermission(
    //     'Camera Permissions', // dialog title
    //     'We require camera permissions to use the torch on the back of your phone.' // dialog body
    //   );

    //   if (cameraAllowed) {
    //     Torch.switchState(this.isTorchOn);
    //   }
    // }
    Torch.setTorch(true); // Turn ON
// Torch.switchState(false);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={this.torchHandler}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
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
