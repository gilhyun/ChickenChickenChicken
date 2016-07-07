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
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/assets/css/main.min.css': ['public/assets/css/main.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['less','cssmin']);

};
