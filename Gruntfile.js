module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['public/assets/css']
        },
        files: {
          'public/assets/css/main.css': 'public/assets/css/main.less'
        }
      },
      production: {
        options: {
          paths: ['public/assets/css']
        },
        files: {
          'public/assets/css/main.css': 'public/assets/css/main.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);

};
