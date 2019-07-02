'use strict';

var path = require( 'path' );
var fs = require( 'fs' );
var moment = require( 'moment' );
var parseCSV = require( 'csv' ).parse;
var transformCSV = require( 'csv' ).transform;
var root = path.join( __dirname, '..', '..', '..' );
var templateSource = path.join( root, 'scripts', 'npm', 'colors', 'template.txt' );
var colorsSource = path.join( root, '_data', 'cfpb-brand-colors.csv' );
var colorsLess = path.join( root, 'src', 'static', 'css', 'brand-palette.less' );
var family;

var transformer = transformCSV( function( data ) {
  var block = '';
  if ( data[0] === 'family' ) {
    return fs.readFileSync( templateSource )
             .toString()
             .replace( /\[date\]/g, moment().format( 'MMMM D, YYYY' ) );
  }

  if ( family !== data[0] ) {
    family = data[0];
    block = '\n\n// ' + family[0].toUpperCase() + family.substring(1) + ' family\n\n';
  }

  return block + '@' + data[1] + ': ' + data[3] + ';\n';
 } );

fs.createReadStream( colorsSource )
  .pipe( parseCSV() )
  .pipe( transformer )
  .pipe( fs.createWriteStream( colorsLess ) );
