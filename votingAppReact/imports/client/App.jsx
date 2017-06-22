import React from 'react'
import { render } from 'react-dom'

class App extends React.Component{
  
  headingClick = () => {
    console.log(`Hello Devil||${name}!`);
  }
  render(){
    let name = prompt("What is your good name?");
    return (<h1 onClick={ this.headingClick }> Hello { name } </h1>)
  }
}

export default App;