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

In general, forms should be as simple and direct as possible to minimize scrolling (think mobile first!). Keep your queries to a minimum, and ask only what is absolutely needed.  Make inputs as self-explanatory as possible, with a minimum of helper text.  
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

Consider matching text input field lengths to the information requested so that users can quickly grasp what is being asked. It’s hard to understand at a glance that a single 1000-px-wide text field is asking for your phone number. A better affordance is three short text fields for area code, prefix and last four digits.

As the viewport resizes to smaller breakpoints, stack and snap text input fields to 100% width  when inline fields no longer fit into one line.

For screen readers, make sure the tab focus order is correct. Consider the order in which error messages should be read if they fall below the text field. 

</div>


<div class="content-50 content-first">

#### Default

* Border: 1 px #babbbd (Grey 50)
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
* Error minicon below field

</div>

<div class="content-50 content-last">

{::nomarkdown} 
<input class="error" type="text" value="invalid input">
<span class="cf-icon cf-icon-delete-round cf-form_input-icon" role="alert"></span>
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

<!--!!! Change this to a disabled field--> 

{::nomarkdown} 
<input type="text" value="placeholder text" style="border: 1px solid #babbbd; background:#f1f2f2">
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Multi-line

Use for longer-form answers. 

</div>

<div class="content-50 content-last">

{::nomarkdown}  
<textarea>placeholder text</textarea>
{:/nomarkdown}

</div> 


<!--******************************-    LABELS AND HELPER TEXT     ******************************--> 


<h2 id="labels">Labels and helper text<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>



<!--******   LABELS     **********-->

<div class="content-66 content-first">

<h3> Labels</h3>

</div>


<div class="content-50 content-first">

#### Form field labels

* <a href="../identity/typography.html">H4</a>
* Top aligned

</div>

<div class="content-50 content-last">

<!--insert field label and text input-->

</div> 

---

<div class="content-50 content-first">

#### Fieldset labels

* <a href="../identity/typography.html">H3</a>


</div>

<div class="content-50 content-last">

<!--insert fieldset label -->

</div> 

---

<!--******   HELPER TEXT     **********-->

<div class="content-66 content-first">

<h3> Helper text</h3>

</div>


<div class="content-66 content-first">

For screen reader accessibility, consider using the <i>aria-describedby</i> attribute for helper text, which gives users of screen readers the information if they need while allowing more flexibility with placement.


</div>

<div class="content-50 content-first">

#### Block helper text

Use for instructions, to explain why a piece of information is being requested; to address security and privacy concerns; or to 
suggest ways of providing answers other than providing formatting examples. 

