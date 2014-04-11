# Topdoc templates

We're using [grunt-topdoc](https://github.com/topcoat/grunt-topdoc) to run
thorugh the compiled CSS and pull out content marked up by Topdoc comments.
Keep in mind that we are using a
[custom Topdoc comment specification](https://github.com/cfpb/cf-component-demo#custom-topdoc-comment-specification).

The templates in this directory are HTML partials that are sent to the _includes
folder so that they can be used in any page we want by using a simple Jekyll
include tag.
