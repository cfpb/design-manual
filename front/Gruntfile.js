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
      '/*\n' +
      ' * ==========================================================================\n' +
      ' * Package name: <%= pkg.name %>\n' +
      ' * Version: <%= pkg.version %>\n' +
      ' * Last modified: <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>\n' +
      ' * URL: <%= pkg.homepage %>\n' +
      ' * A public domain work of the <%= pkg.author.name %>\n' +
      ' * ==========================================================================\n' +
      '*/\n\n',

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
          'assets/css/<%= pkg.name %>.css': ['<%= banner %>', 'front/src/less/style.less']
        }
      }
      /*
      ,
      ie8: {
        options: {
          paths: ['src/static']
        },
        files: {
          'assets/css/<%= pkg.name %>.ie8.css': ['front/src/less/<%= pkg.name %>.ie8.less']
        }
      }
      */
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
          'assets/css/<%= pkg.name %>.min.css': ['assets/css/<%= pkg.name %>.css']
          /*'assets/css/<%= pkg.name %>.ie8.min.css': ['<%= pkg.name %>.ie8.css']*/
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
        compress: true,
        mangle: false,
        beautify: true,
        banner: '<%= banner %>'
      },
      vendor: {
        src: ['front/vendor/jquery/jquery.js'],
        dest: 'assets/js/vendor.min.js'
      },
      html5shiv: {
        src: ['front/vendor/html5shiv/dist/html5shiv-printshiv.js'],
        dest: 'assets/js/html5shiv-printshiv.js'
      },
      main: {
        src: ['front/src/js/<%= pkg.name %>.js'],
        dest: 'assets/js/<%= pkg.name %>.min.js'
      }
    },

    /**
     * Copy: https://github.com/gruntjs/grunt-contrib-copy
     */
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/box-sizing-polyfill/boxsizing.htc'],
            dest: 'assets/css/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/fj-buttons/demo/custom.html'],
            dest: '_includes/ui-toolkit/buttons/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/cf-typography/demo/custom.html'],
            dest: '_includes/ui-toolkit/typography/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/fj-colors/demo/custom.html'],
            dest: '_includes/ui-toolkit/colors/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/fj-expandables/demo/custom.html'],
            dest: '_includes/ui-toolkit/expandables/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/fj-forms/demo/custom.html'],
            dest: '_includes/ui-toolkit/forms/',
            filter: 'isFile'
          },
          /* NO GRID DEMO (YET) -- This should be fixed when everything is moved into the gh-pages repo
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/fj-grid/demo/custom.html'],
            dest: '_includes/ui-toolkit/grid/',
            filter: 'isFile'
          },
          */
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/fj-pagination/demo/custom.html'],
            dest: '_includes/ui-toolkit/pagination/',
            filter: 'isFile'
          }
        ]
      }
    }
  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  /**
   * Grunt is installed in a sub-directory called "front",  so back out one directory:
  ;*/
  grunt.file.setBase('../');

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'copy']);

};