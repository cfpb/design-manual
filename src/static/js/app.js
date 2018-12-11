/* ==========================================================================
   JS
   ========================================================================== */

var $ = require( 'jquery' );
require( 'cf-expandables/src/Expandable' );
require( 'cf-tables/src/Table' );

$(document).ready(function() {
  'use strict';
  $('.cf-icon-external-link').append('<span class="u-visually-hidden"> Links to external site.</span>');
});
