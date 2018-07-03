//  Imports
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {

  render() {
    const { textStyle, viewStyle } = styles;
    const { headerText } = this.props;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
      </View>
    );
  }

}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
