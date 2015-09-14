---
layout: page
title:  Modals
category: UI toolkit
---

- [Use](#use)
- [Style](#style)
- [Variations](#variations)
{: class="toc"}

<div class="content-50 content-first">

Modals prompt for focused user interaction in a manner that de-emphasizes the rest of the user interface. They often interrupt the standard user flow, and so should be used sparingly and with great discretion.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-modals"><h4>cf-modals</h4></a>
      <p>Modals in the Capital Framework</p>
    </li>
  </ul>
</div> 

<h2 id="use">Use<span class="cf-code-link"><a href="https://cfpb.github.io/cf-modals/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

Modals are especially helpful for focusing user attention in the midst of a complex form or web application.

<div class="content-33 content-first">
  <h5 id="use-when">Use when</h5>
  <ul>
    <li>Moving an involved user interaction to a separate page would be disruptive or harmful to the main user flow.</li>
  </ul>
</div>

<div class="content-33 content-last">
  <h5 id="do-not-use-when">Do not use when</h5>
  <ul>
    <li>Information or interactions are crucial to the main user flow. In such cases, the contents of the modal should be integrated into the main UI of the page.</li>
  </ul>
</div>

Modals should be triggered by links rather than buttons.

**Questions to possibly address:**

* **Should we talk about how information in modals are findable by the `find` function, so info shouldn't be hidden behind them?**
* **Should we talk about accessibility concerns, particularly for non-javascript users?**


<h2 id="style">Style<span class="cf-code-link"><a href="https://cfpb.github.io/cf-modals/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

Standard modals have a base style:

<ul>
	<li>10px CFPB Green stripe along the top of the window</li>
	<li>14px Avenir Next Demi-bold, all caps, dark gray header text</li>
	<li>16px Avenir Next Regular black body text</li>
	<li>Delete minicon within a circle in the upper right hand corner, with a label (if space allows)</li>
	<li>Gray transparent background with opacity of 0.6</li>
</ul>

</div>


**Questions to address:**

* **What height should the CFPB Green stripe be?**
* **What opacity should the transparent background be?**
* **Should there be a gray well at the bottom of the window for next action buttons and links?**
* **What considerations do we need to spell out for small screens, especially around scrolling :-(**




<div class="content-67 content-last">

{::nomarkdown}  
{:/nomarkdown}

</div>

<h2 id="Variations">Variations<span class="cf-code-link"><a href="https://cfpb.github.io/cf-modals/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

#### Interaction Needed
* Gray 10% bar along bottom of window
* Pacific Blue minicon

</div>

<div class="content-67 content-last">

{::nomarkdown}  
{:/nomarkdown}

</div>














