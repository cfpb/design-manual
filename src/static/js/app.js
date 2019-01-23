/* ==========================================================================
   JS
   ========================================================================== */

var $ = require( 'jquery' );
var Expandable = require( 'cf-expandables/src/Expandable' );
var Table = require( 'cf-tables/src/Table' );

Expandable.init();
Table.init();

$(document).ready(function() {
  'use strict';
  $('.cf-icon-external-link').append('<span class="u-visually-hidden"> Links to external site.</span>');
});
