---
layout: page
title:  Form fields
category: Page components
redirect_from: "/ui-toolkit/form-fields.html"
---

- [Style](#style)
- [States](#states)
{: class="toc"}

<div class="content-50 content-first">

Consistent form elements help us quickly design effective web forms. So far we've only developed text inputs, with checkboxes, selects, and radio buttons in the backlog. In the meantime, review our <a href="https://cfpb.github.io/design-manual/guides/effective-forms.html">Effective forms guide</a> for user experience tips. 
{: class="lead-in"}

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

<h2 id="style">Style<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

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

<h2 id="states">States<span class="cf-code-link"><a href="https://cfpb.github.io/cf-forms/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

#### Normal

* Gray 2px solid border

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Focus

* Pacific Blue 2px solid border

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="focus" placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Error

* Red Orange 2px solid border
* Error minicon

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="error" type="text" value="Invalid input">
<span class="cf-icon cf-icon-delete-round cf-form_input-icon" role="alert"></span>
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Success

* CFPB Green 2px solid border
* Success minicon

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="success" type="text" value="Validated input">
<span class="cf-icon cf-icon-approved-round cf-form_input-icon"></span>
{:/nomarkdown}

</div> 
