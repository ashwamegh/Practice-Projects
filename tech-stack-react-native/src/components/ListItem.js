// ===================  Imports ======================= //
import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "./../actions";

// Component Declaration

class ListIten extends Component {

  constructor(props){
    super(props);

    this.renderDescription = this.renderDescription.bind(this);
  }

  renderDescription(){
    const { library, selectedLibraryId } = this.props;
    if(library.id === selectedLibraryId){
      return (
        <Text>
          { library.description }
        </Text>
      )
    }
  }

  render() {
    const { library, selectLibrary } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={ () => selectLibrary(library.id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{library.title}</Text>
          </CardSection>
        { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(
  null,
  actions
)(ListIten);
