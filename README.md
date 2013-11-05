ic-menu
=======

An accessible menu component for ember applications.

Installation
------------

`bower install ic-menu`

Usage
-----

__application.hbs__

```handlebars
{{#ic-menu}}
  {{#ic-menu-trigger}}Actions{{/ic-menu-trigger}}
  {{#ic-menu-list}}
    {{#ic-menu-item on-select="remove"}}Remove{{/ic-menu-item}}
    {{#ic-menu-item on-select="save"}}Save{{/ic-menu-item}}
  {{/ic-menu-list}}
{{/ic-menu}}
```

__application_controller.js__

```js
App.ApplicationController = Ember.Controller.extend({

  actions: {
    remove: function(icMenuItem) {
      // do stuff with the icMenuItem instance
    },
    save: function(icMenuItem) {
      // do stuff with the icMenuItem instance
    }
  }

});
```

Development
-----------

1. Fork the repo
2. Create a new branch for your feature/bug fix
3. `grunt` to build and watch files.
4. `karma start` in a new tab to run tests. Click "debug" to interact
   with the code.
5. Send a pull request.

