import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Players} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(function() {
    let players = Players.find({},{ sort: { score: -1} }).fetch();
    let title = "Score Keep";
    let subTitle = "Created by Shashank Shekhar";

    ReactDOM.render(
      <App
        title={ title}
        players={ players }
        subTitle={ subTitle }/>, document.getElementById('app'));
  });

});
