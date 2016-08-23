/* ==========================================================================
   JS
   ========================================================================== */

var $ = require( 'jquery' );
require( 'cf-expandables' );
require( 'cf-tables' );

$(document).ready(function() {
  'use strict';
  $('.cf-icon-external-link').append('<span class="u-visually-hidden"> Links to external site.</span>');
});
