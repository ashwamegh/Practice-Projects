//  Imports
import React, { Component } from "react";
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from "./common";

import actions from './../actions';

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(email){
    const { emailChanged }  = this.props;

    emailChanged(email);
  }

  onPasswordChange(password){
    console.log(password);
  }

  render() {

    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="user@gmail.com" onChangeText={this.onEmailChange} />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" onChangeText={this.onPasswordChange} />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, actions)(LoginForm);
