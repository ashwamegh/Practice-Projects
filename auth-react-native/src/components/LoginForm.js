// ====================== Global imports ================== //
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';


// ================== Component Decalration ============== //

class LoginForm extends Component {
  render() {
    const { emailInputStyle } = styles;

    return (
      <Card>
        <CardSection>
          <TextInput style={emailInputStyle} />
        </CardSection>
        <CardSection>
          <TextInput style={emailInputStyle} />
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

const styles = {
  emailInputStyle: {
    height: 20,
    width: '100%',
  },
};

export default LoginForm;
