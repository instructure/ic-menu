module.exports = {
  lib: {
    options: {
      templateBasePath: 'lib/templates/',
      amd: true
    },
    files: {
      ".build/addon/templates.js": "lib/templates/**/*.hbs"
    }
  },

  app: {
    options: {
      templateBasePath: 'example/app/templates/',
      amd: true
    },
    files: {
      ".build/app/app-templates.js": "example/app/templates/**/*.hbs"
    }
  }
};

