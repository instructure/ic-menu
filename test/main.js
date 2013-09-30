var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/\.spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  baseUrl: '/base/.build/bower_components',
  packages: [
    {name: 'app', location: '../app'},
    {name: 'ic-menu', location: '../addon'}
  ],
  deps: tests,
  callback: window.__karma__.start
});

