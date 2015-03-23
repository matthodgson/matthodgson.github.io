'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "css/scss/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
        dev: {
            files: {
                // destination         // source file
                "css/styles.css" : "css/styles.scss"
            }
        }
    },
    // browsersync config
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Launch BrowserSync + watch task
  grunt.registerTask('default', ['browserSync', 'watch']);

};
