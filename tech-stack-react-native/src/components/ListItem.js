// ===================  Imports ======================= //
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "./../actions";

// Component Declaration

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.renderDescription = this.renderDescription.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { expanded, library } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { library, selectLibrary } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(library.id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{library.title}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  return {
    expanded: state.selectedLibraryId === ownProps.library.id
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
