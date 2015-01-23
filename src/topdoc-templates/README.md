# About these Topdoc templates

This is an effort to synchronize content from Capital Framework components
with the Design Manual.
The idea is to create HTML partials from the markup examples that are saved in
the Topdoc comments of each component's Less file.
Here's how it works:

1. Edit the Topdoc comments within the source `.less` file of the component on
   GitHub.
2. Bring the updated component into the Design Manual with
   `bower update <component-name-here>`, then `grunt compile-cf`.
3. Re-compile the `main.css` file with `grunt`.
   This puts the new Topdoc comments into the CSS so that the Topdoc task can
   read them.
4. Re-generate the partials with `grunt build-partials-from-cf-docs`.
   This will run Topdoc, which reads the Topdoc comments and takes out the
   markup examples, placing them into HTML partials that can be used in the site.


## Behind the scenes of turning the Topdoc comments into custom HTML

The Grunt topdoc task does this by reading the CSS comments and converting the
special Topdoc comments into structured data.
This data is then passed to a [Jade](http://jade-lang.com/) template which
spits out HTML.

The Jade templates in this directory are creating HTML partials that are sent
to the _includes folder, they are not pages on their own.
You can use these partial HTML blocks in any page you want by using a simple
Jekyll include tag.


## Adding new components

To create partials from other components you will need to edit two Grunt tasks.

### 1: `grunt:concat`

The concat task is used to merge frequently used Jade snippets found in
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

### 2: `grunt:topdoc`

Copy the `topdoc:icons` sub task and change the task name to whatever
component you're working on.
Then change the `destination`, `template`, and `family` values to match.

### 3: Running it

Finally run `grunt compile-cf`, then `grunt build-partials-from-cf-docs` to
trigger the concat and topdoc tasks.
You should see a new index.jade file in the `template` directory that was
specified in the topdoc task.
You will also see an HTML file in the `destination` directory that was
specified in the topdoc task.
