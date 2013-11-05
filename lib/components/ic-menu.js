window.ic = window.ic || {};

ic.MenuComponent = Ember.Component.extend({

  classNames: 'ic-menu',

  list: null,

  listTrigger: null,

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

