/*  Global Imports  */
import { Meteor } from 'meteor/meteor'

/*  Local Imports  */
import { Players } from './../imports/api/players'


Meteor.startup(function(){
  Players.insert({
    name : "Shashank",
    score: 3
  });
  Players.insert({
    name : "Ehtesham",
    score: 55
  });

console.log(Players.find().fetch());
});
