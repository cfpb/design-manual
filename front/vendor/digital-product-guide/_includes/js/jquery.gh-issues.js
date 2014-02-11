(function($)
{

    /*
     * ======================================================================
     * jquery.gh-issues.js
     * ======================================================================
     *
     * Display github issues in context
     * Dependencies: jquery.append-attr-vals.js
     *
     */

    $.fn.ghIssues = function( userPathToIssues, userSettings ) {

        var $contexts, // Where the issues should be displayed
            $issues; // The markup representing the issues

        // Kick things off
        if ( userPathToIssues !== undefined ) {
            // Start loading the issues
            $.get( userPathToIssues ).done( init );
        } else {
            // Stop here if we don't have a url to the issues
            debug('ABORTING! Please include a URL to the issues.');
            return;
        }

        function init( data ) {
            // The $contexts are set in the return this.each at the bottom of
            // the script.
            $issues = buildAllIssues( data );
            matchAndAppendIssuesToTheirContexts( data );
        }

        function buildAllIssues( data ) {

            /**
             * Build markup to represent each issue in the repo.
             * Returns a jquery collection of jquery issues HTML.
             * Expects an array of JSON objects.
             */

            var i = 0,
                total = data.length,
                $issues = $();

            // Loop through the JSON array of objects.
            // Build one HTML snippet from each JSON object in the array,
            // then add it to the collection.
            for ( i; i < total; i++ ) {
                $issues = $issues.add( buildOneIssue( data[i] ) );
            }

            return $issues;
        }

        function buildOneIssue( data ) {

            /**
             * Returns one HTML snippet wrapped in a jquery object.
             * Expects a single issues JSON object to be passed to it.
             */

            var $p = $('<p class="ghissues" data-hashtags=""></p>'),
                $link = $('<a href=""></a>'),
                $number = $('<span class="ghissues-number"></span>'),
                $title = $('<span class="ghissues-title"></span>'),
                $label = $('<span class="ghissues-label"></span>'),
                i = 0,
                total = data.labels.length;

            // Populate some content
            $p.attr( 'data-hashtags', filterToHashtags( data.body ) );
            $p.append( $link );
            $link.attr( 'href', data.html_url );
            $link.append(' ').append( $number );
            $number.html( data.number + '.' );
            $link.append( $title );
            $title.text( data.title );

            // Loop through the labels and add them to the markup
            for ( i; i < total; i++ ) {
                $link.append(' ').append( $label.clone().text( data.labels[i].name ) );
            }

            if(userSettings.customMarkup) {
                // Let user customize object before returning
                return userSettings.customMarkup($p, data);
            }
            else {
                // Return the object full of info
                return $p;
            }

            //debug( 'issue: ' + data.number + ' | tagged as: ' + $p.data('hashtags') );
        }

        function matchAndAppendIssuesToTheirContexts( data ) {

            /**
             * Match issues to the proper contexts.
             * To do this we'll use a "~=" attribute selector which matches
             * a value within a space separated list. We'll use this selector
             * to filter out the issues that match the hashtags of each context.
             * We'll end up with something like:
             * [data-hashtags~="btn"],[data-hashtags~="styleguide"]
             * This selector filters issues if their data-hashtags attribute
             * contains any of those values. The filtered issues get appended
             * to the current context.
             */

            $contexts.each(function() {
                // hack hack
                // appending all issues to all contexts, for now
                var $this = $( this );
                    // hashtags = $this.data('gh-issues').split(' '),
                    // issuesFilter = getIssuesFilterFromArray( hashtags ),
                    // matchedIssues = $issues.filter( issuesFilter ).clone();
                $this.append('<div class="ghissues-list"></div>');
                $this.find('.ghissues-list').append( $issues );

                if(userSettings.customHeader) {
                    $this.prepend( userSettings.customHeader( data ) );
                }
            });

            if(userSettings.appended) {
                userSettings.appended();
            }

        }

        function getIssuesFilterFromArray( a ) {

            var total = a.length,
                i,
                filters = [];

            for ( i = 0; i < total; i++ ) {
                filters.push( '[data-hashtags~="' + a[i] + '"]' );
            }

            return filters.join(',');
        }

        return this.each(function() {

            /**
             * Set the contexts which are the elements passed to the plugin.
             */

            if ( typeof $contexts === 'undefined' ) {
                $contexts = $();
            }
            $contexts = $contexts.add( this );
        });

    };

    /**
     * =================
     * Utility functions
     * =================
     */

    function debug( d ) {
        if ( window.console && window.console.log ) {
            window.console.log( 'ghIssues:', arguments );
        }
    }

    function stripDuplicatesFromArray( arrayToCheck ) {
        if ( arrayToCheck !== null ) {
            var total = arrayToCheck.length,
                i = 0,
                uniqueArray = [];
            for ( i; i < total; i++ ) {
                if ( $.inArray( arrayToCheck[i], uniqueArray ) === -1 ) {
                    uniqueArray.push( arrayToCheck[i] );
                }
            }
            return uniqueArray;
        } else {
            return [];
        }
    }

    function filterToHashtags( theText ) {

        /**
         * Expects a string and converts it into a space separated string of
         * unique hashtags without the "#".
         */

        // http://blog.jasonlang.me/twitter-hashtags-javascript-and-regex
        return stripDuplicatesFromArray( theText.match(/(#[A-Za-z0-9\-\_]+)/g) )
               .join(' ')
               .replace(/#/g, '');
    }

}(jQuery));
