var fs = require('fs');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.initConfig({
    watch: {
      libTemplates: {
        files: ['lib/templates/**/*.hbs'],
        tasks: ['emberTemplates:lib']
      },
      testTemplates: {
        files: ['test/**/*.hbs'],
        tasks: ['emberTemplates:test']
      }
    },
    emberTemplates: {
      lib: {
        options: {
          templateBasePath: 'lib/templates/'
        },
        files: {
          "lib/templates.js": "lib/templates/**/*.hbs"
        }
      },
      test: {
        options: {
          templateBasePath: 'test/app/'
        },
        files: {
          "test/app/templates.js": "test/app/**/*.hbs"
        }
      }
    },
    concat: {
      dist: {
        src: ['lib/**/*.js'],
        dest: 'dist/x-foo.js'
      },
    }
  });
  grunt.registerTask('default', ['emberTemplates', 'watch']);
  grunt.registerTask('dist', ['emberTemplates', 'concat'], function() {
    var src = fs.readFileSync('dist/x-foo.js').toString();
    fs.writeFileSync('dist/x-foo.amd.js', "define(['ember'], function(Ember) {\n"+src+"\n  return ns;\n});");
  });
};

