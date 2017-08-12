---
layout: page
title:  Form fields
category: Page components
redirect_from: "/ui-toolkit/form-fields.html"
---


<ul class="toc">
  <li><a href="#inputs">Text input fields</a></li>
  <li><a href="#labels">Labels and helper text</a></li>
  <li><a href="#validation">Form validation</a></li>
  <li><a href="#checkboxes">Checkboxes and radio buttons</a></li>
  <li><a href="#dropdowns">Dropdowns</a></li>
  <li><a href="#sliders">Range sliders</a></li>
</ul>

<!--Intro-->

<div class="content-50 content-first">


<div class="lead-in">
This page covers use cases, specs, accessibility, and responsive considerations for major form field UI components.

In general, forms should be as simple and direct as possible to minimize scrolling (think mobile first). Keep your queries to a minimum, and ask only what is absolutely needed.  Make inputs as self-explanatory as possible, with a minimum of helper text.
</div>

</div>


<div class="content-50 content-last">
  <h5 class="repo-list-header">Source Code</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/capital-framework/tree/canary/src/cf-forms"><h4>cf-forms</h4></a>
      <p>Forms in Capital Framework</p>
    </li>
  </ul>
</div>

<!--**************************************    Text Input fields    **************************************-->

## Text input fields

<div class="content-66 content-first">
#### Usability
Consider matching text input field lengths to the information requested so that users can quickly grasp what's being asked. It’s hard to understand at a glance that a single 1000-px-wide text field is asking for your phone number. A better affordance is three short text fields for area code, prefix, and last four digits.

#### Responsive design
As the viewport resizes to smaller breakpoints, stack and snap text input fields to 100% width when inline fields no longer fit on one line.

#### Accessibility
For screen readers, make sure the tab focus order is correct. Consider the order in which error messages should be read if they fall below the text field.

### States
</div>

<div class="content-50 content-first">

#### Default

