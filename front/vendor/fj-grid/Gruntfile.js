module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    /**
     * Pull in the package.json file so we can read its metadata.
     */
    pkg: grunt.file.readJSON('package.json'),
    version: Object.keys( grunt.file.readYAML('CHANGELOG') )[0],

    /**
     * Here's a banner with some template variables.
     * We'll be inserting it at the top of minified assets.
     */
    banner: 
      '/*                                      \n' +
      '            /$$$$$$          /$$        \n' +
      '           /$$__  $$        | $$        \n' +
      '  /$$$$$$$| $$  \\__//$$$$$$ | $$$$$$$  \n' +
      ' /$$_____/| $$$$   /$$__  $$| $$__  $$  \n' +
      '| $$      | $$_/  | $$  \\ $$| $$  \\ $$\n' +
      '| $$      | $$    | $$  | $$| $$  | $$  \n' +
      '|  $$$$$$$| $$    | $$$$$$$/| $$$$$$$/  \n' +
      ' \\_______/|__/    | $$____/ |_______/  \n' +
      '                  | $$                  \n' +
      '                  | $$                  \n' +
      '                  |__/                  \n\n' +
      '* <%= pkg.name %> - <%= version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* A <%= _.pluck(pkg.licenses, "type").join(", ") %> work of the <%= pkg.author.name %> */\n\n',

    /**
     * Connect: https://github.com/gruntjs/grunt-contrib-connect
     * 
     * Start a connect web server.
     */
    connect: {
      demo: {
        options: {
          port: 8000,
          base: 'src/examples'
        }
      }
    },

    /**
     * Shell: https://github.com/sindresorhus/grunt-shell
     * 
     * Grunt task to run shell commands.
     * For now we're just copying the src file over to dist and
     * zipping the example directory.
     */
    shell: {
      packageExample: {
        command: [
          'cp src/ghost.less src/examples/employee/static/ghost.less',
          'cp src/boxsizing.htc src/examples/employee/static/boxsizing.htc',
          'cp src/ghost.less src/examples/bootstrap/static/ghost.less',
          'cp src/boxsizing.htc src/examples/bootstrap/static/boxsizing.htc',
          'cp src/ghost.less src/examples/grid/static/ghost.less',
          'cp src/boxsizing.htc src/examples/grid/static/boxsizing.htc',
          'cp src/boxsizing.htc dist/boxsizing.htc',
          'cd src/examples',
          'zip -r ../../dist/examples.zip . -x \*.DS_Store \*style.css'
        ].join('&&')
      }
    },

    /**
     * LESS: https://github.com/gruntjs/grunt-contrib-less
     * 
     * Compile LESS files to CSS.
     */
    less: {
      legacy: {
        options: {
          paths: ["src"],
          banner: '<%= banner %>',
          yuicompress: false
        },
        files: {
          'dist/ghost.css': ['src/ghost-legacy.less'],
          'src/examples/grid/static/example.css': ['src/examples/grid/static/example.less'],
          'src/examples/employee/static/example.css': ['src/examples/employee/static/example.less'],
          'src/examples/bootstrap/static/example.css': ['src/examples/bootstrap/static/example.less']
        }
      }
    },

    /**
     * Concat: https://github.com/gruntjs/grunt-contrib-concat
     * 
     * Concatenate files.
     */
    concat: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: ['src/ghost.less'],
        dest: 'dist/ghost.less'
      }
    },

    /**
     * grunt-cfpb-internal: https://github.com/cfpb/grunt-cfpb-internal
     * 
     * Some internal CFPB tasks.
     */
    'build-cfpb': {
      prod: {
        options: {
          commit: true
        }
      }
    },

    /**
     * Watch: https://github.com/gruntjs/grunt-contrib-watch
     * 
     * Run predefined tasks whenever watched file patterns are added, changed or deleted.
     * Add files to monitor below.
     */
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['Gruntfile.js', 'src/*.less', 'src/examples/**/static/example.less'],
        tasks: ['build']
      }
    }
  });

  /**
   * The above tasks are loaded here.
   */
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-cfpb-internal');

  /**
   * Create task aliases by registering new tasks
   */
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('build', ['less', 'shell', 'concat', 'build-cfpb']);

  /**
   * The 'default' task will run whenever `grunt` is run without specifying a task
   */
  grunt.registerTask('default', ['connect:demo', 'watch']);

};
