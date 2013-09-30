import Ember from 'ember';

var IcMenuItemComponent = Ember.Component.extend({

  tagName: 'li',

  classNames: 'ic-menu-item',

  role: 'menuitem',

  attributeBindings: ['tabIndex'],

  tabIndex: -1,

  focused: false,

  click: function() {
    this.get('parentView').close();
    Ember.run.next(this, function() {
      this.sendAction('on-select', this);
    });
  },

  keyDown: function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
      this.click();
    }
  },

  register: function() {
    this.get('parentView').registerItem(this);
  }.on('didInsertElement'),

  deregister: function() {
    this.get('parentView').deregisterItem(this);
  }.on('willDestroyElement'),

  focus: function() {
    this.set('focused', true);
    this.$().focus();
  },

  mouseEnter: function() {
    this.get('parentView').focusItem(this);
  },

  blur: function() {
    this.set('focused', false);
  }

});

export default IcMenuItemComponent;


