// ====================== Global imports ================== //
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Button, Card, CardSection, Input,
} from './common';

// ================== Component Decalration ============== //

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(loginReponse => console.log(loginReponse))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(signupResponse => console.log(signupResponse))
          .catch(() => this.setState({ error: 'Authentication Failed' }));
      });
  }

  render() {
    const { email, password, error } = this.state;
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            value={password}
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={errorTextStyle}>
          {error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            {'Log In'}
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20,
  },
};

export default LoginForm;