* Font: Avenir Next Regular 14 pt, Dark Grey (#43484e)
* Margin: 15pt 0

</div>

<div class="content-50 content-last">

<!--insert field label, block helper text, and text input field-->

</div> 

---
<div class="content-50 content-first">

#### Inline helper text

Use to indicate whether a field is optional or required (see below).   

* Font: Avenir Next Regular 14 pt Dark Grey (#43484e)

</div>

<div class="content-50 content-last">

<!--insert field label, inline helper text, and text input field -->

</div> 

---

<div class="content-50 content-first">

#### Placeholder text

Use placeholder text for formatting examples only. 

Don’t use for instructions. Once an input field is focused, the placeholder text is lost.  

* Font: Avenir Next Regular 16 pt, #919395 (Grey 80) 


</div>

<div class="content-50 content-last">

<!--insert text input field with text like "e.g. (212) 555-1212" and "mm/dd/yyyy" -->

</div> 

---
<div class="content-50 content-first">

#### Required vs. optional fields

Design your forms to include required fields only where possible. 

Add instructions at the top of the form to clearly indicate that all fields are required unless otherwise noted. If a field is optional, indicate it with inline helper text, as shown here. Do not indicate which fields are required, as that would introduce redundant visual noise. 

It’s discouraged to design forms consisting mainly of optional fields. If you must do so, mark required field labels only with inline helper text.


</div>

<div class="content-50 content-last">

<!--insert field label, inline helper text that says "(required)", and text input field -->
<!--insert field label, inline helper text that says "(optional)", and text input field -->


</div> 

---

<div class="content-50 content-first">

#### Error messaging

Include error messaging below the field. Use the appropriate icon. <a href="#">More here.</a>

* Text: <a href="../identity/typography.html">Body copy</a>


</div>

<div class="content-50 content-last">

<!--insert field label, inline helper text that says "(required)", and text input field -->
<!--insert field label, inline helper text that says "(optional)", and text input field -->


</div> 



<!--******************************-    VALIDATION     ******************************--> 


<h2 id="validation">Form validation<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-66 content-first">

Where possible, correct formatting errors immediately using client-side validation so that the user does not have to wait until submitting to see what went wrong. (This is especially frustrating if the information the user enters the first time around is not cached on submit and they have to fill out all the fields again from scratch.) If letters are entered in a date field, if an email address is missing the “@” sign, let the user know right away—show a field-level error on blur. 

That said, it’s a good idea to always validate on the server side even if you use client-side validation for formatting checks. That’s because JavaScript validation may not work on all clients; JavaScript errors could occur no matter the client; and JS validation can easily be bypassed, which raises security concerns.

On form submit, make sure that errors are marked with both form-level AND field-level errors. For usability and accessibility, form-level errors should include anchor links to the problem field in question.

Lastly, some accessibility considerations. Use distinct icons, contrasting colors, prominent placement and text to indicate errors. Don’t rely on just one method, as users can have many different accessibility needs (color blind users, visually impaired users, users with motor control issues). 


</div>



<div class="content-50 content-first">

### Client-side validation

#### Field-level error

</div>

<div class="content-50 content-last">

<!--insert Label (required), error input field, and error message underneath-->

</div> 

---

<div class="content-50 content-first">

### Server-side validation

#### Form-level error

* For screen reader accessibility, include anchor links to the fields that need correction
* Place form-level alerts below the form title

</div>

<div class="content-50 content-last">

<!--insert error with links -->

</div> 

---

<div class="content-50 content-first">


#### Form-level success

* This form has been successfully submitted

</div>


<div class="content-50 content-last">

<!--insert this form has been submitted successfully message -->

</div> 



<!--******************************-    CHECKBOXES AND RADIO BUTTONS     ******************************--> 


<h2 id="checkboxes">Checkboxes and radio buttons<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>



<!--******   CHECKBOXES     **********-->

<div class="content-66 content-first">

<h3> Checkboxes</h3>

Use checkboxes when the user can select more than one option. Make clear with helper text that this is the case.

To optimize usability, consider using <a href="#chunky_checkboxes">checkboxes with large target areas</a>. If these won’t fit into the design and the default style shown below is used, make sure the target area is at least 45 x 45 px and that it includes the text label. 

To optimize screen reader accessibility, lay out checkboxes vertically rather than horizontally.

</div>

<div class="content-50 content-first">

#### Default

* 20x20px
* Fill: #FFFFFF
* Border: 1 px, Grey 80


</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Selected

* Border: Dark grey
* Icon: 18px, CFPB Black


</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

* Border: Pacific blue

</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

* Border: 1 px #babbbd (Grey 50)
* Fill: #75787b (Gray)

</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<!--******   RADIO BUTTONS     **********-->

<div class="content-66 content-first">

<h3> Radio buttons</h3>

Use radio buttons when the user can choose only one option out of a list. Use these for a small number of discrete elements—avoid long lists of radio buttons. 

Leave radio buttons unselected as the default. It’s easy for users to miss that a radio button has been preselected, and to submit a form with an erroneous answer. 

Also, never use radio buttons for optional questions. Once a radio button is selected from a list, it or another choice must remain selected and there is no going back unless you reload the form. 

When there are more than two options, stack radio buttons vertically. 

Consider using  <a href="#chunky_checkboxes">radio buttons with large target areas</a>. If these won’t fit into your design and you need to use the default style shown below, make sure the target area is at least 45 x 45 px and includes the option text.  

For screen readers, be aware that there are some issues with voiceover reading radio buttons. To get around this make sure to use the aria-describedby attribute. 


</div>


<div class="content-50 content-first">

#### Default

* 20x20px
* Fill: #FFFFFF
* Stroke: 1 px, #919395 (Grey 80)


</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Selected


* Border: Dark grey
* Fill: 14x14px, Pacific Blue


</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

* Border: 1 px Pacific blue

</div>

<div class="content-50 content-last">

{::nomarkdown} 
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
{:/nomarkdown}

</div> 

---


<!--******   CHUNKY CHECKBOXES     **********-->

<div class="content-66 content-first">

<h3 id="chunky_checkboxes">Checkboxes and radio buttons with large target areas</h3>


Where possible, try to use checkboxes and radio buttons with large target areas, as shown below. These are easier to interact with and harder to miss. Given the amount of real estate they occupy, they’re probably not suited for use in all cases; for example, they may not work well for terms of service agreement checkboxes.

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

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Default against grey fieldset background 

Same as above

</div>

<div class="content-50 content-last">

{::nomarkdown} 
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

<div class="content-50 content-last">

{::nomarkdown} 
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

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---



<!--**************************************    Dropdowns   **************************************--> 

<h2 id="dropdowns">Dropdowns<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-66 content-first">

Easy to implement and cross-browser-friendly, dropdowns can be a good choice in certain circumstances. When the information being requested is likely to be familiar and is usually encountered as a select (e.g. “select your state”, “select your country of residence”), dropdowns are a fine choice. Where possible, place common selects at the top (e.g. the United States for users that are likely to reside there).

Dropdowns should be avoided where the information being presented is likely to be unfamiliar to the user—especially if this consists of a long list of items. In such cases, consider alternatives like steppers and inset form elements. 

For short lists of selects, say less than 5 items, consider using radio buttons instead where all the choices are exposed at once. 

Also keep in mind that dropdowns behave differently on various mobile clients, taking up different amounts of real estate. Mobile also doesn’t allow for the use of typeahead to navigate quickly to an item in a list, so navigating long lists can be especially cumbersome. Again, conxsider alternatives like progressive disclosure.

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

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Hover

* Border: 2 px #0072ce (Pacific Blue)

</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---
 <div class="content-50 content-first">

#### Disabled

Where possible, use progressive disclosure instead.

Fill: #f1f2f2  (Grey 10)

</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---




<!--**************************************    Range sliders   **************************************--> 

<h2 id="sliders">Range sliders<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-66 content-first">

As a means of providing instant feedback, range sliders can work well for discovery and education. Users booking flights on sites like Kayak.com don’t know in advance which flight time will yield the lowest fare. Using sliders to live update fares is an intuitive and elegant means of discovery. It would be a poor experience if Kayak required users to type specific times in one after another to discover the cheapest fare.

That said, sliders are not a good choice if the user is likely to input a specific value, because they’re difficult to manipulate. If you have a valid reason to implement a slider, consider adding a text input box or steppers as an alternate way to input the same information with minimal pain.  

Put another way, range sliders are best used when the inputs are a relative quantity, not a specific numeric value. 

Consider also the balance between the amount of horizontal real estate a slider takes up and the number of data points it covers. The more data points there are, the harder it is for the user to target a specific number.  

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
{:/nomarkdown}

</div> 

---

<div class="content-50 content-first">

#### Focus

* Stroke: 2 px #0072ce (Pacific Blue)

</div>

<div class="content-50 content-last">

{::nomarkdown} 
{:/nomarkdown}

</div> 

---




















































<!---hi-->




















<!-- <h2 id="variations">Variations<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2> -->

<!--Single line and multi-line text input fields from previous DM version-->

<!--
<div class="content-67 content-last">

<div class="content-33 content-first">
##### Single-line
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<input placeholder="Field label text" type="text">
{:/nomarkdown}

</div> 



<div class="content-33 content-first">
##### Multi-line
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<textarea>Field label text</textarea>
{:/nomarkdown}

</div> 

</div> 
--> 