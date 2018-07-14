// ===================  Imports ======================= //
import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from './../actions';


// Component Declaration

class ListIten extends Component{
  render(){
    const  { library } = this.props;
    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>
          { library.title }
        </Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect(null, actions)(ListIten);