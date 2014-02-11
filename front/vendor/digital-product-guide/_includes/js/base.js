$(document).ready( function() {

    var repoAPI = 'https://github.cfpb.gov/api/v3/repos/' + repoOrg + '/' + repoName,
    authToken = $.cookie("oauth-token"); //borrowing the oauth token that Prose sticks in your cookie

    function checkDocumentLabel() {
        documentLabel = slugifyText(documentLabel);
        $.ajax({
            type: 'GET',
            url: repoAPI + '/labels/' + documentLabel,
            success: function(data, status, xhr) {
                 appendIssues();
            },
            error: function(xhr, status, error) {
                var newLabel ={
                    "name": documentLabel,
                    "color": "ADDC91"
                };
                $.ajax({
                    type: 'POST',
                    url: repoAPI + '/labels',
                    data: JSON.stringify(newLabel),
                    dataType: 'json',
                    contentType: 'application/x-www-form-urlencoded',
                    headers : { Authorization : 'token ' + authToken }
                });
                appendIssues();
            }
        });
    }

    function appendIssues() {
        var linkbackURL = encodeURIComponent(document.URL);
        var issueCreateURL = 'https://github.cfpb.gov/' + repoOrg + '/' + repoName + '/issues/new?body=%0D%0D%0D'+ linkbackURL +'&labels=' + documentLabel;
        // append issues to issue containers
        $('[data-gh-issues]').ghIssues(repoAPI + '/issues?per_page=100&labels=' + documentLabel, {
            customHeader: function(data) {
                var plural = (data.length === 1) ? '' : 's';
                if(data.length !== 0){
                    return '<p class="ghissues-header">'+ data.length +' issue' + plural + '</p>';
                }
            },
            customMarkup: function($obj, data) {
                $obj.find('.ghissues-label').remove();
                $obj.append( '<span class="ghissues-label comments">' + data.comments + ' comments </span>');
                $obj.append( '<span class="ghissues-label metadata">started ' + moment(data.created_at).fromNow() + ' by ' + data.user.login +' </span>');
                return $obj;
            },
            appended: function() {
                $('[data-gh-issues] .ghissues-list').append('<a href="#" class="add-issue-link" target="_blank">Add an Issue</a>');
                // update all issue create links
                $('.add-issue-link').attr('href', issueCreateURL);
                $('.ghissues-list').hide();
                $('.ghissues-header').click(function(){
                    $(this).toggleClass('open');
                    $(this).parent().find('.ghissues-list').slideToggle(100);
                });

            }
        });
    }

    function slugifyText(s){
        return s.replace(/\s+/g, '-').replace(/[^\w-]+/g,'').replace(/(--)/g,'-').toLowerCase();
    }

    function generateTOC(){
        var $headers = $('h2,h3,h4', '#document-content');
        var html = "<ul>";
        $headers.each(function(index) {
            var $this = $(this);
            var thisTagname = $this.prop('tagName'),
                prevTagname = (index > 0) ? $($headers[index-1]).prop('tagName') : undefined,
                nextTagname = (index <= $headers.length) ? $($headers[index+1]).prop('tagName') : undefined;
            if(thisTagname === 'H3') {
                if(prevTagname === 'H2') {
                    html += '<ul>';
                }
            }
             if(thisTagname === 'H4') {
                if(prevTagname === 'H3') {
                    html += '<ul>';
                }
            }
            html += '<li><a href="#' + $this.attr('id') + '">' + $this.text() + '</a></li>';
            if(thisTagname === 'H3') {
                if(nextTagname === 'H2') {
                    html += '</ul>';
                }
            }
             if(thisTagname === 'H4') {
                if(nextTagname === 'H3') {
                    html += '</ul>';
                }
            }
        });
        html += '</ul>';
        $('#toc').prepend(html);
    }


    // replace [guideAssets] token with path in img and a elements
    function updatePaths() {
        var $guideImages = $('#document-content img'),
            $guideLinks = $('#document-content a');


        $guideImages.each(function() {
            var $this = $(this),
                imgPath = $this.attr('src'),
                updatedImgPath;

            if ( imgPath.indexOf('[guideAssets]') != -1 || imgPath.indexOf('[guideassets]') != -1 ) {
                updatedImgPath = imgPath.replace('[guideAssets]' , documentAssetPath).replace('[guideassets]' , documentAssetPath).replace(/\/\//g, '/').replace(':/', '://');
                $this.attr('src', updatedImgPath);
            }
        });

        $guideLinks.each(function() {
            var $this = $(this),
                linkPath = $this.attr('href'),
                updatedLinkPath;

            if ( linkPath.indexOf('[guideAssets]') != -1 || linkPath.indexOf('[guideassets]') != -1 ) {
                updatedLinkPath = linkPath.replace('[guideAssets]' , documentAssetPath).replace('[guideassets]' , documentAssetPath).replace(/\/\//g, '/').replace(':/', '://');
                $this.attr('href', updatedLinkPath);
            }
        });
    }

    generateTOC();
    updatePaths();
    checkDocumentLabel();

});
