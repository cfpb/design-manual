---
layout: page
title:  Forms
category: Page components
redirect_from: "/ui-toolkit/form-fields.html"
---

- [General principles](#general-principles)
- [Text input fields](#text-input-fields)
- [Labels & helper text](#labels-and-helper-text)
- [Notifications](#notifications)
- [Checkboxes](#checkboxes)
- [Radio buttons](#radio-buttons)
- [Large target areas](#checkboxes-and-radio-buttons-with-large-target-areas)
- [Dropdowns](#dropdowns)
- [Range sliders](#range-sliders)
{: class="toc"}

<!--Intro-->

<div class="content-50 content-first">

{: class="lead-in"}
This page covers use cases, specs, accessibility, and responsive considerations for major form field UI components.

{: class="lead-in"}
In general, forms should be as simple and direct as possible to minimize scrolling (think mobile first). Keep your questions to a minimum and only ask what is absolutely needed. Make inputs as self-explanatory as possible, with a minimum of helper text.

{: class="lead-in"}
Avoid the use of disabled fields where possible, and instead hide disabled fields until they become relevant and can be enabled.

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Source Code</h5>
  <ul class="repo-list">
    <li>
      {% include icons/github.svg %}
    </li>
    <li>
      <a href="https://github.com/cfpb/capital-framework/tree/canary/src/cf-forms"><h4>cf-forms</h4></a>
      <p>Forms in Capital Framework</p>
    </li>
  </ul>
</div>

<!--*****************************    General principles    **********************-->

<div class="content-66 content-first">

## General principles

#### Usability
Choose the appropriate width for text input fields so they match the kind of information requested. This makes it easier for users to quickly grasp what’s being asked.

For example, it’s hard to understand at a glance that a single 1,000 px-wide text field is asking for your phone number or birth date. When possible, be even more explicit with the width by dividing it into known character counts. For instance, social security number should be three characters, then two, then four.  Be mindful of not getting too restrictive, however. This approach could work for phone numbers, but only if international numbers are not permitted.

These types of inputs should always be smaller widths:
- Middle initial
- Date, month, or year
- State abbreviation

#### Responsive design
As the screen size gets smaller, break multi-column inputs into a single, stacked column. Fields that are next to each other on a large screen, should stack at smaller screen sizes. When possible, fields should span the entire width of the screen at the smallest screen sizes.

#### Accessibility
Users of screen readers use the tab key to move focus from one form control to another. Make sure that tab focus order reflects the way you would like users to navigate through the form. Consider whether tabs should move a user down or across the page.

</div>
<br>

<!--****************************    Text Input fields    ************************-->

<div class="content-66 content-first">

## Text input fields

### States
</div>

<div class="content-50 content-first">

#### Default

 - Border: 1 px, Gray 60 (#919395)
 - Height: 35 px
 - Padding: 7px
 - Avenir Next Regular, 16px, Gray (#5a5d61)
 - Text should be in sentence case

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input " placeholder="Placeholder text" type="text">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover

- Border: 2 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input hover" placeholder="Placeholder text" type="text">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus

- Border: 2 px, Pacific (#0072ce)
- Outline: Dotted 1px, Pacific (#0072ce)
- Outline offset: 1px

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input focus" placeholder="Placeholder text" type="text">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Disabled

- Background: Gray 10 (#e7e8e9)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<input class="a-text-input disabled" disabled="true" autocomplete="off" type="text" value="Disabled input">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Multi-line

Use for long-form answers.

- Border: 1 px, Gray 60 (#919395)
- Avenir Next Regular, 16 px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<textarea class="a-text-input" cols="30" rows="5">Placeholder text</textarea>
{:/nomarkdown}

</div>

<br>

<!--******************************-    LABELS AND HELPER TEXT     ******************************-->

## Labels and helper text

<!--******   LABELS     **********-->

### Labels

<div class="content-50 content-first">

#### Basic label

- Avenir Next Medium, 18 px, Black (#101820)
- Positioned above the input field, left aligned
- Margin bottom: 10 px

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="a-label a-label__heading">Label</label>
<input class="a-text-input" type="text">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Inline label

- Avenir Next Regular, 16 px, Black (#101820)
- Positioned to the right of the input field, inline

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox">
    <label class="a-label" for="test_checkbox">Label</label>
</div>
{:/nomarkdown}

</div>

<br>
<!--******   HELPER TEXT     **********-->

<div class="content-66 content-first">

<h3>Helper text</h3>

</div>

<div class="content-66 content-first">

For screen reader accessibility, consider using the aria-describedby attribute for helper text, which gives  screen readers users the information if they need while allowing more flexibility with placement.

</div>

<br>

<div class="content-50 content-first">

#### Placeholder text

Use placeholder text for formatting examples only. Don’t use for instructions. Placeholder text disappears once a user begins typing in the field.

- Avenir Next Regular, 16 px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="form-group">
    <div class="form-group_item">
        <input class="a-text-input" placeholder="example@mail.com" type="text">
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

#### Block helper text

Use block helper text to explain why a piece of information is being requested, address security and privacy concerns, or to suggest ways of providing answers other than providing formatting examples.

- Avenir Next Regular, 16 px, Gray (#5a5d61)
- Margin top: 10 px
- Margin bottom: 10 px

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="a-label a-label__heading" for="helper-example">
    Label
    <small class="a-label_helper a-label_helper__block">
        Use block helper text for instructions.
    </small>
</label>
<div class="o-form_group">
    <input class="a-text-input" type="text" id="helper-example">
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Inline helper text

Use to indicate whether a field is optional or required.
- Avenir Next Regular, 16 px, Gray (#5a5d61)
- Margin bottom: 10 px
- Helper text should be lowercase and placed in parenthesis after the label

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="a-label a-label__heading" for="helper-inline-example">
    Label <small class="a-label_helper">(optional)</small>
</label>

<input class="a-text-input" type="text" id="helper-inline-example">
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Required vs. optional fields

Where possible, design your forms to only include required fields. If it’s not required, ask yourself if it’s really necessary to include at all. Add instructions at the top of the form to clearly indicate that all fields are required unless otherwise noted. If a field is optional, indicate it with inline helper text, as shown here. Don't indicate which fields are required; that would only introduce redundant visual noise.

Try not to design forms consisting mainly of optional fields. If you must do so, mark required field labels only with inline helper text.

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="form-group">
    <div class="form-group_item">
    <label class="a-label a-label__heading">
    Label <small class="a-label_helper">(optional)</small>
    </label>
        <input class="a-text-input" type="text" id="helper-inline-required">
    </div>
    </br>
    <div class="form-group_item">
    <label class="a-label a-label__heading">
    Label <small class="a-label_helper"></small>
    </label>
        <input class="a-text-input" type="text" id="helper-inline-required">
    </div>
</div>
{:/nomarkdown}

</div>

<br>

<!--******************************-    FIELDSET    ******************************-->

## Fieldset

<div class="content-50 content-first">
The fieldset element is used to group several controls as well as labels within a web form.

The fieldset includes:
- Legend
- Block helper text (if necessary)
- Inline labels
- Set of controls
</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="o-form_group">
    <fieldset class="o-form_fieldset">

                <legend class="a-legend">Legend
                    <small class="a-label_helper a-label_helper__block">Use block helper text for instructions.
                    </small>
                </legend>

                <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                    <input class="a-radio" id="is_helpful_1" type="radio" name="is_helpful" value="1">
                        <label class="a-label" for="is_helpful_1">Inline label
                        </label>
                </div>

                <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                    <input class="a-radio" id="is_helpful_2" type="radio" name="is_helpful" value="0">
                        <label class="a-label" for="is_helpful_2">Inline label
                        </label>
                </div>

                <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                    <input class="a-radio" id="is_helpful_3" type="radio" name="is_helpful" value="0">
                        <label class="a-label" for="is_helpful_3">Inline label
                        </label>
                </div>

                <div class="m-form-field m-form-field__radio m-form-field__lg-target">
                    <input class="a-radio" id="is_helpful_4" type="radio" name="is_helpful" value="0">
                        <label class="a-label" for="is_helpful_4">Inline label
                        </label>
                </div>

    </fieldset>
</div>
{:/nomarkdown}

</div>


<div class="content-50 content-first">

#### Legend

The legend serves as the heading for the fieldset
- Avenir Next Medium, 18 px, Black (#101820)
- Positioned above a group of input fields, left aligned

#### Inline label
- Avenir Next Regular, 16 px, Black (#101820)
- Positioned to the right of the input field, inline

#### Set of controls
- Checkboxes
- Radio buttons
- Input fields

</div>

<br>

<!--******************************-    VALIDATION     ******************************-->


<div class="content-66 content-first">

## Notifications
Where possible, display formatting errors immediately using client-side validation so the user doesn’t have to wait until submitting to see what went wrong (this is especially frustrating if the information the user enters the first time around is not cached on submit and they have to fill out all the fields again from scratch). If letters are entered in a date field, if an email address is missing the “@” sign, let the user know right away by showing a field-level error on blur.

That said, it’s a good idea to always validate on the server side even if you use client-side validation for formatting checks. That’s because JavaScript validation may not work on all clients; JavaScript errors could occur no matter the client; and JS validation can easily be bypassed, which raises security concerns.

In general, the best practice for server-side validation is to mark errors with both form-level and field-level errors.

#### Accessibility
For screen reader accessibility, form-level errors should include anchor links to the problem field in question. In general, use distinct icons, contrasting colors, prominent placement, and text to indicate errors. Don’t rely on just one method, as users can have many different accessibility needs (color blind users, visually impaired users, users with motor control issues, etc.).

### States

</div>

<div class="content-50 content-first">

#### Action

The action notification displays when something is happening on the page, such as a page loading notification as search results are found. Use [animated minicons]({{site.github.url}}/brand-guidelines/minicons.html#animation) to reassure the user that an action is functioning as intended.

- Border: 1 px, Gray 40 (#b4b5b6)
- Background: Gray 10 (#f7f8f9)
- Padding: 15px
- H4 (Avenir Next Medium, 18 px) Black (#101820)
- Minicon: 18 px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-notification
            m-notification__visible">
    {% include icons/updating.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">The page is loading…</div>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Success

The success notification displays when an operation has run as expected, such as returning the number of results in a search or a form has been successfully submitted.
- Border: 2 px, CFPB Green (#20aa3f)
- Background: Green 20 (#e2efd8)
- Minicon: 18px, CFPB Green (#20aa3f)

</div>

<div class="content-50 content-last">

<!--insert this form has been submitted successfully message -->
{::nomarkdown}
<div class="m-notification
            m-notification__visible
            m-notification__success">
    {% include icons/approved-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">11 results</div>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Success (field-level)

- Border: 2 px, CFPB Green (#20aa3f)
- Minicon: 18 px, CFPB Green (#20aa3f)
- Success minicon and message should always appear below input field

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__success">
    <input class="a-text-input a-text-input__success"
           type="text"
           placeholder="Placeholder text"
           id="form-input-success"
           aria-describedby="form-input-success_message">
    <div class="a-form-alert a-form-alert__success"
         id="form-input-success_message"
         role="alert">
        {% include icons/success-round.svg %}
        <span class="a-form-alert_text">
            This is an inline alert with a success state.
        </span>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Warning

The warning notification displays when an operation has run as expected, but doesn't have the expected results, such as a search that returned no results.

This notification can also be used to display additional critical information to a user before they submit a form, such as how their data will be used and protected or a reminder that they can’t edit their responses after submitting.

- Border: 2 px, Gold (#ff9e1b)
- Background: Gold 20 (#fff0dd)
- Minicon: 18px, Gold (#ff9e1b)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-notification
            m-notification__visible
            m-notification__warning">
    {% include icons/warning-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">No results found</div>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Warning (field-level)

- Border: 2 px, Gold (#ff9e1b)
- Minicon: 18 px, Gold (#ff9e1b)
- Warning minicon and message should always appear below input field

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__warning">
    <input class="a-text-input a-text-input__warning"
           type="text"
           placeholder="Placeholder text"
           id="form-input-warning"
           aria-describedby="form-input-warning_message">
    <div class="a-form-alert a-form-alert__warning"
         id="form-input-warning_message"
         role="alert">
        {% include icons/warning-round.svg %}
        <span class="a-form-alert_text">
            This is an inline alert with a warning state.
        </span>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Error

The error notification displays when an operation has not run as expected and encounters an error. Use after validating on the server side to call out input errors preventing form submission.

- For screen reader accessibility, include anchor links to the fields that need correction
- Place form-level alerts below the form title
- Border: 2 px, Red (#d14124)
- Background: Red 20 (#fff0dd)
- Minicon: 18px, Red (#d14124)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-notification
            m-notification__visible
            m-notification__error">
    {% include icons/error-round.svg %}
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Page not found</div>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Error (field-level)

- Border: 2 px, Red (#d14124)
- Minicon: 18 px, Red (#d14124)
- Error minicon and message should always appear below input field

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__error">
    <input class="a-text-input a-text-input__error"
           type="text"
           placeholder="Placeholder text"
           id="form-input-error"
           aria-describedby="form-input-error_message">
    <div class="a-form-alert a-form-alert__error"
         id="form-input-error_message"
         role="alert">
        {% include icons/error-round.svg %}
        <span class="a-form-alert_text">
            This is an inline alert with an error state.
        </span>
    </div>
</div>
{:/nomarkdown}

</div>

<div class="content-66 content-first">

<br>

<!--******   CHECKBOXES     **********-->

## Checkboxes

<div class="content-66 content-first">

Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case.

#### Usability
To optimize usability, consider using checkboxes with large target areas. If these won’t fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45px and that it includes the text label.

Selecting the checkbox or touching the label text next to it should toggle the state of the checkbox on and off.

#### Accessibility
To optimize screen reader accessibility, lay out checkboxes vertically rather than horizontally.

### States

</div>

<div class="content-50 content-first">

#### Default
- Height: 20 px
- Width: 20 px
- Margin right: 10 px
- Border: 1 px, Gray 60 (#919395)
- Background: White (#ffffff)
- Avenir Next Regular, 16 px, Black (#101820)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox">
    <label class="a-label" for="test_checkbox">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover
- Border: 2 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__checkbox">
     <input class="a-checkbox hover" type="checkbox" id="test_checkbox_basic_hover">
     <label class="a-label" for="test_checkbox_basic_hover">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus
- Border: 2 px, Pacific (#0072ce)
- Outline: Dotted 1px, Pacific (#0072ce)
- Outline offset: 1px

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox focus" type="checkbox" id="test_checkbox_basic_focus">
    <label class="a-label" for="test_checkbox_basic_focus">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Selected
- Border: 1 px, Gray 60 (#919395)
- Minicon: 18 px, Black (#101820)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
    <label class="a-label" for="test_checkbox_basic_checked">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Disabled
- Border: 1 px, Gray 60 (#919395)
- Background: Gray 10 (#e7e8e9)
- Avenir Next Regular, 16 px, Gray (#5a5d61)
</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__checkbox">
     <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled>
     <label class="a-label" for="test_checkbox_basic_disabled">Label</label>
</div>
{:/nomarkdown}

</div>

<br>

<!--******   NESTED CHECKBOXES     **********-->

<div class="content-66 content-first">

### Nested checkboxes
There are times when checkboxes may be nested with parent/child relationships. This is common when used within filter interactions.

#### Usability
In this case, the following behavior and design should be followed:

- Parent is “collapsed” and displays an expandable arrow at the end of the text
- The label of the parent checkbox should be clickable
- Clicking on the label or arrow toggles the opening/closing of the child options
- In open state, arrow points up; in closed state, arrow points down
- Child options are in black text and not clickable
- Clicking on the parent checkbox selects the parent option and all child options
- Clicking on the parent checkbox does not change the state of the open/close expansion (if it's checked with the children expanded, it stays expanded, for instance)

### States

</div>

<div class="content-50 content-first">

#### Indeterminate
- Border: 2px, Dark Gray (#43484e)
- Background: 12 x 12px square centered, Gray 80 (#75787b)

</div>

<div class="content-50 content-last">

</div>

---

<div class="content-50 content-first">

#### Nested checkboxes (closed)
- Label: Pacific (#0072ce)
- Arrow pointed down

</div>

<div class="content-50 content-last">

</div>

---

<div class="content-50 content-first">

#### Nested checkboxes (open)
- Label: Pacific (#0072ce)
- Arrow pointed up
- Child checkbox options left aligned with parent label

</div>

<br>

<!--******   RADIO BUTTONS     **********-->

<div class="content-66 content-first">

## Radio buttons

Use radio buttons when the user can choose only one option out of a list. Use these for a small number of discrete elements—avoid long lists of radio buttons (usually no more than 6-8 options).When there are more than two options, stack radio buttons vertically.

#### Usability
Leave radio buttons unselected as the default. It’s easy for users to miss that a radio button has been preselected and to submit a form with an erroneous answer.

Never use radio buttons for optional questions. Once a radio button is selected from a list, it or another choice must remain selected and there is no undoing the selection unless you reload the form.

Consider using <a href="#large-target">radio buttons with large target areas</a>. If these won’t fit into your design and you need to use the default style shown below, make sure the target area is at least 45 x 45 px and includes the option text.

#### Accessibility
There are some issues with voiceover reading radio buttons. To get around this, consider using the aria-describedby attribute.

### States

</div>

<div class="content-50 content-first">

#### Default
- Height: 20 px
- Width: 20 px
- Border: 1 px, Gray 60 (#919395)
- Background: White (#ffffff)
- Margin right: 10 px
- Avenir Next Regular, 16 px, Black (#101820)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_default">
    <label class="a-label" for="test_radio_basic_default">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover
- Border: 2 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio">
    <input class="a-radio hover" type="radio" id="test_radio_basic_hover">
    <label class="a-label" for="test_radio_basic_hover">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus
- Border: 2 px, Pacific (#0072ce)
- Outline: Dotted 1px, Pacific (#0072ce)
- Outline offset: 1px

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio">
    <input class="a-radio focus" type="radio" id="test_radio_basic_focus">
    <label class="a-label" for="test_radio_basic_focus">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Selected
- Border: 1 px, Gray 60 (#919395)
- Background: 14 px x 14 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_checked" checked>
    <label class="a-label" for="test_radio_basic_checked">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Disabled
- Border: 1 px, Gray 60 (#919395)
- Background: Gray 10 (#e7e8e9)
- Avenir Next Regular, 16 px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_disabled" disabled>
    <label class="a-label" for="test_radio_basic_disabled">Label</label>
</div>

{:/nomarkdown}

</div>

<br>

<!--******   LARGE TARGET CHECKBOXES AND BUTTONS     **********-->

<div class="content-66 content-first">

## Checkboxes and radio buttons with large target areas

For better usability, consider using checkboxes and radio buttons with large target areas. These are easier to interact with (especially on smaller screens) and harder to miss. They are especially desirable when the form will have heavy mobile usage. Given the amount of real estate they occupy, they’re probably not suited for all use cases; for example, they may not work well for terms of service agreement checkboxes.

### States
</div>

<div class="content-50 content-first">

#### Default

Target area
- Minimum height: 50px
- Background: Gray 10 (#e7e8e9)
- Padding: 15 px

Radio button (or checkbox) and text
- Border: 1 px, Gray 60 (#919395)
- Background: 20 px x 20 px, White (#ffffff)
- Avenir Next Regular, 16 px, Black (#101820)

</div>

<div class="content-50">

{::nomarkdown}
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg">
    <label class="a-label" for="test_radio_lg">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover

Target area
- Border: 2 px, Pacific (#0072ce)
- Background: Gray 10 (#e7e8e9)

Radio button (or checkbox)
- Border: 2 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio hover" type="radio" id="test_radio_lg_hover">
    <label class="a-label" for="test_radio_lg_hover">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus

Target area
- Border: 2 px, Pacific (#0072ce)
- Background: Gray 10 (#e7e8e9)
- Outline: Dotted 1px, Pacific (#0072ce)

Radio button (or checkbox)
- Border: 2 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio focus" type="radio" id="test_radio_lg_hover">
    <label class="a-label" for="test_radio_lg_hover">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Selected

Target area

- Border: 1 px, Pacific (#0072ce)
- Background: Pacific 20 (#d6e8fa)

Radio button (or checkbox)

- Border: 1 px, Gray 60 (#919395)
- Background: 14 x 14 px, Pacific (#0072ce)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_checked" checked>
    <label class="a-label" for="test_radio_lg_checked">Label</label>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Disabled

Radio button (or checkbox)

- Border: 1 px, Gray 60 (#919395)
- Background: Gray 20 (#d2d3d5)
- Avenir Next Regular, 16 px, Gray (#5a5d61)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_disabled" disabled>
    <label class="a-label" for="test_radio_lg_disabled">Label</label>
</div>
{:/nomarkdown}

</div>

<br>

<!--********************************    Dropdowns   **************************************-->

<div class="content-66 content-first">

## Dropdowns

While dropdowns are easy to implement, they aren’t always the best choice from a usability perspective.

Use dropdowns when:
- You have a long list of finite options. If the list is shorter than around six items, radio buttons might work better. If the options include something open ended, a text input field is better.

- You need structured data for a long list. For instance, an open text field for “state” could be entered as Missouri or MO. So if this needs to be standardized, a dropdown facilitates this standardization.

- The list options are familiar to the user. A dropdown is not a good place to introduce new or complicated terms or concepts. For instance, if the question is “What’s your favorite color of the rainbow,” a dropdown could be a good choice. The options are familiar and there are more than six. You don’t want the user to have to read and absorb a lot of new information in a dropdown.

Also keep in mind that dropdowns behave differently on various mobile devices, taking up different amounts of real estate and requiring different interactions. Mobile also doesn’t allow for the use of typeahead to navigate quickly to an item in a list, so navigating long lists can be especially cumbersome.

#### Accessibility

From an accessibility standpoint, browser defaults for multiple select components require the use of a mouse (e.g. holding down the control key and clicking several items). The default components are a poor choice for the visually impaired. If a multi-select component is desired, use custom JavaScript to make it accessible.

### States

</div>

<div class="content-50 content-first">

#### Default

- Height: 35 px
- Padding: 7 px
- Border: 1 px, Gray 60 (#919395)
- Background (down caret box): Gray 10 (#e7e8e9)
- Minicon: Gray 80 (#75787b)
- Body (Avenir Next Regular, 16px), Black (#101820)

</div>

<div class="content-50">

{::nomarkdown}
<div class="m-form-field m-form-field__select">
    <label class="a-label" for="test_select_default">Label</label>
    <div class="a-select">
        <select id="test_select_default">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Hover
- Border: 2 px, Pacific (#0072ce)

</div>

<div class="content-50">

{::nomarkdown}
<div class="m-form-field m-form-field__select">
    <label class="a-label" for="test_select__hover">Label</label>
    <div class="a-select">
        <select id="test_select__hover" class="hover">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus
- Border: 2 px, Pacific (#0072ce)
- Outline: Dotted 1px, Pacific (#0072ce)

</div>

<div class="content-50">

{::nomarkdown}
<div class="m-form-field m-form-field__select">
    <label class="a-label" for="test_select__hover">Label</label>
    <div class="a-select">
        <select id="test_select__hover" class="focus">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
{:/nomarkdown}

</div>

---
 <div class="content-50 content-first">

#### Disabled

- Background: Gray 10 (#e7e8e9)
- Avenir Next Regular, 16 px, Gray (#5a5d61)

</div>

<div class="content-50">

{::nomarkdown}
<div class="m-form-field m-form-field__select">
    <label class="a-label" for="test_select__disabled">Label</label>
    <div class="a-select">
        <select id="test_select__disabled" disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
{:/nomarkdown}

</div>


<br>

<!--**************************************    Range sliders   **********************-->


<div class="content-66 content-first">

## Range sliders
Range sliders can work well for discovery and education, where the inputs are <a href="https://medium.com/@paulvddool/sliders-are-bad-practice-b56c3b7a6e19">a relative quantity and not a specific numeric input</a>. As an example, users can narrow a list of flight options on kayak.com with sliders that show a range of takeoff times. Sliders are an elegant and intuitive way to allow the user to discover which takeoff times will yield the lowest fares.

Because they’re imprecise and difficult to manipulate, range sliders are not a good choice when the user is likely to have a specific number that they want to input. If you choose to implement a slider in this latter case, consider adding steppers or an input box as an alternative means of entering the same data. Also consider the balance between the length of the slider and the number of data points it covers (the range as well as how discrete the points are). The more points to choose from, the harder it is for the user to target a specific number.

#### Accessibility
Make sure that sliders are accessible by keyboard using the arrow keys.

### States
</div>

<div class="content-50 content-first">

#### Default

Track
- Height: 9 px
- Border: 1 px, Gray 40 (#b4b5b6)
- Background: Gray 80 (#75787b)

Handle
- Border: 1 px, Gray 40 (#b4b5b6)
- Background: 45 px x 45 px, Gray 10 (#e7e8e9)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/slider-default.png" />
{:/nomarkdown}

</div>

---

<div class="content-50 content-first">

#### Focus

- Border: 2 px, Pacific (#0072ce)
- Background: Pacific 20 (#d6e8fa)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<img src="{{site.github.url}}/static/img/forms/slider-focus.png" />
{:/nomarkdown}

</div>
