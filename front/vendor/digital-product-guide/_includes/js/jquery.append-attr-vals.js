(function($)
{

    /*
     * ======================================================================
     * jquery.append-attr-vals.js
     * ======================================================================
     *
     * Converts attribute values into markup to append to the current object
     *
     */

    $.fn.appendAttrValsAsHTML = function( attr, markupTemplate, userSettings ) {

        return this.each(function() {

            var settings,
                arrayFromAttr = getArrayFromAttrVal( this, attr ),
                markupString = '',
                i = 0,
                arrayTotal = arrayFromAttr.length;

            for ( i; i < arrayTotal; i++ ) {
                if ( typeof markupTemplate !== 'undefined' ) {
                    markupString +=
                    markupTemplate.replace( /\$1/g, arrayFromAttr[i] ) +
                    ' '; // Add whitespace to separate each item
                } else {
                    markupString +=
                    arrayFromAttr[i] +
                    ' '; // Add whitespace to separate each item
                }
            }

            $( this ).append( markupString );
        });

        function getArrayFromAttrVal( e, attr ) {

            /**
             * Returns the value of the attr argument as an array.
             * Expects an element and an attribute of that element.
             */

            var value = $( e ).attr( attr );

            if ( typeof value !== 'undefined' && value !== '' ) {
                return value.split(' ');
            } else {
                return [];
            }
        }
    };

}(jQuery));