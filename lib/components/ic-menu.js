window.ic = window.ic || {};

ic.MenuComponent = Ember.Component.extend({

  classNames: 'ic-menu',

  classNameBindings: ['isOpen:is-open:is-closed'],

  list: null,

  listTrigger: null,

  isOpen: function() {
    return this.get('list.isOpen');
  }.property('list.isOpen'),

  registerList: function(list) {
    this.set('list', list);
  },

  registerTrigger: function(trigger) {
    this.set('listTrigger', trigger);
  },

  openList: function() {
    this.get('list').open();
  }

});

