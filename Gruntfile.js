module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['./src/**/*.js'],
        dest: './dist/own.js'
      }
    },
    uglify:{
      options: {
        sourceMap: true,
        souceMapIncludeSources: true
      },
      dist: {
        files: {
          'build/test.min.js' : ['dist/own.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['concat', 'uglify']);
};
