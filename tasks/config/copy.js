module.exports = {

  dist: {
    files: [
      {
        expand: true,
        cwd: '.',
        src: 'lib/**/*.hbs',
        dest: 'dist'
      }
    ]
  },

  vendor: {
    files: [
      {
        expand: true,
        cwd: './bower_components/',
        src: '**/*.js',
        dest: '.build/bower_components'
      }
    ]
  },

  html: {
    files: [
      {
        expand: true,
        cwd: 'example/',
        src: ['**/*.html', '**/*.css'],
        dest: '.build'
      }
    ]
  }
};

