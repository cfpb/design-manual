# Topdoc templates


## High level overview

This is an effort to synchronize content from Capital Framework components
with the Design Manual.
The content is in the form of special Topdoc comments that are written into
the CSS of each component.
Any content edits will need to be made within the source `.less` file of the
corresponding component.

After editing the content within the component repository you will need to
update the Design Manual's version of that component, rebuild the
design-manual.css file, and re-run the topdoc Grunt task
(the Grunt topdoc task is what pulls the content out of the CSS comments
and turns it into custom HTML, more on this later).

Updating the component within the Design Manual is easily done with the
`bower update <component-name-here>` command.

Rebuilding the CSS and re-running topdoc are both triggered by the default
`grunt` command.


## Turning the CSS comments into custom HTML

The Grunt topdoc task does this by reading the CSS comments and converting the
special Topdoc comments into structured data.
This data is then passed to a [Jade](http://jade-lang.com/) template which
spits out HTML.

The Jade templates in this directory are creating HTML partials that are sent
to the _includes folder, they are not pages on their own.
You can use these partial HTML blocks in any page you want by using a simple
Jekyll include tag.


## The Grunt tasks

Use the concat task to merge frequently used Jade snippets found in
`topdoc-templates/includes/` with your own Jade template.
For example look at the `concat:topdocIcons` sub task and notice how
it is merging two `.jade` files together.
If you were creating a new Jade template you would copy this sub task
and concatenate any helper Jade files you need that are located in the `includes`
folder.

```js
topdocIcons: {
  src: [
    'front/topdoc-templates/includes/filter-components-without-markup.jade',
    'front/topdoc-templates/icons/src.jade'
  ],
  dest: 'front/topdoc-templates/icons/index.jade',
}
```

Next you will set up the Grunt topdoc task.
Copy the `topdoc:icons` sub task and change the task name to whatever
component you're working on.
Then change the `destination`, `template`, and `family` values to match.

Finally run `$ grunt` to trigger the concat and topdoc tasks.
You should see a new index.jade file in the `template` directory that was
specified in the topdoc task.
You will also see an HTML file in the `destination` directory that was
specified in the topdoc task.
