module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      less: {
        files: [
        '<%= LESSfiles_location %>/*'
        ],
        tasks: ['less']
      }
    },

    less: {
      components: {
        files: {
          '<%= CSSoutput_location %>/style.css': ['<%= LESSfiles_location %>/less_imports.less']
        }
      },
      options: {
        expand: true,
        paths: [
        '<%= LESSfiles_location %>'
        ]
      }
    },

    'LESSfiles_location': '../LESS',
    'CSSoutput_location': '../Project/css'

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

};