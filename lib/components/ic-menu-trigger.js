window.ic = window.ic || {};

ic.MenuTriggerComponent = Ember.Component.extend({

  tagName: 'button',

  role: 'button',

  classNames: 'ic-menu-trigger',

  attributeBindings: [
    'ariaOwns:aria-owns',
    'ariaHaspopup:aria-haspopup',
    'role',
    'tabindex'
  ],

  ariaHaspopup: 'true',

  ariaOwns: function() {
    return this.get('parentView.list.elementId');
  }.property('parentView.list'),

  mouseDown: function() {
    if (!this.get('parentView.list.isOpen')) return;
    // MenuList::focusOut handles outerclick/outerfocus, mousedown on the
    // trigger will close an already open list, then the click finishes after
    // and would reopen the list, so we have this temporary property to deal
    // with it.
    this.closingClickStarted = true;
  },

  keyDown: function(event) {
    switch (event.keyCode) {
      case 40 /*down*/:
      case 38 /*up*/: this.openList(event); break;
    }
  },

  openList: function(event) {
    event.preventDefault();
    // I have no idea how reliable this is, but it seems good enough
    this.set('lastClickEventWasMouse', event.clientX > 0 && event.clientY > 0);
    if (this.closingClickStarted) {
      return this.closingClickStarted = false;
    }
    this.get('parentView').openList();
  },

  click: Ember.aliasMethod('openList'),

  registerWithParent: function() {
    this.get('parentView').registerTrigger(this);
  }.on('didInsertElement'),

  focus: function() {
    this.$().focus();
  }

});

