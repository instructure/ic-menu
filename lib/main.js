Ember.Application.initializer({

  name: 'ic-menu',

  initialize: function(container, application) {
    application.IcMenuItemComponent = ic.MenuItemComponent;
    application.IcMenuListComponent = ic.MenuListComponent;
    application.IcMenuTriggerComponent = ic.MenuTriggerComponent;
    application.IcMenuComponent = ic.MenuComponent;
  }

});

