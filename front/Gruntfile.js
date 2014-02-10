module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Here's a banner with some template variables.
     * We'll be inserting it at the top of minified assets.
     */
    banner:
      '* <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* A public domain work of the <%= pkg.author.name %> */\n\n',

    /**
     * LESS: https://github.com/gruntjs/grunt-contrib-less
     * 
     * Compile LESS files to CSS.
     * Make sure to add any other CSS libraries/files you'll be using.
     */
    less: {
      main: {
        options: {
          paths: ['front/src/less']
        },
        files: {
          'assets/css/<%= pkg.name %>.css': ['<%= banner %>', 'assets/css/normalize.css', 'assets/css/syntax.css', 'assets/css/fonts.css', 'assets/less/style.less']
        }
      },
      ie8: {
        options: {
          paths: ['src/static']
        },
        files: {
          'assets/css/design-manual.ie8.css': ['src/less/design-manual.ie8.less']
        }
      }
    },

    /**
     * CSSMin: https://github.com/gruntjs/grunt-contrib-cssmin
     * 
     * Minify CSS.
     * 
     */
    cssmin: {
      minify: {
        files: {
          'assets/css/design-manual.min.css': ['assets/css/design-manual.css'],
          'assets/css/design-manual.ie8.min.css': ['design-manual.ie8.css'],
        }
      }
    },

    /**
     * Uglify: https://github.com/gruntjs/grunt-contrib-uglify
     * 
     * Minify JS files.
     * Make sure to add any other JS libraries/files you'll be using.
     * We are excluding minified files with the final ! pattern.
     */
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['front/vendor/html5shiv/dist/html5shiv-printshiv.js', 'front/vendor/jquery/js/jquery.js', 'front/src/js/main.js'],
        dest: 'assets/js/<%= pkg.name %>.min.js'
      }
    }

  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /**
   * Grunt is installed in a sub-directory called "front",  so back out one directory:
  ;*/
  grunt.file.setBase('../');

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('default', ['less', 'cssmin', 'uglify']);

};