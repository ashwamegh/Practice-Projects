//  Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button } from "./common";

import { emailChanged, passwordChanged } from "./../actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(email) {
    const { emailChanged } = this.props;

    emailChanged(email);
  }

  onPasswordChange(password) {
    const { passwordChanged } = this.props;
    passwordChanged(password);
  }

  render() {
    const { email } = this.props;

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
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emailChanged: email => dispatch(emailChanged(email)),
    passwordChanged: password => dispatch(passwordChanged(password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