- Border: 1 px, Gray 60 (#919395)
- Height: 35 px
- Padding: 7px
- Text: Avenir Next Regular, 16px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input" placeholder="Placeholder text" type="text">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus

* Border: 2 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input a-text-input__focused" placeholder="Placeholder text" type="text">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Error

* Border: 2 px, Red (#d14124)
* Error minicon and message should appear below the field (see error messaging below)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input a-text-input__error" type="text" value="Invalid input">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Disabled

Where possible, use progressive disclosure instead.

* Border: 1px, Gray 60 (#919395)
* Fill: Gray 5 (#f7f8f9)
* Text: Avenir Next Regular, 16px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input a-text-input__disabled" disabled="true" autocomplete="off" type="text" value="" title="Test input" placeholder="Placeholder text">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Multi-line

Use for longer-form answers.

* Border: 1px, Gray 60 (#919395)
* Text: Avenir Next Regular, 16px, Gray (#5a5d61) 

</div>

<div class="content-50 content-last">

{::nomarkdown}
<textarea class="a-text-input" cols="30" rows="5">Placeholder text</textarea>
{:/nomarkdown}

</div>
<br>
<br>


<!--******************************-    LABELS AND HELPER TEXT     ******************************-->


## Labels and helper text



<!--******   LABELS     **********-->

<div class="content-66 content-first">

### Labels

</div>

<div class="content-50 content-first">

#### Form field labels

* H4 (Avenir Next Medium, 18px), Black (#101820)
* Text is top aligned
* Margin bottom: 10px

</div>

<div class="content-50 content-last">
{::nomarkdown}
<label class="a-label a-label__heading">
    Label
</label>
<input class="a-text-input" type="text">
{:/nomarkdown}
</div>

---

<div class="content-50 content-first">

#### Fieldset legend

* H3 (Avenir Next Medium, 22px), Black (#101820)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<fieldset>
    <legend>Fieldset legend</legend>
    <div class="form-group">
        <div class="form-group_item">
            <label class="a-label" for="name1">
                Label
            </label>
            <input class="a-text-input" type="text" id="name1" value="">
        </div>
        <div class="form-group_item">
            <label class="a-label" for="name2">
                Label
            </label>
            <input class="a-text-input" type="text" id="name2" value="">
        </div>
    </div>
</fieldset>
{:/nomarkdown}

</div>

<!--******   HELPER TEXT     **********-->

<br>

<div class="content-66 content-first">

<h3> Helper text</h3>

</div>

<div class="content-66 content-first">

For screen reader accessibility, consider using the <i>aria-describedby</i> attribute for helper text, which gives users of screen readers the information they need while allowing more flexibility with placement.

</div>

<br>

<div class="content-50 content-first">

#### Block helper text

Use block helper text to explain why a piece of information is being requested, address security and privacy concerns, and suggest ways of providing answers other than providing formatting examples.

- Text: Avenir Next Regular 14 pt, Dark Gray (#43484e)
- Margin bottom: 10px

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="a-label a-label__heading" for="helper-example">
    Label
</label>
<label class="form-label-helper-text" for="helper-example">
Use block helper text for instructions.
</label>
<input class="a-text-input" type="text" id="helper-example">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Inline helper text

Use to indicate whether a field is optional or required.

- Text: Avenir Next Regular, 14px, Dark Grey (#43484e)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="a-label a-label__heading" for="helper-inline-example">
    Label <span class="form-label-helper-text">(optional)</span>
</label>
<input class="a-text-input" type="text" id="helper-inline-example">
{:/nomarkdown}
</div>

---

<div class="content-50 content-first">

#### Placeholder text

Use placeholder text for formatting examples only. Don’t use for instructions. Once an input field is focused, the placeholder text is lost.

- Text: Avenir Next Regular, 16px, Gray (#5a5d61)


</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="form-group">
    <div class="form-group_item">
        <input class="a-text-input" placeholder="e.g. (212) 555-1212" type="text">
    </div>
    <br>
    <div class="form-group_item">
        <input class="a-text-input" placeholder="mm/dd/yyyy" type="text">
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Required vs. optional fields

Where possible, design your forms to include required fields only. Add instructions at the top of the form to clearly indicate that all fields are required unless otherwise noted. If a field is optional, indicate it with inline helper text, as shown here. Don't indicate which fields are required; that would only introduce redundant visual noise.

Try not to design forms consisting mainly of optional fields. If you must do so, mark required field labels only with inline helper text.


</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="form-group">
    <div class="form-group_item">
        <label class="a-label a-label__heading" for="helper-inline-required">
            Label <span class="form-label-helper-text">(required)</span>
        </label>
        <input class="a-text-input" type="text" id="helper-inline-required">
    </div>
    </br>
    <div class="form-group_item">
        <label class="a-label a-label__heading" for="helper-inline-optional">
            Label <span class="form-label-helper-text">(optional)</span>
        </label>
        <input class="a-text-input" type="text" id="helper-inline-optional">
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Error messaging

- Error minicon and message should appear below the field.

- Text: Avenir Next Regular, 16px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/field-level-alert.png" />
{:/nomarkdown}

</div>



<!--******************************-    VALIDATION     ******************************-->
<br>

## Form validation

<div class="content-66 content-first">

Where possible, correct formatting errors immediately using client-side validation so that the user does not have to wait until submitting to see what went wrong. (This is especially frustrating if the information the user enters the first time around is not cached on submit and they have to fill out all the fields again from scratch.) If letters are entered in a date field, if an email address is missing the “@” sign, let the user know right away—show a field-level error on blur.

That said, it’s a good idea to always validate on the server side even if you use client-side validation for formatting checks. That’s because JavaScript validation may not work on all clients; JavaScript errors could occur no matter the client; and JS validation can easily be bypassed, which raises security concerns.

In general, the best practice for server-side validation is to mark errors with both form-level AND field-level errors.

#### Accessibility
For screen reader accessibility, form-level errors should include anchor links to the problem field in question.

In general, use distinct icons, contrasting colors, prominent placement and text to indicate errors. Don’t rely on just one method, as users can have many different accessibility needs (color blind users, visually impaired users, users with motor control issues).

### Field-level alert

</div>

<div class="content-50 content-first">

#### Error

* Use to indicate a problem with a particular field input

</div> 

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/field-level-alert.png" />
{:/nomarkdown}

<br>

</div>

<div class="content-66 content-first">

### Form-level notifications

</div>

<div class="content-50 content-first">

#### Errors

Use after validating on the server side to call out input errors preventing form submission

* For screen reader accessibility, include anchor links to the fields that need correction
* Place form-level alerts below the form title

</div>

<div class="content-50 content-last">

<!--insert error with links -->
{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/form-level-errors.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Action

Use [animated minicons]({{site.github.url}}/brand-guidelines/minicons.html#animation) to reassure the user that an action is functioning as intended.

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/form-level-action.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">


#### Success

Use to confirm that the form has been successfully submitted

</div>


<div class="content-50 content-last">

<!--insert this form has been submitted successfully message -->
{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/form-level-success.png" />
{:/nomarkdown}

</div>



<!--******************************-    CHECKBOXES AND RADIO BUTTONS     ******************************-->


<br>
## Checkboxes and radio buttons


<!--******   CHECKBOXES     **********-->

<div class="content-66 content-first">

<h3> Checkboxes</h3>

Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case.

#### Usability
To optimize usability, consider using <a href="#chunky_checkboxes">checkboxes with large target areas</a>. If these won’t fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45 px and that it includes the text label.

#### Accessibility
To optimize screen reader accessibility, lay out checkboxes vertically rather than horizontally.

<br>

### States
</div>

<div class="content-50 content-first">

#### Default

* 20 x 20px
* Margin right: 10px
* Border: 1px, Gray 60 (#919395)
* Fill: White (#ffffff)
* Text: Avenir Next Regular, 16px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-checkbox" type="checkbox">
<label class="a-checkbox a-checkbox__heading">Option 1</label> 
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focused/Hover

* Border: 2px, Pacific (#0072CE)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-checkbox a-checkbox__focused" type="checkbox">
<label class="a-checkbox a-checkbox__heading">Option 1</label> 
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Selected

* Border: 1px, Pacific (#0072CE)
* Fill: 14x14px, Pacific (#0072CE)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-checkbox a-checkbox__selected" type="checkbox">
<label class="a-checkbox a-checkbox__heading">Option 1</label>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Disabled
Where possible, use progressive disclosure instead.
* Border: 1px, Gray 60 (#919395)
* Fill: Gray 80 (#75787b)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-checkbox a-checkbox__disabled" type="checkbox">
<label class="a-checkbox a-checkbox__heading">Option 1</label>
{:/nomarkdown}

</div>


<!--******   RADIO BUTTONS     **********-->

<br>
<div class="content-66 content-first">

### Radio buttons

Use radio buttons when the user can choose only one option out of a list. Use these for a small number of discrete elements—avoid long lists of radio buttons. When there are more than two options, stack radio buttons vertically.

#### Usability
Leave radio buttons unselected as the default. It’s easy for users to miss that a radio button has been preselected, and to submit a form with an erroneous answer.

Never use radio buttons for optional questions. Once a radio button is selected from a list, it or another choice must remain selected and there is no going back unless you reload the form.

Consider using  <a href="#chunky_checkboxes">radio buttons with large target areas</a>. If these won’t fit into your design and you need to use the default style shown below, make sure the target area is at least 45 x 45 px and includes the option text.


#### Accessibility
For screen readers, be aware that there are some issues with voiceover reading radio buttons. To get around this, consider using the aria-describedby attribute.

### States

</div>

<div class="content-50 content-first">

#### Default

* 20 x 20px
* Margin right: 10px
* Border: 1px, Gray 60 (#919395)
* Fill: White (#ffffff)
* Text: Avenir Next Regular, 16px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/radio-default.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover/Focused

* Border: 2px, Pacific (#0072CE)

</div> 

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/radio-hover.png" />
{:/nomarkdown}

</div>


---

<div class="content-50 content-first">

#### Selected

* Border: 1px, Pacific (#0072CE)
* Fill: 14x14px, Pacific (#0072CE)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/radio-selected.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Disabled

Where possible, use progressive disclosure instead.
* Border: 1px, Gray 60 (#919395)
* Fill: Gray 80 (#75787b)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/radio-disabled.png" />
{:/nomarkdown}

</div>

<!--******   CHUNKY CHECKBOXES     **********-->

<br>

<div class="content-66 content-first">

<h3 id="chunky_checkboxes">Checkboxes and radio buttons with large target areas</h3>


For better usability, consider using checkboxes and radio buttons with large target areas, as shown below. These are easier to interact with and harder to miss. Given the amount of real estate they occupy, they’re probably not suited for use in all cases; for example, they may not work well for terms of service agreement checkboxes.

### States
</div>

<div class="content-50 content-first">

#### Default

Background:

- Min-height: 50px
- Fill: Gray 10 (#e7e8e9)
- Padding: 15px
- Text: 16px, Avenir Next Regular, Black (#101820)

Radio button:

- 20 x 20px
- Fill: White (#FFFFFF)
- Border: 1px, Gray 60 (#919395)

</div>

<div class="content-50">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/large-target-default.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover

Background:
- Fill: Gray 10 (#e7e8e9)
- Border: 2px, Pacific (#0072ce)

Radio button:
- Border: 2px, Pacific (#0072ce)

</div>

<div class="content-50">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/large-target-hover.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Selected

Background:

- Fill: Pacific 20 (#d6e8fa)
- Border: 2px, Pacific (#0072ce)

Radio button:

- Border: 1px, Pacific (#0072ce)
- Fill: 14x14px, Pacific (#0072ce)


</div>

<div class="content-50">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/large-target-selected.png" />
{:/nomarkdown}

</div>

<!--**************************************    Dropdowns   **************************************-->

<br>

## Dropdowns

<div class="content-66 content-first">

Easy to implement and cross-browser-friendly, dropdowns can be a good choice in certain circumstances. When the information being requested is likely to be familiar and is usually encountered as a select (e.g. “select your state”, “select your country of residence”), dropdowns are a fine choice. Where possible, place common selects at the top (e.g. the United States for users that are likely to reside there).

Dropdowns should be avoided where the information being presented is likely to be unfamiliar to the user—especially if this information consists of a long list of items. Consider instead alternatives like <a href="https://www.youtube.com/watch?v=CW4qKTJqHPo" target="blank">steppers</a>, inset form elements and progressive disclosure. For short lists, say less than 5 items, radio buttons are also a good choice.

Also keep in mind that dropdowns behave differently on various mobile clients, taking up different amounts of real estate. Mobile also doesn’t allow for the use of typeahead to navigate quickly to an item in a list, so navigating long lists can be especially cumbersome. Again, consider alternatives.

#### Accessibility
From an accessibility standpoint, browser default multiple select components require the use of a mouse (e.g. holding the control key down and clicking several items). The default components are a poor choice for the visually impaired. If a multi-select component is desired, use custom javascript to make it accessible.

### States

</div>

<div class="content-50 content-first">

#### Default

* Height: 35 px
* Border: 1 px, Gray 60 (#919395)
* Padding: 7 px
* Fill (down caret box): Gray 10 (#e7e8e9)
* Icon (down caret): Gray 80 (#75787b)

</div>

<div class="content-50">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/dropdown-default.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover

* Border: 2px, Pacific (#0072ce)

</div>

<div class="content-50">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/dropdown-hover.png" />
{:/nomarkdown}

</div>

---
 <div class="content-50 content-first">

#### Disabled

Where possible, use progressive disclosure instead.

* Border: 1px, Gray 60 (#919395)
* Fill: Gray 10 (#e7e8e9)

</div>

<div class="content-50">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/dropdown-disabled.png" />
{:/nomarkdown}

</div>


<!--**************************************    Range sliders   **************************************-->

<br>

## Range sliders

<div class="content-66 content-first">

Range sliders can work well for discovery and education, where the inputs are <a href="https://medium.com/@paulvddool/sliders-are-bad-practice-b56c3b7a6e19">a relative quantity and not a specific numeric input</a>. As an example, users can narrow a list of flight options on kayak.com with sliders that show a range of takeoff times. Sliders are an elegant and intuitive way to allow the user to discover which takeoff times will yield the lowest fares.

Because they’re imprecise and difficult to manipulate, range sliders are not a good choice when the user is likely to have one and only specific number that they will want to input. If you do choose to implement a slider in this latter case, consider adding steppers or an input box as an alternative means of entering the same data. Also consider the balance between the length of the slider and the number of data points it covers (the range as well as how discrete the points are). The more points to choose from, the harder it is for the user to target a specific number.

#### Accessibility
Make sure that sliders are accessible by keyboard using the arrow keys.

### States
</div>


<div class="content-50 content-first">

#### Default

Track:

* Fill: Gray 80 (#75787b)
* Border: 1px, Gray 40 (#b4b5b6)
* Height: 9px

Handle:

* 45 x 45 px
* Fill: Gray 10 (#e7e8e9)
* Border: 1px, Gray 40 (#b4b5b6)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/slider-default.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus

* Fill: Pacific 20 (#d6e8fa)
* Border: 2px, Pacific (#0072CE)


</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/slider-focus.png" />
{:/nomarkdown}

</div>
