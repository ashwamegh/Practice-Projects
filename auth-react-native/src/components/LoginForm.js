// ====================== Global imports ================== //
import React, { Component } from "react";
import { TextInput } from "react-native";
import { Button, Card, CardSection, Input } from "./common";

// ================== Component Decalration ============== //

class LoginForm extends Component {
  state = {
    email: "",
    password: ''
  };

  render() {
    const { email, password } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            label={"Email"}
            value={email}
            onChangeText={email => this.setState({ email })}
            placeholder={"user@gmail.com"}
          />
        </CardSection>
        <CardSection>
          <Input
            value={password}
            secureTextEntry
            label={"Password"}
            placeholder={"password"}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>{"Log In"}</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
