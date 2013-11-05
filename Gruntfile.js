var fs = require('fs');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
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
        dest: 'dist/main.js'
      }
    },
    clean: {
      dist: ['dist']
    }
  });
  grunt.registerTask('amd', 'wrap dist in amd', function() {
    var src = fs.readFileSync('dist/main.js').toString();
    fs.writeFileSync('dist/main.amd.js', "define(['ember'], function(Ember) {\n"+src+"\n  return ic;\n});");
  });
  grunt.registerTask('dist', ['clean', 'emberTemplates', 'concat', 'amd']);
  grunt.registerTask('default', ['dist', 'watch']);
};

