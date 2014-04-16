---
layout: page
title:  Buttons
category: UI toolkit
---

- [Style](#style)
- [States](#states)
- [Variations](#variations)
{: class="toc"}

<div class="content-67 content-first">

Buttons signal actions. They should be used sparingly; each additional button on a page reduces visual prominence of a call to action. Destructive actions should be reversible or alert the user to confirm the destructive action. 
{: class="lead-in"}

In contrast, [links] should lead users to another page or further information, or indicate a secondary destructive action.
{: class="lead-in"}

</div>

<div class="content-33 content-last">
<ul class="repo-list">
<li class="list-icon">
    <p class="image-wrap">
      <img src="../static/img/octocat.png" title="Github" width="25px">
    </p>
  </li>
  <li>
    <a href="http://cfpb.github.io/cf-buttons/docs/">
     <h4>CF-buttons</h4>
      <p>Buttons in the Capital Framework</p>
    </a>
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
<button class="btn">Sign up</button>
<button class="btn btn-link">Log in</button><br>
</div>

---

<div class="content-50 content-first">
#### Secondary buttons
<p>Use secondary buttons for actions that happen on the current page.</p>
</div>

<div class="content-50 content-last">
\[include the dimensions here for secondary buttons]
</div>

---

</div>

<div class="content-33 content-first">
### Labels
<p>Use verbs and an active voice. Language should be clear, succinct, and informative. Avoid technical terms such as “form reset” and “submit.” Limit the copy length to 22 characters.</p>
</div>

<div class="content-67 content-last">
\[Add example content]
</div>

<div class="content-33 content-first">
### Icons
<p>Use icons consistently, or don’t use them at all. Each icon should be used exclusively for one action. Icons appear to the left of the button text. Buttons that have “forward” actions have icons to the right of the text, and those with “back” actions have icons to the left.</p>
</div>

<div class="content-67 content-last">
#### Placement
\[insert CSS diagram]
</div>

## States

<div class="content-67 content-first">
#### Normal
<p>Use Pacific Blue with White text.</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Hover
<p>Use Pacific Blue 80% for <code>background-color</code>.</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Focus
<p>Use Pacific Blue 80% for <code>background-color</code>.</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Active
<p>Use Navy 80% for <code>background-color</code>.</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Disabled
<p>Use Gray 20% for <code>background-color</code>, Gray text, and cursor set to <code>not-allowed</code>.</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

## Variations

<div class="content-67 content-first">
#### Call to action
<p>[add description]</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Super button
<p>[add description]</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Button group
<p>[add description]</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Compound action
<p>[add description]</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>

---

<div class="content-67 content-first">
#### Destructive action
<p>Destructive actions use Red Orange for <code>background-color</code>.</p>
<p>When paired with a Primary action, indicate the destructive action using a Destructive action button link to the right of the Primary button.</p>
</div>

<div class="content-33 content-last">
\[insert CF example]
</div>



{::nomarkdown}
{% include ui-toolkit/buttons/custom.html %}
{:/nomarkdown}
