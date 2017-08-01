import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
    'tasks.insert'(text){
        check(text,String);

        // Checking User Login
        if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }
        Tasks.insert({
            text,
            createdAt: new Date(),
            username: Meteor.user().username,
            owner: Meteor.userId
        });
    },

    'tasks.remove'(taskId){
        check(taskId, String);

        Tasks.remove(taskId);
    },

    'tasks.setChecked'(taskId, setChecked){
        check(taskId, String);
        check(setChecked, Boolean);

        Tasks.update(taskId, { $set: { checked: setChecked } } );
    }
});