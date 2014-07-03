/*!
 * CFPB Design Manual
 * Main JavaScript file
 */

 $( document ).ready(function() {
    $( ".cf-icon-external-link" ).append( "<span class='external-link-text'> Opens in new window.</span>" );
    $(".external-link-text").css({
        "position" : "absolute",
        "clip" : "rect(1px, 1px, 1px, 1px)"
    });
});