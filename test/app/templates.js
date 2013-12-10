Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n    ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("trigger1")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-trigger'] || (depth0 && depth0['ic-menu-trigger'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-trigger", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("list1")
  },inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-list'] || (depth0 && depth0['ic-menu-list'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-list", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Actions");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("alert")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("alert")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("Delete");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Save");
  }

function program9(depth0,data) {
  
  var buffer = '', stack1, stack2, options, hashTypes, hashContexts;
  data.buffer.push("\n    ");
  options = {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  if (stack1 = helpers['ic-menu-trigger']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0['ic-menu-trigger']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  hashTypes = {};
  hashContexts = {};
  if (!helpers['ic-menu-trigger']) { stack1 = blockHelperMissing.call(depth0, 'ic-menu-trigger', options); }
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("right: 10px;")
  },inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-list'] || (depth0 && depth0['ic-menu-list'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-list", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("More Actions");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("alert")
  },inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      ");
  hashContexts = {'on-select': depth0};
  hashTypes = {'on-select': "STRING"};
  options = {hash:{
    'on-select': ("alert")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu-item'] || (depth0 && depth0['ic-menu-item'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu-item", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program13(depth0,data) {
  
  
  data.buffer.push("Delete this super long action name");
  }

  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "ic-menu-css", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<div class=\"toolbar\" style=\"height: 20px;\">\n  ");
  hashContexts = {'id': depth0,'style': depth0};
  hashTypes = {'id': "STRING",'style': "STRING"};
  options = {hash:{
    'id': ("menu1"),
    'style': ("float: left;")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu'] || (depth0 && depth0['ic-menu'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n  ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  options = {hash:{
    'style': ("float: right;")
  },inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['ic-menu'] || (depth0 && depth0['ic-menu'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "ic-menu", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n\n<div class=\"content\">\n  <p><select><option>foo</option></select></p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</div>\n\n");
  return buffer;
  
});