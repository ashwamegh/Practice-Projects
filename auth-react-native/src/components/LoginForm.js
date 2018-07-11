// ====================== Global imports ================== //
import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input  } from './common';


// ================== Component Decalration ============== //

class LoginForm extends Component {
  state = {
    email: ''
  }

  render() {
    const { email } = this.state;

    return (
      <Card>
        <CardSection>
          <Input label="Email" value={email} onChangeText={ email => this.setState({email})} />
        </CardSection>
        <CardSection>
        <Input value={email} onChangeText={ email => this.setState({email})} />
        </CardSection>
        <CardSection>
          <Button>
            {'Log In'}
          </Button>
        </CardSection>
      </Card>
    );
  }
}


export default LoginForm;
