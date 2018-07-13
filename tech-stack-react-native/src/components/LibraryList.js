// ===================  Imports ======================= //
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Card } from "./common";

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return <Card />;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(
  mapStateToProps,
  null
)(LibraryList);
