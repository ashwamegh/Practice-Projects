import React,{ Component } from 'react';
// connect is a function which acts as a glue to react and redux libraries.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

// classes can't be exported as default
class BookList extends Component{

  renderList() {
    return this.props.books.map((book) =>{
    return (
      <li
        onClick={ () => this.props.selectBook(book) }
        key={ book.title }
        className="list-group-item">
        { book.title }
      </li>
    );
  });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state){
  // The value/state returned from here
  // is passed to the BookList component as
  // props.

  return {
    books:state.books
  }
}

// Anything returned from this function will be
// passed as props to BookList container
function mapDispatchToProps(dispatch){
  // Whenever the selectBook is called , the result will be passed
  // to all reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// We'll use connect function to define a container now with
// first argument as a function and second a react component.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// Propmote BookList as a container from component - it need to know about
// this new dispatch method , selectBook. Make it available as
// prop
