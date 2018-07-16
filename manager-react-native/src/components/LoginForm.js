//  Imports
import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component {

  constructor(props){
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(email){
    console.log(email);
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

export default LoginForm;
