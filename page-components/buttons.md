---
layout: page
title:  Buttons
category: Page components
redirect_from: "/ui-toolkit/buttons.html"
---

- [Style](#style)
- [States](#states)
- [Variations](#variations)
{: class="toc"}

<div class="content-50 content-first">

Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action.
{: class="lead-in"}

In contrast, <a href="/design-manual/ui-toolkit/links.html">links</a> should lead users to another page or further information.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Source Code</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-buttons">
        <h4>cf-buttons</h4>
      </a>
      <p>Buttons in Capital Framework</p>
    </li>
  </ul>
</div>

<h2 id="style">
  Style
  <span class="cf-code-link">
    <a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-buttons">
      View code <span class="cf-icon cf-icon-external-link"></span>
    </a>
  </span>
</h2>

<div class="content-33 content-first">
### Primary and Secondary buttons
<p>Use primary buttons for actions that go to the next step. Use secondary buttons for actions that happen on the current page.</p>

<p>Generous white space lends focus and makes buttons more actionable. Avoid using multiple primary buttons on a single page; there can be multiple secondary buttons per page.</p>
</div>

<div class="content-67 content-last">

<div class="content-67 content-first">
#### Primary buttons
* Pacific Blue background color
* 4px rounded corner
* 10px top and bottom padding
* 15px left and right padding
* 16px Avenir Next Medium text in white
* Sentence case
</div>

<div class="content-33 content-last">

{::nomarkdown}
<div class="m-btn-group">
    <button class="a-btn">Sign up</button>
    <button class="a-btn a-btn__link">Log in</button>
</div>
{:/nomarkdown}

</div>

---

<div class="content-67 content-first">
#### Secondary buttons
* Gray background color
</div>

<div class="content-33 content-last">

{::nomarkdown}
<button class="a-btn a-btn__secondary">Secondary button</button>
{:/nomarkdown}

</div>

</div>

---

<div class="content-33 content-first">
### Labels
<p>Use verbs and an active voice. Language should be clear, succinct, and informative.  Limit the copy length to 22 characters.</p>
</div>

<div class="content-67 content-last">

{::nomarkdown}
<button class="a-btn">Sign up</button><br><br>
<button class="a-btn">Continue</button><br><br>
<button class="a-btn">A longer label example</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
### Icons
<p>Use icons consistently. Each icon should be used exclusively for one action. Icons appear to the left of the button text. Buttons that have “forward” actions have icons to the right of the text, and those with “back” actions have icons to the left.</p>
</div>

<div class="content-67 content-last">
#### Placement

{::nomarkdown}
<button class="a-btn">
    <span class="a-btn_icon
                 a-btn_icon__on-left
                 cf-icon
                 cf-icon__before
                 cf-icon-upload"></span>
    Upload document
</button>
<br><br>

<div class="m-btn-group">
    <button class="a-btn">
        <span class="a-btn_icon
                     a-btn_icon__on-left
                     cf-icon
                     cf-icons__before
                     cf-icon-left"></span>
        Back
    </button>
    <button class="a-btn">
        Next
        <span class="a-btn_icon
                     a-btn_icon__on-right
                     cf-icon
                     cf-icon__after
                     cf-icon-right"></span>
    </button>
</div>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">

### Animation

Use [an animated icon]({{site.github.url}}/brand-guidelines/minicons.html#animation)
in a button to reassure the user that the action they are attempting to perform
is functioning as intended.

</div>

<div class="content-67 content-last">
{::nomarkdown}

<button class="a-btn a-btn__disabled">
    Get your estimates
    <span class="a-btn_icon
                 a-btn_icon__on-right
                 cf-icon
                 cf-icon-update
                 cf-icon__after
                 cf-icon__spin"></span>
</button>

{:/nomarkdown}
</div>

## States

<div class="content-33 content-first">
#### Normal
* Pacific background color
* White text
</div>

<div class="content-67 content-last">

{::nomarkdown}
<button class="a-btn">Sign up</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Hover/Focused
* Pacific 80% background color
</div>

<div class="content-67 content-last">

{::nomarkdown}
<button class="a-btn hover">Sign up</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Active
* Navy 80% background color
</div>

<div class="content-67 content-last">

{::nomarkdown}
<button class="a-btn active">Sign up</button>
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
<button class="a-btn a-btn__disabled">Sign up</button>
{:/nomarkdown}

</div>

## Variations

<div class="content-33 content-first">
#### Large Primary button
<p>At the designer’s discretion, use the larger primary button on consumer-facing products for an important call to action.</p>
* 18px Avenir Next Medium text in white
* 15px top and bottom padding
* 30px left and right padding
</div>

<div class="content-67 content-last">

{::nomarkdown}
<button class="a-btn a-btn__super">Sign up</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Button group
</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="m-btn-group">
    <button class="a-btn">Button 1</button>
    <button class="a-btn">Button 2</button>
    <button class="a-btn">Button 3</button>
</div>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Compound action
<p>For multiple actions in a single button unit. Prone to error, avoid if possible.</p>
</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="m-btn-group m-btn-group__combined">
    <button class="a-btn">Button</button>
    <button class="a-btn"><span class="cf-icon cf-icon-down"></span></button>
</div>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Destructive action
* Red Orange type color
<p>When paired with a Primary action, indicate the destructive action using a Destructive action button link to the right of the Primary button.</p>
</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="m-btn-group">
    <button class="a-btn">Action</button>
    <button class="a-btn a-btn__link a-btn__warning">Destructive action</button>
</div>
{:/nomarkdown}

</div>
