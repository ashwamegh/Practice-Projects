// ===================  Imports ======================= //
import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {

  constructor(props){
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    const { libraries } = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.datasource = ds.cloneWithRows(libraries);
  }

  renderRow(library) {
    
    return <ListItem library={library}/>;
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
