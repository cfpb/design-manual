---
layout: page
title:  Form fields
category: UI toolkit
---

- [Style](#style)
- [States](#states)
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

<h2 id="style">Style<span class="cf-code-link"><a href="http://cfpb.github.io/cf-forms/docs/">View code <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

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

<h2 id="states">States<span class="cf-code-link"><a href="http://cfpb.github.io/cf-forms/docs/">View code <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

<div class="content-33 content-first">

#### Normal

* Gray 1px solid border

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Focus

* Pacific Blue 1px solid border

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="focus" placeholder="placeholder text" type="text">
{:/nomarkdown}

</div> 

---

<div class="content-33 content-first">

#### Error

* Red Orange 1px solid border
* Error minicon

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

* CFPB Green 1px solid border
* Success minicon

</div>

<div class="content-67 content-last">

{::nomarkdown} 
<input class="success" type="text" value="Validated input">
<i class="icon-ok-sign cf-form_input-icon"><span class="jekyll-bug"></span></i>
{:/nomarkdown}

</div> 

<!-- <h2 id="variations">Variations<span class="cf-code-link"><a href="http://cfpb.github.io/cf-forms/docs/">View code <i class="cf-icon cf-icon-external-link"></i></a></span></h2> -->