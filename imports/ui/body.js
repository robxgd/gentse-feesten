import { Template } from 'meteor/templating';
 
import { gfevents } from '../api/gfevents';

import { ReactiveVar } from 'meteor/reactive-var'


 
import './body.html';
 
Template.body.onCreated(function(){
    this.selectedDate = new ReactiveVar("13"); 
});

Template.body.helpers({

    gfevents() { 
        var re = '/^2018-07-'+Template.instance().selectedDate.get()+'/';
        return gfevents.find({"startDate":{ $regex: eval(re)}});
    },
});

Template.body.events({
    'change .date-radio': function(event, template){
        template.selectedDate.set(event.target.value);
    }
}); 