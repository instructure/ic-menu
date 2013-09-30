var options = { livereload: true };

module.exports = {
  templates: {
    options: options,
    files: ['lib/**/*.hbs', 'example/**/*.hbs'],
    tasks: ['emberTemplates']
  },
  js: {
    options: options,
    files: ['main.js', 'lib/**/*.js', 'example/**/*.js', 'test/**/*.js'],
    tasks: ['transpile']
  },
  bower: {
    options: options,
    files: ['bower.json'],
    tasks: ['bowerImport', 'build']
  },
  html: {
    options: options,
    files: ['example/**/*.html', 'example/**/*.css'],
    tasks: ['copy:html']
  }
};

