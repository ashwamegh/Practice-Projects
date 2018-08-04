//  Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from 'react-native'
import { Card, CardSection, Input, Button } from "./common";

import { emailChanged, passwordChanged, loginUser } from "./../actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(email) {
    const { emailChanged } = this.props;

    emailChanged(email);
  }

  onPasswordChange(password) {
    const { passwordChanged } = this.props;
    passwordChanged(password);
  }

  onButtonPress(){
    const { email, password, loginUser } = this.props;

    loginUser({email, password});
  }

  render() {
    const { email, error } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color:"#f00",
    alignSelf: 'center'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password:state.auth.password,
    error: state.auth.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emailChanged: email => dispatch(emailChanged(email)),
    passwordChanged: password => dispatch(passwordChanged(password)),
    loginUser: ({email, password})=> dispatch(loginUser({email,password}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
