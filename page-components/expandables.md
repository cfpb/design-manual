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

Expandables are used for displaying non-essential information on a page. 
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

<h2 id="use">Use<span class="cf-code-link"><a href="https://cfpb.github.io/cf-expandables/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

The `find` function will not discover information hidden by a collapsed expandable, so use good judgement in deciding which information to hide.

Non-javascript users should default to the expanded state. Otherwise, the default state (expanded or collapsed) will depend on the circumstance.  

<h2 id="style">Style<span class="cf-code-link"><a href="https://cfpb.github.io/cf-expandables/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

Standard expandables feature a colored bar, a header, the expand/collapse minicon within a circle and a label (if space allows). Ideally, the entire bar is actionable. The header should clearly indicate what the user will see when the content is expanded. It should not be a call to action.

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

<h2 id="states">States<span class="cf-code-link"><a href="https://cfpb.github.io/cf-expandables/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

#### Normal
* Gray 20% bar 
* Pacific Blue minicon

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
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">

#### Hover/Focus/Expanded

* Grey 50% bar
* Pacific Blue minicon

The header should be addressable by the keyboard to ensure keyboard users can open the expandable. It should match the hover state.

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
{:/nomarkdown}

</div>

















