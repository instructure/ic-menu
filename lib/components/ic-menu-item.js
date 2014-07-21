+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) { return factory(Ember); });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'));
  } else {
    root.ic = root.ic || {};
    root.ic.MenuItemComponent = factory(Ember);
  }
}(this, function(Ember) {

  var forEach = Ember.EnumerableUtils.forEach;

  var MenuItemComponent = Ember.Component.extend({

    tagName: 'ic-menu-item',

    attributeBindings: [
      'tabindex',
      'role',
      'aria-disabled'
    ],

    role: 'menuitem',

    enabled: true,

    tabindex: -1,

    focused: false,

    'aria-disabled': function() {
      return !this.get('enabled') + ''; // coerce to ensure true || false
    }.property('enabled'),

    _childIcSubMenu: function(){
      var childViews = this.get('childViews');
      return childViews && childViews.findBy('tagName', 'ic-menu');
    },

    closeSubMenu: function(){
      var subMenu = this._childIcSubMenu();
      if (subMenu){
        subMenu.closeList();
      }
    },

    openSubMenu: function(){
      var subMenu = this._childIcSubMenu();
      if (subMenu){
        if (subMenu.get('isOpen')){
          subMenu.closeList();
          return false;
        } else {
          subMenu.openList();
          return true;
        }
      }
      return false;
    },

    click: function(event) {
      var wasKeyboard = !event.clientX && !event.clientY;
      // If opening a submenu, do nothing because we want the
      // sub-menu to open and let events propogate from there
      if (this.openSubMenu()) return;
      this.get('parentView').close();
      Ember.run.next(this, function() {
        if (wasKeyboard) { this.get('parentView').focusTrigger(); }
        if (this.get('enabled')) {
          this.sendAction('on-select', this);
        } else {
          this.sendAction('on-disabled-select', this);
        }
      });
    },

    keyDown: function(event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        this.click(event);
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

  return MenuItemComponent;

});
