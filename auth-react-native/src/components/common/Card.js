// ===================  Imports ======================= //
import React, { Component } from 'react';
import { View } from 'react-native';


const Card = (props) => (
    <View style={styles.containerStyle} >
    { props.children }
    </View>
  );


const styles = { 
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10
  }
};


export  {Card};
