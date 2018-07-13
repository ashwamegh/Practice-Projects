// ====================== Global imports ================== //
import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

// ================= Component Declaration ================ //

const Input = (props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  const {
    label, onChangeText, value, placeholder, secureTextEntry,
  } = props;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>

      <TextInput
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
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
