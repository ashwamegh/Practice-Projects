// ===================  Imports ======================= //
import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
  componentWillMount() {
    const { libraries } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.datasource = ds.cloneWithRows(libraries);
  }

  renderRow(library) {
    const{ selectedLibraryId } = this.props;
    
    return <ListItem library={library} selectedLibraryId={selectedLibraryId} />;
  }

  render() {
    return <ListView dataSource={this.datasource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries,
    selectedLibraryId: state.selectedLibraryId
  };
};

export default connect(
  mapStateToProps,
  null
)(LibraryList);
