// ===================  Imports ======================= //
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Card } from "./common";

class LibraryList extends Component {
  render() {
    return <Card />;
  }
}

const mapStateToProps = state => {
  return { library: state.library };
};

export default connect(
  mapStateToProps,
  null
)(LibraryList);
