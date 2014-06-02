var nativeAlert = window.alert;

module('IcMenuItemComponent', {
  setup: function() {
    App.reset();
    window.alert = function(message) {
      equal(message, 'disabled');
    };
  },
  teardown: function() {
    window.alert = nativeAlert;
  }
});

test('adds appropriate aria-disabled attributes', function() {
  visit('/');
  click('#menu-order');
  var disabled = find('#list-order ic-menu-item:first');
  var enabled = find('#list-order ic-menu-item:last');
  andThen(function() {
    equal(disabled.attr('aria-disabled'), "true", "disabled items have aria-disabled='true'");
    equal(enabled.attr('aria-disabled'), "false", "enabled items have aria-disabled='false'");
  });
});

test('triggers appropriate action for disabled elements', function() {
  visit('/');
  click('#menu-order');
  keyEvent('#list-order', 'keydown', 40);
  click('#list-order ic-menu-item:first');
  // assertion happens in stubbed alert from 'setup'
});

//test('closes menu on select');
//test('selects on enter and space');
//test('focuses on mouseenter');

