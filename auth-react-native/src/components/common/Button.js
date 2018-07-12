// ===================  Imports ======================= //
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { textStyle, buttonStyle } = styles;
  const { onPress, children } = props;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  buttonStyle: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'stretch',
  },
};

export { Button };
