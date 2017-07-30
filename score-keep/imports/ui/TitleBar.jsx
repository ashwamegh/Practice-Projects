import React from 'react';
import PropTypes from 'prop-types';

class TitleBar extends React.Component{
  render(){
    return(
      <div>
        <h1>{ this.props.title }</h1>
        {this.props.subTitle?<h2>{ this.props.subTitle }</h2>:undefined}
      </div>
    );
  }
}

TitleBar.propTypes ={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

export default TitleBar;
