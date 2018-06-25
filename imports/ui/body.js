import { Template } from 'meteor/templating';
 
import { gfevents } from '../api/gfevents';
 
import './body.html';
 
Template.body.helpers({
  gfevents() {
    return gfevents.find({"startDate":{ $regex: /^2018-07-14/}});
  },
});