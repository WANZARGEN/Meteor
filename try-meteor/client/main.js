import Vue from 'vue';
import App from './App.vue';
import VueMeteorTracker from 'vue-meteor-tracker';   // here!
Vue.use(VueMeteorTracker);                           // here!
import './main.html';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});

