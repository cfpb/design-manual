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
      ' * URL: <%= pkg.homepage %>\n' +
      ' * A public domain work of the <%= pkg.author.name %>\n' +
      ' * ==========================================================================\n' +
      '*/\n\n',


    concat: {
      ltIE8: {
        src: [
          'front/vendor/font-awesome/css/font-awesome-ie7.min.css'
        ],
        // Using .min keeps topdoc from rendering it as a demo page
        dest: 'assets/css/vendor.lt-ie9.min.css',
      },
      topdocIcons: {
        src: [
          'front/topdoc-templates/includes/filter-components-without-markup.jade',
          'front/topdoc-templates/icons/src.jade'
        ],
        dest: 'front/topdoc-templates/icons/index.jade',
      }
    },


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

    autoprefixer: {
      options: {
        // Options we might want to enable in the future.
        diff: false,
        map: false
      },
      multiple_files: {
        // Prefix all CSS files found in `src/static/css` and overwrite.
        expand: true,
        src: 'assets/css/<%= pkg.name %>.css'
      },
    },

    legacssy: {
      demo: {
        options: {
          legacyWidth: 960
        },
        files: {
          'assets/css/<%= pkg.name %>.lt-ie9.min.css': 'assets/css/<%= pkg.name %>.css'
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
          'assets/css/vendor.min.css': [
            'front/vendor/normalize.css/normalize.css',
            'front/vendor/font-awesome/css/font-awesome.css'
          ],
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
      },
      capitalframework: {
        src: ['front/vendor/cf-expandables/src/js/cf-expandables.js'],
        dest: 'assets/js/capital-framework.min.js'
      }
    },

/*
    topdoc: {
      demo: {
        options: {
          source: 'demo/static/css/',
          destination: 'demo/',
          template: 'node_modules/cf-component-demo/' + ( grunt.option('tpl') || 'raw' ) + '/',
          templateData: {
            family: '<%= pkg.name %>',
            title: '<%= pkg.name %> demo',
            repo: '<%= pkg.homepage %>',
            ltIE8Source: 'static/css/main.lt-ie8.min.css',
            custom: '<%= grunt.file.read("demo/custom.html") %>'
          }
        }
      },
*/


    /**
     * Copy: https://github.com/gruntjs/grunt-contrib-copy
     */
    copy: {
      main: {
        files: [
          /* Vendor Packages */
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
            src: ['front/vendor/font-awesome/font/*'],
            dest: 'assets/fonts/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/cf-icons/src/fonts/*'],
            dest: 'assets/fonts/',
            filter: 'isFile'
          },
          /* Capital Framework Demos */
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/cf-buttons/demo/custom.html'],
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
            src: ['front/vendor/cf-colors/demo/custom.html'],
            dest: '_includes/ui-toolkit/colors/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/cf-expandables/demo/custom.html'],
            dest: '_includes/ui-toolkit/expandables/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: ['front/vendor/cf-forms/demo/custom.html'],
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
            src: ['front/vendor/cf-pagination/demo/custom.html'],
            dest: '_includes/ui-toolkit/pagination/',
            filter: 'isFile'
          }
        ]
      }
    },

    watch: {
      scripts: {
        files: ['front/src/js/*.js','front/src/**/*.less'],
        tasks: ['build'],
        options: {
          spawn: false,
        }
      }
    },

    topdoc: {
      icons: {
        options: {
          source: 'assets/css/',
          destination: '_includes/identity/icons/',
          template: 'front/topdoc-templates/icons/index.jade',
          templateData: {
            family: 'cf-icons'
          }
        }
      }
    },

  });

  /**
   * The above tasks are loaded here (in the same order).
   */
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-legacssy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-topdoc');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /**
   * Grunt is installed in a sub-directory called "front",  so back out one directory:
  ;*/
  grunt.file.setBase('../');

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('build', ['concat', 'less', 'autoprefixer', 'legacssy', 'cssmin', 'uglify', 'copy', 'topdoc']);
  grunt.registerTask('default', ['build']);

};
