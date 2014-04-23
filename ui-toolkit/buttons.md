---
layout: page
title:  Buttons
category: UI toolkit
---

- [Style](#style)
- [States](#states)
- [Variations](#variations)
{: class="toc"}

<div class="content-50 content-first">

Buttons signal actions. They should be used sparingly; each additional button on a page reduces visual prominence of a call to action. Destructive actions should be reversible or alert the user to confirm the destructive action. 
{: class="lead-in"}

In contrast, <a href="/design-manual/ui-toolkit/links.html">links</a> should lead users to another page or further information, or indicate a secondary destructive action.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <i class="cf-icon cf-icon-github"></i>
    </li>
    <li>
      <a href="http://github.com/cfpb/cf-buttons"><h4>cf-buttons</h4></a>
      <p>Buttons in the Capital Framework</p>
    </li>
  </ul>
</div>

## Style

<div class="content-33 content-first">
### Primary and Secondary buttons
<p>Standard buttons use Pacific Blue with a 4px rounded corner. Use Avenir Next, Medium at 14 px, sentence case, for button copy. Generous white space lends focus and makes buttons more actionable.</p>
</div>

<div class="content-67 content-last">

<div class="content-50 content-first">
#### Primary buttons
<p>Use primary buttons for actions that go to the next step. Avoid using multiple primary buttons on a single page; there can be multiple secondary buttons per page.</p>
</div>

<div class="content-50 content-last">

{::nomarkdown}  
<button class="btn">Sign up</button>
<button class="btn btn-link">Log in</button>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">
#### Secondary buttons
<p>Use secondary buttons for actions that happen on the current page.</p>
[include the dimensions here for secondary buttons]
</div>

<div class="content-50 content-last">

{::nomarkdown}  
<button class="btn btn-secondary">Secondary button</button>
{:/nomarkdown}

</div>

---

</div>

<div class="content-33 content-first">
### Labels
<p>Use verbs and an active voice. Language should be clear, succinct, and informative. Avoid technical terms such as “form reset” and “submit.” Limit the copy length to 22 characters.</p>
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<button class="btn">Sign up</button><br><br>
<button class="btn">Continue</button><br><br>
<button class="btn">A longer label example</button>
{:/nomarkdown}

</div>

<div class="content-33 content-first">
### Icons
<p>Use icons consistently. Each icon should be used exclusively for one action. Icons appear to the left of the button text. Buttons that have “forward” actions have icons to the right of the text, and those with “back” actions have icons to the left.</p>
</div>

<div class="content-67 content-last">
#### Placement

{::nomarkdown}  
<button class="btn">
    <i class="btn-icon-left cf-icon cf-icon-upload"><span class="jekyll-bug"></span></i>
    Upload document
</button>
<br><br>

<button class="btn">
    <i class="btn-icon-left icon-chevron-left"><span class="jekyll-bug"></span></i>
    Back
</button>
<button class="btn">
    Next
    <i class="btn-icon-right icon-chevron-right"><span class="jekyll-bug"></span></i>
</button>
</div>
{:/nomarkdown}

## States

<div class="content-33 content-first">
#### Normal
* Pacific Blue background color
* White text
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<button class="btn">Sign up</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Hover/Focused 
* Pacific Blue 80% background color
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<button class="btn hover">Sign up</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Active
* Navy 80% background color
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<button class="btn active">Sign up</button>
{:/nomarkdown}

</div>


---

<div class="content-33 content-first">
#### Disabled
* Gray 20% background color
* Gray text
* Cursor set to <code>not-allowed</code>
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<button class="btn btn-disabled">Sign up</button>
{:/nomarkdown}

</div>

## Variations

<div class="content-33 content-first">
#### Call to action
* [add description]
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<button class="btn">Sign up</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Super button
* [add description]
</div>

<div class="content-67 content-last">

{::nomarkdown}   
<button class="btn btn-super">Sign up</button>
{:/nomarkdown} 

</div>

---

<div class="content-33 content-first">
#### Button group
* [add description]
</div>

<div class="content-67 content-last">

{::nomarkdown}   
<div class="btn-group">
    <button class="btn">Button 1</button>
    <button class="btn">Button 2</button>
    <button class="btn">Button 3</button>
</div>
{:/nomarkdown} 

</div>

---

<div class="content-33 content-first">
#### Compound action
* [add description]
</div>

<div class="content-67 content-last">

{::nomarkdown}   
<div class="btn-group">
    <button class="btn">Button</button>
    <button class="btn btn-compound-action"><i class="icon-caret-down"><span class="jekyll-bug"></span></i></button>
</div>
{:/nomarkdown} 

</div>

---

<div class="content-33 content-first">
#### Destructive action
* Red Orange background color
<p>When paired with a Primary action, indicate the destructive action using a Destructive action button link to the right of the Primary button.</p>
</div>

<div class="content-67 content-last">

{::nomarkdown}   
<button class="btn">Action</button>
<button class="btn btn-link btn-warning">Destructive action</button>
{:/nomarkdown} 

</div>