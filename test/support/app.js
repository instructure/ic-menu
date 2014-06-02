App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true
});
App.setupForTesting();
App.injectTestHelpers();

Ember.Component.reopen({
  attributeBindings: ['style']
});

App.ApplicationController = Ember.Controller.extend({
  useFirst: true,
  actions: {
    alert: function(item) {
      alert(item.$().text());
    },
    disabled: function(item) {
      alert('disabled');
    }
  }
});


App.XSpacerComponent = Ember.Component.extend({
  tagName: 'div',
  style: 'height: 1px; background: grey'
});
