module('IcMenuTriggerComponent', {
  setup: function() {
    App.reset();
  }
});

test('opens and closes on click', function() {
  visit('/');
  click('#trigger1')
  andThen(function() {
    ok(find('#list1').is(':visible'), 'list is visible');
  });
});

test('closes on click, after already opened', function() {
  visit('/');
  click('#trigger1')
  click('#trigger1')
  wait().andThen(function() {
    ok(find('#list1').is(':hidden'), 'list is not visible');
  });
});


//test('opens and closes on enter');
//test('opens and closes on space');
//test('opens and closes on down');
//test('opens and closes on up');
//test('aria-owns');
//test('gets focus when menu closes with escape key');
//test('selects first item on keyboard events');
//test('does not select first item on mouse click');

function getView(id) {
  return Ember.View.views[id];
}

