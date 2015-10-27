---
layout: page
title:  Form fields
category: UI toolkit
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
This page covers use cases, specs, accessibility and responsive considerations for major form field UI components. <br><br>

In general, forms should be as simple and direct as possible to minimize scrolling (think mobile first). Keep your queries to a minimum, and ask only what is absolutely needed.  Make inputs as self-explanatory as possible, with a minimum of helper text.  
</div>

</div>


<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-forms"><h4>cf-forms</h4></a>
      <p>Forms in the Capital Framework</p>
    </li>
  </ul>
</div>   

<!--**************************************    Text Input fields    **************************************--> 

<h2 id="inputs">Text Input Fields<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-66 content-first">
<strong>Usability</strong><br>
Consider matching text input field lengths to the information requested so that users can quickly grasp what is being asked. It’s hard to understand at a glance that a single 1000-px-wide text field is asking for your phone number. A better affordance is three short text fields for area code, prefix and last four digits.

<strong>Responsive design</strong><br>
As the viewport resizes to smaller breakpoints, stack and snap text input fields to 100% width when inline fields no longer fit into one line.

<strong>Accessibility</strong><br>
For screen readers, make sure the tab focus order is correct. Consider the order in which error messages should be read if they fall below the text field. 

</div>


<div class="content-50 content-first">

#### Default

* Border: 1 px #75787b (Grey)
* Height: 27 px
* Padding: 10px 3px


</div>

<div class="content-50 content-last">

{::nomarkdown} 
<input placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Focus

* Border: 2 px #0072ce (Pacific Blue)

</div>

<div class="content-50 content-last">

{::nomarkdown} 
<input class="focus" placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Error

* Border: 2 px #d14124 (Red Orange)
* Error minicon and message should be below the field

</div>

<div class="content-50 content-last">

{::nomarkdown} 
<input class="error" type="text" value="invalid input">
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Disabled

Limit use. Where possible, use progressive disclosure instead. 

* Border: 1 px #babbbd (Grey 50)
* Fill: #f1f2f2 (Gray 10)


</div>

<div class="content-50 content-last">

{::nomarkdown} 
<input class="disabled" disabled="true" autocomplete="off" type="text" value="" title="Test input" placeholder="Placeholder text">
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Multi-line

Use for longer-form answers. 

* Font style: <a href="../identity/typography.html" target="blank">Body copy, sans-serif</a>


</div>

<div class="content-50 content-last">

{::nomarkdown}  
<textarea cols="30" rows="5">Placeholder text</textarea>
{:/nomarkdown}

</div> 


<!--******************************-    LABELS AND HELPER TEXT     ******************************--> 


<h2 id="labels">Labels and helper text<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>



<!--******   LABELS     **********-->

<div class="content-66 content-first">

<h3>Labels</h3>

</div>


<div class="content-50 content-first">

#### Form field labels

* <a href="../identity/typography.html" target="blank">H4</a>
* Top aligned

</div>

<div class="content-50 content-last">
{::nomarkdown} 
<label class="form-label-header">
    Label
</label>
<input type="text">
{:/nomarkdown}
</div> 

---

<div class="content-50 content-first">

#### Fieldset legend

* <a href="../identity/typography.html" target="blank">H3</a>


</div>

<div class="content-50 content-last">

{::nomarkdown} 
<fieldset>
    <legend>Fieldset legend</legend>
    <div class="form-group">
        <div class="form-group_item">
            <label for="name1">
                Label
            </label>
            <input type="text" id="name1" value="">
        </div>
        <div class="form-group_item">
            <label for="name2">
                Label
            </label>
            <input type="text" id="name2" value="">
        </div>
    </div>
</fieldset>
{:/nomarkdown}

</div> 


<!--******   HELPER TEXT     **********-->

<div class="content-66 content-first">

<h3> Helper text</h3>

</div>


<div class="content-66 content-first">

For screen reader accessibility, consider using the <i>aria-describedby</i> attribute for helper text, which gives users of screen readers the information if they need while allowing more flexibility with placement.


