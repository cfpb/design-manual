---
layout: page
title:  Form fields
category: UI toolkit
---

- [Style](#style)
- [States](#states)
- [Variations](#variations)
{: class="toc"}

<div class="content-50 content-first">

Lorem ipsum dolor sit amet. 
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <i class="cf-icon cf-icon-github"></i>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-forms"><h4>cf-forms</h4></a>
      <p>Forms in the Capital Framework</p>
    </li>
  </ul>
</div>   

## Style

<div class="content-33 content-first">

#### Text input fields

Text input fields are used for requesting narratives, explanations, or other information that requires lines of free-form text.

</div>

<div class="content-67 content-last">

<div class="content-33 content-first">
##### Single-line
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<input placeholder="Field label text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">
##### Multi-line
</div>

<div class="content-67 content-last">

{::nomarkdown}  
<textarea>Field label text</textarea>
{:/nomarkdown}

</div> 

</div> 

---

<div class="content-33 content-first">

#### Checkboxes

Multiple checkboxes are used for allowing users to select one or more than one option from a list.

Single checkboxes are used to provide authorization or to opt in to a specific agreement.

</div>

<div class="content-67 content-last">

<div class="content-33 content-first">
##### Multiple checkboxes
</div>

<div class="content-67 content-last">

{::nomarkdown} 
<label>Question label</label> 
<form>
<input type="checkbox">A servicemember or veteran<br>
<input type="checkbox">The spouse or dependent of a servicemember or veteran
</form>
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">
##### Single checkbox
</div>

<div class="content-67 content-last">

{::nomarkdown} 
<label>Question label</label> 
<form>
<input type="checkbox">I submit my authorizaton on this matter.
</form>
{:/nomarkdown}

</div> 

</div>

---

<div class="content-33 content-first">

#### Radio buttons

Radio buttons are used for allowing users to select a single option from a list. The default state should always have no option selected. 

</div>

<div class="content-67 content-last">

<div class="content-33 content-first">
##### Radio button list
</div>

<div class="content-67 content-last">

{::nomarkdown} 
<label>Question label</label> 
<form>
<input type="radio" name="borrower-type">I am the borrower<br>
<input type="radio" name="borrower-type">I am submitting on behalf of the borrower
</form>
{:/nomarkdown}

</div> 

</div> 

---

<div class="content-33 content-first">

#### Selects

Select elements, also called drop-downs, are used for allowing users to select a single option from a list. Because the options are only visible when the select menu is open, it's better to use radio buttons instead of select elements unless the options are well-known to users (e.g., a list of U.S. states).

</div>

<div class="content-67 content-last">

<div class="content-33 content-first">
##### Select menu
</div>

<div class="content-67 content-last">

{::nomarkdown} 
<form action="">
<select name="Options">
<option>Option 1</option>
<option>Option 2</option>
<option>Option 3</option>
<option>Option 4</option>
</select>
</form>
{:/nomarkdown}

</div> 

</div> 

## States

<div class="content-33 content-first">

#### Normal

Use a Gray 1px solid border.

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Focus

Use Pacific Blue 1px solid border.

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="focus" placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Error

Use Red Orange 1px solid border with Error minicon.

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="error" type="text" value="Invalid input">
<i class="icon-remove-sign cf-form_input-icon" role="alert"><span class="jekyll-bug" ></span></i>
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Success

Use CFPB Green 1px solid border with Success minicon.

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="success" type="text" value="Validated input">
<i class="icon-ok-sign cf-form_input-icon"><span class="jekyll-bug"></span></i>
{:/nomarkdown}

</div> 

## Variations