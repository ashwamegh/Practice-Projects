import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return <h1>Select a book to get started!</h1>
    }
    return (
      <div>
        <h1>Details For :</h1>
        <p><span>Title: </span>{ this.props.book.title }</p>
        <p><span>Pages: </span>{ this.props.book.pages }</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.activeBook
  };
};

export default connect(mapStateToProps, null)(BookDetail);