</div>

<div class="content-50 content-first">

#### Block helper text

Use block helper text in the following cases:

* To explain why a piece of information is being requested
* To address security and privacy concerns
* To suggest ways of providing answers other than providing formatting examples

* Font: Avenir Next Regular 14 pt, Dark Grey (#43484e)
* Margin: 10px 0

</div>

<div class="content-50 content-last">

{::nomarkdown} 
<label class="form-label-header" for="helper-example">
    Label
</label>
<label class="form-label-helper-text" for="helper-example">
Use block helper text for instructions.
</label>
<input type="text" id="helper-example">
{:/nomarkdown} 
</div> 

---
<div class="content-50 content-first">

#### Inline helper text

Use to indicate whether a field is optional or required (see below).   

* Font: Avenir Next Regular 14 pt Dark Grey (#43484e)

</div>

<div class="content-50 content-last">

{::nomarkdown} 
<label class="form-label-header" for="helper-inline-example">
    Label <span class="form-label-helper-text">(optional)</span>
</label>
<input type="text" id="helper-inline-example">
{:/nomarkdown} 
</div> 

---

<div class="content-50 content-first">

#### Placeholder text

Use placeholder text for formatting examples only. 

Don’t use for instructions. Once an input field is focused, the placeholder text is lost.  

* Font: Avenir Next Regular 16 pt, #919395 (Grey 80) 


</div>

<div class="content-50 content-last">

{::nomarkdown} 
<div class="form-group">
    <div class="form-group_item">
        <input placeholder="e.g. (212) 555-1212" type="text">
    </div>
    <div class="form-group_item">
        <input placeholder="mm/dd/yyyy" type="text">
    </div>
</div>
{:/nomarkdown} 

</div> 

---
<div class="content-50 content-first">

#### Required vs. optional fields

Where possible, design your forms to include required fields only. 

Add instructions at the top of the form to clearly indicate that all fields are required unless otherwise noted. If a field is optional, indicate it with inline helper text, as shown here. Don't indicate which fields are required; that would only introduce redundant visual noise. 

Try not to design forms consisting mainly of optional fields. If you must do so, mark required field labels only with inline helper text.


</div>

<div class="content-50 content-last">

{::nomarkdown} 
<div class="form-group">
    <div class="form-group_item">
        <label class="form-label-header" for="helper-inline-required">
            Label <span class="form-label-helper-text">(required)</span>
        </label>
        <input type="text" id="helper-inline-required">
    </div>
    <div class="form-group_item">
        <label class="form-label-header" for="helper-inline-optional">
            Label <span class="form-label-helper-text">(optional)</span>
        </label>
        <input type="text" id="helper-inline-optional">
    </div>
</div>
{:/nomarkdown} 

</div> 

---

<div class="content-50 content-first">

#### Error messaging

Error minicon and message should appear below the field.

* Text: <a href="../identity/typography.html">Body copy</a>


</div>

<div class="content-50 content-last">

{::nomarkdown} 
<input class="error" type="text" value="" id="form-input-error">
<label class="form-label-error" for="form-input-error">
    <span class="cf-form_input-icon cf-icon cf-icon-delete-round" role="alert"></span>
    This is a required question, please answer.
</label>

{:/nomarkdown}

</div> 



<!--******************************-    VALIDATION     ******************************--> 


<h2 id="validation">Form validation<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-66 content-first">

Where possible, correct formatting errors immediately using client-side validation so that the user does not have to wait until submitting to see what went wrong. (This is especially frustrating if the information the user enters the first time around is not cached on submit and they have to fill out all the fields again from scratch.) If letters are entered in a date field, if an email address is missing the “@” sign, let the user know right away—show a field-level error on blur. 

That said, it’s a good idea to always validate on the server side even if you use client-side validation for formatting checks. That’s because JavaScript validation may not work on all clients; JavaScript errors could occur no matter the client; and JS validation can easily be bypassed, which raises security concerns. 

In general, the best practice for server-side validation is to mark errors with both form-level AND field-level errors.

<strong>Accessibility</strong><br>
For screen reader accessibility, form-level errors should include anchor links to the problem field in question. See the example below.

In general, use distinct icons, contrasting colors, prominent placement and text to indicate errors. Don’t rely on just one method, as users can have many different accessibility needs (color blind users, visually impaired users, users with motor control issues). 


</div>



<div class="content-50 content-first">

### Field-level alerts

#### Field-level errors

* Use to indicate a problem with a particular field input 

</div>

<div class="content-50 content-last">

{::nomarkdown} 
<input class="error" type="text" value="" id="form-input-error">
<label class="form-label-error" for="form-input-error">
    <span class="cf-form_input-icon cf-icon cf-icon-delete-round" role="alert"></span>
    This is a required question, please answer.
</label>

{:/nomarkdown}
</div> 

---

<div class="content-50 content-first">

### Form-level alerts

#### Form-level errors

Use after validating on the server side to call out input errors preventing form submission

* For screen reader accessibility, include anchor links to the fields that need correction
* Place form-level alerts below the form title

</div>

<div class="content-50 content-last">

<!--insert error with links -->
{::nomarkdown} 
<div class="cf-notification cf-notification__error cf-notification__visible">
    <span class="cf-notification_icon cf-notification_icon__error cf-icon cf-icon-delete-round" role="alert"></span>
    <div class="cf-notification_text">
        <p><span class="h4">The following form fields are incomplete or have errors:</span></p>
        <ul class="list list__unstyled short-desc">
            <li><a href="#">What do you think would be a fair resolution to your issue?</a></li>
            <li><a href="#">Which of these best describes your issue?</a></li>
            <li><a href="#">Describe what happened so we can understand the issue...</a></li>
        </ul>
    </div>
</div>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">


#### Form-level success

Use to confirm that the form has been successfully submitted

</div>


<div class="content-50 content-last">

<!--insert this form has been submitted successfully message -->
{::nomarkdown}

<div class="cf-notification cf-notification__success cf-notification__visible">
    <span class="cf-notification_icon cf-notification_icon__success cf-icon cf-icon-approved-round"></span>
    <p class="cf-notification_text"><span class="h4">15 results found.
</p>
</div>
{:/nomarkdown}
</div> 



<!--******************************-    CHECKBOXES AND RADIO BUTTONS     ******************************--> 


<h2 id="checkboxes">Checkboxes and radio buttons<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>



<!--******   CHECKBOXES     **********-->

<div class="content-66 content-first">

<h3> Checkboxes</h3>

Use checkboxes when the user can select more than one option from a list. Make clear with helper text that this is the case.

<strong>Usability</strong><br>
To optimize usability, consider using <a href="#chunky_checkboxes">checkboxes with large target areas</a>. If these won’t fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45 px and that it includes the text label. 

<strong>Accessibility</strong><br>
To optimize screen reader accessibility, lay out checkboxes vertically rather than horizontally.

</div>

<div class="content-50 content-first">

#### Default

* 20x20px
* Fill: #FFFFFF
* Border: 1 px, Grey 80 (#919395)


</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="custom-input_label">
    <input class="custom-input custom-input_input" type="checkbox" name="option1" value="Option 1">
    Option 1
</label>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Selected

* Border: 2 px Dark Grey (#43484E)
* Icon: 18px, CFPB Black


</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="custom-input_label">
    <input class="custom-input custom-input_input" type="checkbox" name="option1" value="Option 1" checked="checked">
    Option 1
</label>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

* Border: 2 px  Pacific Blue (#0072CE)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="custom-input_label">
    <input class="custom-input custom-input_input focus" type="checkbox" name="option1" value="Option 1">
    Option 1
</label>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Disabled

* Border: 1 px #babbbd (Grey 50)
* Fill: #75787b (Gray)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="custom-input_label">
    <input class="custom-input custom-input_input" type="checkbox" name="option1" value="Option 1" disabled="true">
    Option 1
</label>
{:/nomarkdown}

</div> 

 

<!--******   RADIO BUTTONS     **********-->

<div class="content-66 content-first">

<h3> Radio buttons</h3>

Use radio buttons when the user can choose only one option out of a list. Use these for a small number of discrete elements—avoid long lists of radio buttons. When there are more than two options, stack radio buttons vertically.  

<strong>Usability</strong><br>
Leave radio buttons unselected as the default. It’s easy for users to miss that a radio button has been preselected, and to submit a form with an erroneous answer. 

Never use radio buttons for optional questions. Once a radio button is selected from a list, it or another choice must remain selected and there is no going back unless you reload the form. 

Consider using  <a href="#chunky_checkboxes">radio buttons with large target areas</a>. If these won’t fit into your design and you need to use the default style shown below, make sure the target area is at least 45 x 45 px and includes the option text.  


<strong>Accessibility</strong><br>
For screen readers, be aware that there are some issues with voiceover reading radio buttons. To get around this, consider using the aria-describedby attribute. 


</div>


<div class="content-50 content-first">

#### Default

* 20x20px
* Fill: #FFFFFF
* Stroke: 1 px, #919395 (Grey 80)


</div>

<div class="content-50 content-last">

{::nomarkdown} 
<label class="custom-input_label">
    <span class="custom-input_text">Option 1</span>
    <input class="custom-input custom-input_input" type="radio" name="custom-input-example">
    <span class="custom-input_radio"></span>
</label>
<label class="cf-input_label">
    <span class="cf-input_text">Option 1</span>
    <input class="cf-input cf-input_input" type="radio" name="cf-input-example_default">
    <span class="cf-input_radio"></span>
</label>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Selected


* Border: 1 px  Pacific Blue (#0072CE)
* Fill: 14x14px, Pacific Blue


</div>

<div class="content-50 content-last">

{::nomarkdown}

<label class="custom-input_label is-enabled is-checked">
    <span class="custom-input_text">Option 1</span>
    <input class="custom-input custom-input_input" type="radio" name="custom-input-example">
    <span class="custom-input_radio"></span>
</label>
<label class="cf-input_label">
    <span class="cf-input_text">Option 1</span>
    <input class="cf-input cf-input_input" type="radio" name="cf-input-example_selected" checked="checked">
    <span class="cf-input_radio"></span>
</label>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

* Border: 2 px  Pacific Blue (#0072CE)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="custom-input_label is-enabled is-hovered">
    <span class="custom-input_text">Option 1</span>
    <input class="custom-input custom-input_input" type="radio" name="custom-input-example">
    <span class="custom-input_radio"></span>
</label>
<label class="cf-input_label">
    <span class="cf-input_text">Option 1</span>
    <input class="cf-input cf-input_input focus" type="radio" name="cf-input-example_hovered" checked="checked">
    <span class="cf-input_radio"></span>
</label>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Disabled
Where possible, use progressive disclosure instead.

* Border: 1 px #babbbd (Grey 50)
* Fill: #75787b (Gray)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label class="custom-input_label is_disabled">
    <span class="custom-input_text">Option 1</span>
    <input class="custom-input custom-input_input" type="radio" name="custom-input-example" disabled="true">
    <span class="custom-input_radio"></span>
</label>
<label class="cf-input_label">
    <span class="cf-input_text">Option 1</span>
    <input class="cf-input cf-input_input" type="radio" name="cf-input-example_disabled" disabled="true">
    <span class="cf-input_radio"></span>
</label>
{:/nomarkdown}

</div> 




<!--******   CHUNKY CHECKBOXES     **********-->

<div class="content-66 content-first">

<h3 id="chunky_checkboxes">Checkboxes and radio buttons with large target areas</h3>


For better usability, consider using checkboxes and radio buttons with large target areas, as shown below. These are easier to interact with and harder to miss. Given the amount of real estate they occupy, they’re probably not suited for use in all cases; for example, they may not work well for terms of service agreement checkboxes.

</div>


<div class="content-50 content-first">

#### Default

Background:

* Min-height: 50px
* Fill: #e3e4e5
* Padding: 15px

Radio button: 

* 20px x 20px
* Fill: #FFFFFF
* Stroke: 1 px #919395 (Grey 80)

</div>

<div class="content-50">

{::nomarkdown}
<div class="form-l">
    <div class="form-l_col form-l-inset">
        <div class="form-l-inset_container">
            <label class="custom-input_label"><span class="custom-input_text">
                Yes
            </span><input class="custom-input js-additional-field_trigger custom-input_input" type="radio" name="custom-input-example"><span class="custom-input_radio"></span></label>
        </div>
    </div>
</div>
<div class="form-l">
    <div class="form-l_col form-l-inset">
        <div class="form-l-inset_container">
            <label class="cf-input_label">
                <span class="cf-input_text">I am awesome</span>
                <input class="cf-input cf-input_input" type="radio" name="cf-input-example_default-inset">
                <span class="cf-input_radio"></span>
            </label>
        </div>
    </div>
</div>


{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Selected

Background:

* Fill: #cce3f5 (Pacific 20)
* Stroke: 1 or 2 px #a5a7aa (Pacific blue)

Radio button:

* Stroke: 1 px #a5a7aa (Pacific blue)


</div>

<div class="content-50">

{::nomarkdown}
<div class="form-l">
    <div class="form-l_col form-l-inset">
        <div class="form-l-inset_container is-checked">
            <label class="custom-input_label is-enabled is-checked"><span class="custom-input_text">
                Yes
            </span><input class="custom-input js-additional-field_trigger custom-input_input" type="radio" name="custom-input-example"><span class="custom-input_radio"></span></label>
        </div>
    </div>
</div>    

<div class="form-l">
    <div class="form-l_col form-l-inset">
        <div class="form-l-inset_container">
            <label class="cf-input_label">
                <span class="cf-input_text">Option 1</span>
                <input class="cf-input cf-input_input" type="radio" name="cf-input-example_selected-inset" checked="checked">
                <span class="cf-input_radio"></span>
            </label>
        </div>
    </div>
</div>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

Background:

* Fill: #e3e4e5 (Grey 20)
* Stroke: #a5a7aa (Pacific blue)

Radio button:

* Stroke: #a5a7aa (Pacific blue)

</div>

<div class="content-50">

{::nomarkdown}
<div class="form-l">
    <div class="form-l_col form-l-inset">
        <div class="form-l-inset_container is-hovered">
            <label class="custom-input_label is-enabled is-hovered"><span class="custom-input_text">
                Yes
            </span><input class="custom-input js-additional-field_trigger custom-input_input" type="radio" name="custom-input-example"><span class="custom-input_radio"></span></label>
        </div>
    </div>
</div>    

<div class="form-l">
    <div class="form-l_col form-l-inset">
        <div class="form-l-inset_container">
            <label class="cf-input_label">
                <span class="cf-input_text">Option 1</span>
                <input class="cf-input cf-input_input focus" type="radio" name="cf-input-example_hovered-inset" checked="checked">
                <span class="cf-input_radio"></span>
            </label>
        </div>
    </div>
</div>
{:/nomarkdown}

</div> 





<!--**************************************    Dropdowns   **************************************--> 

<h2 id="dropdowns">Dropdowns<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-66 content-first">

Easy to implement and cross-browser-friendly, dropdowns can be a good choice in certain circumstances. When the information being requested is likely to be familiar and is usually encountered as a select (e.g. “select your state”, “select your country of residence”), dropdowns are a fine choice. Where possible, place common selects at the top (e.g. the United States for users that are likely to reside there).

Dropdowns should be avoided where the information being presented is likely to be unfamiliar to the user—especially if this information consists of a long list of items. Consider instead alternatives like <a href="https://www.youtube.com/watch?v=CW4qKTJqHPo" target="blank">steppers</a>, inset form elements and progressive disclosure. For short lists, say less than 5 items, radio buttons are also a good choice.

Also keep in mind that dropdowns behave differently on various mobile clients, taking up different amounts of real estate. Mobile also doesn’t allow for the use of typeahead to navigate quickly to an item in a list, so navigating long lists can be especially cumbersome. Again, consider alternatives.

<strong>Accessibility</strong><br>
From an accessibility standpoint, browser default multiple select components require the use of a mouse (e.g. holding the control key down and clicking several items). The default components are a poor choice for the visually impaired. If a multi-select component is desired, use custom javascript to make it accessible.

</div>


<div class="content-50 content-first">

#### Default

* Height: 27 px  
* Border: #babbbd (Grey 50)
* Padding: 15px
* Down caret box: #f1f2f2 (Grey 10)
* Down caret: #919395 (Grey 80)


</div>

<div class="content-50">

{::nomarkdown}
<div class="custom-select is-enabled">
    <select class="custom-select_select" data-placeholder="Please select">
        <option value>Please select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
    </select>
    <span class="custom-select_icon cf-icon cf-icon-down"></span>
    <span class="custom-select_text custom-select_placeholder">Please select</span>
</div>
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

* Border: 2 px #0072ce (Pacific Blue)

</div>

<div class="content-50">

{::nomarkdown}
<div class="custom-select is-enabled is-hovered">
    <select class="custom-select_select" data-placeholder="Please select">
        <option value>Please select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
    </select>
    <span class="custom-select_icon cf-icon cf-icon-down"></span>
    <span class="custom-select_text custom-select_placeholder">Please select</span>
</div>
{:/nomarkdown}

</div> 

---
 <div class="content-50 content-first">

#### Disabled

Where possible, use progressive disclosure instead.

Fill: #f1f2f2  (Grey 10)

</div>

<div class="content-50">

{::nomarkdown}
<div class="custom-select is-enabled disabled">
    <select disabled="true" class="custom-select_select" data-placeholder="Please select">
        <option value>Please select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
    </select>
    <span class="custom-select_icon cf-icon cf-icon-down"></span>
    <span class="custom-select_text custom-select_placeholder">Please select</span>
</div>
{:/nomarkdown}

</div> 






<!--**************************************    Range sliders   **************************************--> 

<h2 id="sliders">Range sliders<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-66 content-first">

Range sliders can work well for discovery and education, where the inputs are <a href="https://medium.com/@paulvddool/sliders-are-bad-practice-b56c3b7a6e19">a relative quantity and not a specific numeric input</a>. As an example, users can narrow a list of flight options on kayak.com with sliders that show a range of takeoff times. Sliders are an elegant and intuitive way to allow the user to discover which takeoff times will yield the lowest fares.  

Because they’re imprecise and difficult to manipulate, range sliders are not a good choice when the user is likely to have one and only specific number that they will want to input. If you do choose to implement a slider in this latter case, consider adding steppers or an input box as an alternative means of entering the same data. Also consider the balance between the length of the slider and the number of data points it covers (the range as well as how discrete the points are). The more points to choose from, the harder it is for the user to target a specific number.  

<strong>Accessibility</strong><br>
Make sure that sliders are accessible by keyboard using the arrow keys.

</div>


<div class="content-50 content-first">

#### Default

Track:

* Fill: #919395 (Grey 80)
* Stroke:  1 px #BABBBD (Grey 50)
* Height: 9 px

Handle:

* 45 x 45 px
* Fill: #F1F2F2 (Grey 10)
* Stroke: 1 px #BABBBD (Grey 50)


</div>

<div class="content-50 content-last">

{::nomarkdown}
<label for="range-slider">Credit Score</label>
<input id="range-slider" type="range" min="600" max="850">
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Focus

* Stroke: 2 px #0072ce (Pacific Blue)

</div>

<div class="content-50 content-last">

{::nomarkdown}
<label for="range-slider">Credit Score</label>
<input id="range-slider" class="focus" type="range" min="600" max="850">
{:/nomarkdown}

</div> 
