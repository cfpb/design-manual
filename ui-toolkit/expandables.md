---
layout: page
title:  Expandables
category: UI toolkit
---

- [Use](#use)
- [Style](#style)
- [States](#states)
{: class="toc"}

<div class="content-50 content-first">

Use expandables for secondary information not essential for general understanding of the page content, with long forms or with long lists. 
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5>Repository</h5>
  <ul class="repo-list">
    <li>
      <i class="cf-icon cf-icon-github"></i>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-expandables"><h4>cf-expandables</h4></a>
      <p>Expandables in the Capital Framework</p>
    </li>
  </ul>
</div> 

## Use

The ‘find’ function will not discover information hidden by a collapsed expandable, so use good judgement in deciding which information to hide.

Non-javascript users should default to the expanded state. Otherwise, the default state (expanded or collapsed) will depend on the circumstance.  

## Style

<div class="content-33 content-first">

Standard expandables feature a colored bar, a header, the expand/collapse minicon within a circle and a label (if space allows). Ideally, the entire bar is actionable. The header should clearly indicate what the user will see when the content is expanded. It should not be a call to action.

</div>

<div class="content-67 content-last">

[example expandables image]

</div>

## States

<div class="content-33 content-first">

#### Normal
Gray 20% bar with Pacific Blue minicon.

</div>

<div class="content-67 content-last">

{::nomarkdown}  
<div class="expandable">
    <header class="expandable-header">
        Expandable Header
        <a href="" class="expandable-button">
            <span class="expandable-text">Show</span> <i class="icon-plus-sign"></i>
        </a>
    </header>
    <div class="expandable-content expandable-hidden" style="display: none;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">

#### Hover/Focus

Grey 50% bar with Pacific Blue minicon.

The header should be addressable by the keyboard to ensure keyboard users can open the expandable. It should match the hover state

</div>

<div class="content-67 content-last">

{::nomarkdown}  
<div class="expandable">
    <header class="expandable-header">
        Expandable Header
        <a href="" class="expandable-button">
            <span class="expandable-text">Show</span> <i class="icon-plus-sign"></i>
        </a>
    </header>
    <div class="expandable-content expandable-hidden" style="display: none;">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>
{:/nomarkdown}

</div>

















