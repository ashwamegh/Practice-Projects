//  Creating a Component to start with
import React from 'react';
import ReactDOM from 'react-dom';

const App = function(){
    return <div>Hie, there!</div>;
}

// Putting the creating component on the page ( in the DOM )

ReactDOM.render(<App />, document.getElementById('container'));

