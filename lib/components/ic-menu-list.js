// See http://www.w3.org/WAI/GL/wiki/Using_ARIA_menus

window.ic = window.ic || {};

ic.MenuListComponent = Ember.Component.extend({

  tagName: 'ul',

  role: 'menu',

  classNames: ['ic-menu-list'],

  attributeBindings: [
    'ariaExpanded:aria-expanded',
    'tabIndex'
  ],

  isOpen: false,

  ariaExpanded: function() {
    return this.get('isOpen')+''; // aria wants "true" and "false" as strings
  }.property('isOpen'),

  tabIndex: -1,

  focusedItem: null,

  createItems: function() {
    this.set('items', Ember.ArrayProxy.create({content: []}));
  }.on('init'),

  keyDown: function(event) {
    // TODO: refactor this, every time I use switch I regret it, and now the
    // preventDefaults are making me sad
    switch (event.keyCode) {
      case /*down*/   40: event.preventDefault(); this.focusNext(); break;
      case /*up*/     38: event.preventDefault(); this.focusPrevious(); break;
      case /*escape*/ 27: event.preventDefault(); this.focusTrigger(); break;
    }
  },

  focusTrigger: function() {
    this.get('parentView.listTrigger').focus();
  },

  focusNext: function() {
    var index = 0;
    var items = this.get('items');
    var focusedItem = this.get('focusedItem');
    if (focusedItem) {
      index = items.indexOf(focusedItem) + 1;
    }
    if (index === items.get('length')) {
      index = 0; // loop it
    }
    this.focusItemAtIndex(index);
  },

  focusPrevious: function() {
    var items = this.get('items');
    var index = items.get('length') - 1;
    var focusedItem = this.get('focusedItem');
    if (focusedItem) {
      index = items.indexOf(focusedItem) - 1;
    }
    if (index == -1) {
      index = items.get('length') - 1; // loop it
    }
    this.focusItemAtIndex(index);
  },

  focusItemAtIndex: function(index) {
    var item = this.get('items').objectAt(index);
    if (!item) {
      // shouldn't ever happen but MATH ISNT ALWAYS EASY
      return;
    }
    this.focusItem(item);
  },

  focusItem: function(item) {
    var focusedItem = this.get('focusedItem');
    if (focusedItem) focusedItem.blur();
    this.set('focusedItem', item);
    item.focus();
  },

  registerItem: function(item) {
    this.get('items').addObject(item);
  },

  deregisterItem: function(item) {
    this.get('items').removeObject(item);
  },

  open: function() {
    this.setPosition();
    this.set('isOpen', true);
  },

  close: function() {
    this.set('isOpen', false);
    this.set('focusedItem', null);
  },

 focusFirstItemOnOpen: function() {
    if (!this.get('isOpen')) return;
    // wait for dom repaint so we can actually focus items
    Ember.run.next(this, function() {
      if (this.get('parentView.listTrigger.lastClickEventWasMouse')) {
        // focus the list then keyboard navigation still works, but the first
        // item isn't strangely selected
        this.$().focus();
      } else {
        // select first item for keyboard navigation
        this.focusItemAtIndex(0);
      }
    });
  }.observes('isOpen'),

  registerWithParent: function() {
    this.get('parentView').registerList(this);
  }.on('didInsertElement'),

  positionOnWindowResize: function() {
    // would like to use ember's automatically delegated events instead
    var $window = Ember.$(window);
    if (this.get('isOpen')) {
      $window.on('resize.ic-menu-list', this.setPosition.bind(this));
    } else {
      $window.off('resize.ic-menu-list');
    }
  }.observes('isOpen'),

  'offset-x': 0,

  'offset-y': 0,

  setPosition: function() {
    this.$().css('visibility', 'hidden'); // prevent flash
    // wait for browser layout so we can measure elements for collision detection
    Ember.run.next(this, function() {
      var triggerRect = this.get('parentView.listTrigger.element').getBoundingClientRect();
      var listRect = this.get('element').getBoundingClientRect();
      var x = triggerRect.left;
      var potentialRightBound = triggerRect.left + listRect.width;
      if (potentialRightBound > window.innerWidth) {
        x = triggerRect.left - (potentialRightBound - window.innerWidth);
      }
      x = x + parseInt(this.get('offset-x'), 10);
      var y = triggerRect.bottom + parseInt(this.get('offset-y'), 10);
      this.set('x', x);
      this.set('y', y);
      this.$().css('visibility', '');
    });
  },

  position: function() {
    this.$().css({
      left: parseInt(this.get('x'), 10),
      top: parseInt(this.get('y'), 10)
    });
  }.observes('x', 'y'),

  focusOut: function(event) {
    // wait for activeElement to get set (I think?)
    Ember.run.next(this, function() {
      if (!this.$().has(document.activeElement).length) {
        this.close();
      }
    });
  },

  // popovers are on the application root so it can popover any other element
  appendToRootOnInsert: function() {
    // there has to be a better way than this :\
    var app = this.get('container').lookup('application:main');
    var rootElement = Ember.$(app.get('rootElement'));
    this.$().appendTo(rootElement.first());
  }.on('didInsertElement')

});

