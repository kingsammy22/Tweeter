import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './main.html';
import '../lib/collection.js';
import './Personalinfo.html';
import './tweeting.html';
import './tweets.html';

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
