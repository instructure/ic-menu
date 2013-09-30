import Ember from 'ember';
import templates from './app-templates';

var App = window.App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true
});

Ember.Component.reopen({
  attributeBindings: ['style']
});

import IcMenu from 'ic-menu';
import addonTemplates from 'ic-menu/templates';
App.reopen(IcMenu);

App.ApplicationController = Ember.Controller.extend({
  actions: {
    alert: function(item) {
      alert(item.$().text());
    }
  }
});

App.setupForTesting();
App.injectTestHelpers();

export default App;

