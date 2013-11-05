define(['ember'], function(Ember) {
window.ns = window.ns || {};

ns.XFooComponent = Ember.Component.extend({

  classNames: ['x-foo'],

  click: function() {
    return this.sendAction('on-clickity-clack', 'hooba!');
  }

});


Ember.Application.initializer({

  name: 'x-foo',

  initialize: function(container, application) {
    application.XFooComponent = ns.XFooComponent;
  }

});


Ember.TEMPLATES["components/x-foo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("hi ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n");
  return buffer;
  
});
  return ns;
});