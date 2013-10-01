var fs = require('fs');

module.exports = function(grunt) {
  grunt.registerTask('dist', function() {
    grunt.task.run(['clean:dist', 'transpile:dist', 'copy:dist']);
  });
};

