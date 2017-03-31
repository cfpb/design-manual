'use strict';

var path = require( 'path' );
var fs = require( 'fs' );
var componentsDir = path.join( __dirname, '..', '..', '..', 'components' );
var packageContent = fs.readFileSync( path.join( __dirname, '..', '..', '..', 'package.json' ) );
var packageJSON = JSON.parse( packageContent );
var exec = require( 'child-process-promise' ).exec;

function filterComponents( deps ) {
  for ( var component in deps ) {
    if ( /^cf-/.test( component ) ) {
      npmLink( component );
    }
  }
}

function npmLink( component ) {
  exec( 'npm link ' + component,
    function( err, out ) {
      if ( err instanceof Error ) {
        throw err;
      }

      process.stdout.write( out );
    } );
}

filterComponents( packageJSON.dependencies );
