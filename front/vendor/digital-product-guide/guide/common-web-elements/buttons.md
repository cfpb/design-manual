---
published: true
layout: document
document_label: buttons
stage: final
css: "button-example"
sponsor: "Nicholas Wallen, Mollie Bates, David Kennedy"
title: Buttons
subtitle: "Button presentation, usage and interaction"

---

## Visual style
* Standard buttons are Pacific Blue with a 4 px rounded corner 
* Button text should be Avenir Next, Medium at 14 px 
* There should be 10 px top and bottom padding and 15 px left and right padding.


## Button Usage

### Buttons vs. links

<div class="guide-example">
    <a class="button" href="">Save</a>
    <a class="button button-link" href="">Learn more</a>
</div>

* Use buttons for actions
* Use links for going to another page or showing information

### Call to action

<div class="guide-example">
    <a class="button" href="">Start</a>
    <a class="button button-super" href="">Sign up</a>
</div>

* Use a primary or super button to emphasize a link or action
* Don't overdo it - each additional button reduces the visual prominence of the call to action 

### Destructive actions

<div class="guide-example">
    <a class="button button-link button-warning" href="">Delete</a>
    <a class="button" href="">Update</a>
</div>

* Use a link-styled button to indicate a secondary, destructive action
* Ideally, make the action reversible
* If that isn't possible to implement, use an alert to check that the user really wants to do the destructive action

## Button types

### Primary

<div class="guide-example">
    <a class="button" href="">Primary</a>
    <a class="button button-super" href="">Large primary</a>
</div>

* Use for actions that go to the next step
* Avoid having multiple primary buttons on a single page
* At the designer's discretion, use the larger primary button on consumer-facing products for an important call to
  action
* Large primary buttons are 18 px type with 15 px top and bottom padding and 30px left and right padding

### Secondary 

<div class="guide-example">
    <a class="button button-secondary" href="">Secondary</a>
</div>

* Use for actions that happen on the current page
* There can be multiple secondary buttons per page

### Warning 

<div class="guide-example">
    <a class="button button-warning button-icon" href=""><i class="icon-trash"><span class="jekyll-bug"></span></i> Warning</a>
</div>

* You may want to use this kind of button when confirming a destructive action
* Warning buttons should look scary and have scary text
* Consider using an icon for additional visual feedback that the action is desctructive
* Avoid, if possible, use a [Destructive Action Pattern](#destructive_actions)

### Compound 

<div class="guide-example">
    <div class="button-group">
        <a class="button" href="">Compound</a>
        <a class="button secondary-action" href=""><i class="icon-caret-down"><span class="jekyll-bug"></span></i></a>
    </div>
</div>

* Multiple actions in a single button unit
* Prone to error 
* Avoid in CFPB digital products, if possible

### Tags 
* Tag style in relation to buttons is TBD
* Tag buttons should be distinct from buttons that perform actions


## Button text

### Use
* Verbs and an active voice
* Clear, informative and succinct language
* Sentence case

### Avoid
* Technical terms - e.g. use "delete", not "form reset", avoid "submit"
* Lots of words - eye tracking shows users are less likely to read long labels
* Button text over 22 characters long

## Button icons

### Use
* Use (or don't use) icons consistently 
* Use the same icon for the same action 

### Placement

<div class="guide-example">
    <a class="button button-icon" href=""><i class="icon-chevron-left"><span class="jekyll-bug"></span></i> Previous</a>
    <a class="button button-icon" href="">Next <i class="icon-chevron-right"><span class="jekyll-bug"></span></i></a>
    <a class="button button-icon" href=""><i class="icon-plus"><span class="jekyll-bug"></span></i> Add</a>
    <a class="button button-icon" href=""><i class="icon-twitter"><span class="jekyll-bug"></span></i> Tweet</a>
</div>

* Buttons that go "forward" have icons to the right of text
* Buttons that go "back" have icons to the left of the text
* Buttons that perform an action or reveal information have icons to the left of the text

## Button States

| Normal | Hover | Focus\* | Active | Disabled |
| ------ | ----- | ------ | ------ | -------- |
<div class="guide-example"><a class="button" href="">Primary</a></div> | <div class="guide-example"><a class="button hover" href="">Primary</a></div> | <div class="guide-example"><a class="button focus" href="">Primary</a></div> | <div class="guide-example"><a class="button active" href="">Primary</a></div> | <div class="guide-example"><a class="button button-disabled" href="">Disabled</a></div>
<div class="guide-example"><a class="button button-secondary" href="">Secondary</a></div> | <div class="guide-example"><a class="button button-secondary hover" href="">Secondary</a></div> | <div class="guide-example"><a class="button button-secondary focus" href="">Secondary</a></div> | <div class="guide-example"><a class="button button-secondary active" href="">Secondary</a></div> | <div></div>
<div class="guide-example"><a class="button button-warning button-icon" href=""><i class="icon-warning-sign"><span class="jekyll-bug"></span></i> Warning</a></div> | <div class="guide-example"><a class="button button-warning button-icon hover" href=""><i class="icon-warning-sign"><span class="jekyll-bug"></span></i> Warning</a></div> | <div class="guide-example"><a class="button button-warning button-icon focus" href=""><i class="icon-warning-sign"><span class="jekyll-bug"></span></i> Warning</a></div> | <div class="guide-example"><a class="button button-warning button-icon active" href=""><i class="icon-warning-sign"><span class="jekyll-bug"></span></i> Warning</a></div> | <div></div>

_* N.B.: Focus styles are currently identical to hover styles, but will show browser-default focus indicators,
typically a dotted outline or a small blue glow._
