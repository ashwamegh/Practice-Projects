// ====================== Global imports ================== //
import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

// ================= Component Declaration ================ //

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  const {
    label, onchangeText, value,
  } = props;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>

      <TextInput style={inputStyle} onchangeText={onchangeText} value={value} />
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 20,
    width: 100,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 2,
    lineHeight: 23,
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };
