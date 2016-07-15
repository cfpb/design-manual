---
layout: page
title:  Expandables
category: Page components
redirect_from: "/ui-toolkit/expandables.html"
---

- [Use](#use)
- [Style](#style)
- [States](#states)
{: class="toc"}

<div class="content-50 content-first">

Expandables can be  used for displaying non-essential information on a page. They are also helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-expandables"><h4>cf-expandables</h4></a>
      <p>Expandables in the Capital Framework</p>
    </li>
  </ul>
</div>

<h2 id="use">Use<span class="cf-code-link"><a href="https://cfpb.github.io/capital-framework/components/cf-expandables/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

The `find` function will not discover information hidden by a collapsed expandable, so use good judgement in deciding which information to hide.
Non-javaScript users should default to the expanded state. Otherwise, the default state (expanded or collapsed) will depend on the circumstance.

<h2 id="style">Style</h2>

<h3 class="h4">Individual</h3>

<div class="content-33 content-first">

When only one expandable is used, it should include a stroke on all sides, heading text, and the expand/collapse minicon within a circle with a label reading “Show” or “Hide” (when possible). A white or 5% gray background can be used to highlight the section from the page background.

The entire bar is actionable. The header should clearly indicate what the user will see when the content is expanded (it should not be a call to action). Expand icons stay aligned at the top of the row when the title breaks to multiple lines.

</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Expandable Header
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
{:/nomarkdown}

</div>

<h3 class="h4">Group</h3>

<div class="content-33 content-first">

When expandable sections are used in a group, they are stacked vertically, with each row sharing its top or bottom stroke with the adjacent row. In this use case, expandables have no background color of their own, but match whatever color they are used on (this would typically be a white page or 5% gray well). Title text should be consistent across a group of expandables.

</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="expandable-group">
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
{:/nomarkdown}

</div>

<h3 class="h4">Specifications</h3>

<div class="content-33 content-first">

- 60% gray 1px strokes. All sides on individual, or top and bottom for grouping.
- Optional 5% gray or white background for individual expandable.
- 10px top and bottom padding.
- 15px left and right padding.
- 15px padding between title and minicon with label.
- Avenir paragraph (medium) or H4 title text.
- Pacific blue minicon and label.

</div>

<div class="content-67 content-last">

![Image of expandables spacing spec]({{ site.baseurl }}/static/img/expandables/expandables-spec.png)

</div>

<h2 id="states">States</h2>

<h3 class="h4">Collapsed</h3>

<div class="content-33 content-first">

The default collapsed state should include the expand/collapse minicon within a circle and a label (if space allows). The Show/Hide label can be hidden at narrower screen widths to prevent titles prematurely breaking onto multiple lines and to reduced visual clutter.

</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Expandable Header
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content" style="display: none;">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

<div class="expandable-group">
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
{:/nomarkdown}

</div>

<h3 class="h4">Expanded</h3>

<div class="content-33 content-first">

The content of an expandable can contain normal paragraphs, headings, lists, wells, and images.

Expandables can make use of an optional stroke under the title when expanded. The title stroke can help to define the title from the expanded content for longer sections of text. It should be indented left and right to match the text within the expandable section.

</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="expandable expandable__padded expandable__expanded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Expandable Header
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

<div class="expandable-group">
    <div class="expandable expandable__padded expandable__expanded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded expandable__expanded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded expandable__expanded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
{:/nomarkdown}

</div>

<h2 id="interactions">Interactions</h2>

<h3 class="h4">Default</h3>

<div class="content-33 content-first">

In the default mode, users are able to have multiple sections of an expandable group expanded at the same time, which allows users to easily compare information that is available in different sections.

</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="expandable-group">
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
{:/nomarkdown}

</div>

<h3 class="h4">Accordion (alternate)</h3>

<div class="content-33 content-first">

With the “accordion” mode, users can only view the contents of one section at a time; when a user expands an additional section, the previously-expanded section will collapse automatically.

This can be desirable for maintaining the height of a group of expandable sections, but it can be disorienting when the height of the expandable sections is greater than the height of the user’s viewport (e.g., for users of mobile phones or netbooks), which can lead to off-screen sections closing and shifting all of the content on the screen. For this reason, you should avoid the “accordion” mode if the expanded height of any of the sections is greater than 400px.

Add the `data-accordion="true"` attribute to the expandable group to activate the accordion mode.

</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="expandable-group" data-accordion="true">
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
{:/nomarkdown}

</div>

<h2 id="accessibility">Accessibility</h2>

The `find` function will not discover information hidden by a collapsed expandable, so use good judgement in deciding which information to hide.

Non-javascript users should default to the expanded state. Otherwise, the default state (expanded or collapsed) will depend on the circumstance.

