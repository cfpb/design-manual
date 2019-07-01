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
      {% include icons/github.svg %}
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
      View code {% include icons/external-link.svg %}
    </a>
  </span>
</h2>

<div class="content-33 content-first">
### Primary and secondary buttons
<p>Use primary buttons for actions that go to the next step. Use secondary buttons for actions that happen on the current page.</p>

<p>Generous white space lends focus and makes buttons more actionable. Avoid using multiple primary buttons on a single page; there can be multiple secondary buttons per page.</p>
</div>

<div class="content-67 content-last">

<div class="content-67 content-first">
#### Primary buttons
</div>

<div class="content-33 content-last">

{::nomarkdown}
<div class="m-btn-group">
    <button class="a-btn">Sign up</button>
</div>
{:/nomarkdown}

</div>

---

<div class="content-67 content-first">
#### Secondary buttons
</div>

<div class="content-33 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__secondary">Sign up</a>
{:/nomarkdown}

</div>

</div>

---

<div class="content-33 content-first">
### Labels
<p>Labels should be written in sentence case. Use verbs and an active voice. Language should be clear, succinct, and informative.  Limit the copy length to 22 characters.</p>
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
{::nomarkdown}
<button class="a-btn">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% include icons/upload.svg %}</span>
    Upload document
</button>
<br><br>

<div class="m-btn-group">
    <button class="a-btn">
        <span class="a-btn_icon
                     a-btn_icon__on-left">{% include icons/left.svg %}</span>
        Back
    </button>
    <button class="a-btn">
        Next
        <span class="a-btn_icon
                     a-btn_icon__on-right">{% include icons/right.svg %}</span>
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

<button class="a-btn a-btn">
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

### Primary button

<div class="content-33 content-first">
#### Default
* Avenir Next Medium, 16px, (#ffffff)
* Background: Pacific (#0072ce)
* Top and bottom padding: 10px
* Left and right padding: 15px
* Border radius: 4px
</div>

<div class="content-67 content-last">

{::nomarkdown}
<button class="a-btn">Sign up</button>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Hover
* Background: Dark Pacific (#0050b4)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn hover" title="Sign up">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Focused
* Background: Dark Pacific (#0050b4)
* Outline: Dotted 1px, Pacific (#0072ce)
* Outline offset: 1px
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn focus" title="Test button">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Active
* Background: Navy (#254b87)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn active" title="Test button">Sign up</a>
{:/nomarkdown}

</div>
<br>

### Secondary button

<div class="content-33 content-first">
#### Default
* Background: Gray (#5a5d61)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__secondary">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Hover
* Background: Dark Gray (#43484e)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__secondary hover">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Focused
* Background: Dark Gray (#43484e)
* Outline: Dotted 1px, Gray (#5a5d61)
* Outline offset: 1px
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__secondary focus">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Active
* Background: CFPB Black (#101820)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__secondary active">Sign up</a>
{:/nomarkdown}

</div>
<br>

### Destructive button

<div class="content-33 content-first">
#### Default
* Background: Red (#d14124)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__warning">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Hover
* Background: Dark Red (#b63014)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__warning hover">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Focused
* Background: Dark Red (#b63014)
* Outline: Dotted 1px, Red (#d14124)
* Outline offset: 1px
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__warning focus">Sign up</a>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Active
* Background: Dark Gray (#43484e)
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__warning active">Sign up</a>
{:/nomarkdown}

</div>

<br>

### Disabled button

<div class="content-33 content-first">
#### Default/Hover/Active
* Avenir Next Medium, 16px, Gray (#5a5d61)
* Background: Gray 20 (#d2d3d5)
* Cursor set to <code>not-allowed</code>
</div>

<div class="content-67 content-last">

{::nomarkdown}
<a href="#" class="a-btn a-btn__disabled">Sign up</a>
{:/nomarkdown}

</div>

<div class="content-33 content-first">
#### Focused
* Outline: Dotted 1px, Gray 20 (#d2d3d5)
* Outline offset: 1px
</div>

<div class="content-67 content-last">
  {::nomarkdown}
<a href="#" class="a-btn a-btn__disabled focus">Sign up</a>
{:/nomarkdown}
</div>

<br>

## Variations

<div class="content-33 content-first">
#### Large primary button
<p>At the designer’s discretion, use the larger primary button on consumer-facing products for an important call to action.</p>
* Avenir Next Medium, 18px, White (#ffffff)
* Top and bottom padding: 15px
* Left and right padding: 30px
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
    <button class="a-btn">{% include icons/down.svg %}</button>
</div>
{:/nomarkdown}

</div>

---

<div class="content-33 content-first">
#### Destructive action
* Avenir Next Medium, 16px, Red (#d14124)
<p>When paired with a primary action, indicate the destructive action using a destructive action button link to the right of the primary button.</p>
</div>

<div class="content-67 content-last">

{::nomarkdown}
<div class="m-btn-group">
    <button class="a-btn">Action</button>
    <button class="a-btn a-btn__link a-btn__warning">Destructive action</button>
</div>
{:/nomarkdown}

</div>
