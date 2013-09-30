var fs = require('fs');

module.exports = function(grunt) {
  grunt.registerTask('replaceAddonName', function() {
    var name = JSON.parse(fs.readFileSync('bower.json').toString()).name;
    [
      '.build/app/main.js',
      '.build/index.html',
      '.build/test/main.js'
    ].forEach(function(file) {
      console.log(file);
      var src = fs.readFileSync(file).toString().replace(/{{my-addon}}/, name);
      fs.writeFileSync(file, src);
    });
  });
};
