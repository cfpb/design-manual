---
layout: page
title:  Modals
category: UI toolkit
---

- [Use](#use)
- [Accessibility](#accessibility)
- [Style](#style)
{: class="toc"}

<div class="content-50 content-first">

<p>Modals serve as alerts by de-emphasizing the rest of the user interface. Due to their disruptive nature, modals should be used sparingly and with great discretion.</p>
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

Modals (also referred to as lightboxes) are useful for focusing user attention. They should not be a default interaction method, since they result in an interruption of standard user flows. Modals also may have negative connotations for users with popup windows or system alerts.

The `find` function will not discover information contained in a modal. Please use good judgment in deciding what content and information is hidden within a modal.

<div class="content-50 content-first">
  <h5 id="use-when">Use when</h5>
  <ul>
    <li>The user should be warned or alerted to a imminent deviation from the typical user flow that was not triggered by active user interaction. For example, a modal could be used to warn about an impending inactivity timeout for a form containing sensitive information.</li>
    <li>There is an short part of the flow that is triggered by user interaction, has a clear beginning and end, and requires the user's full attention the whole time. For example, a modal could be used for either a save or export interaction (though alternative UI elements should be explored).</li>
  </ul>
</div>
<div class="content-50 content-last">
{::nomarkdown}
[EXAMPLE]  
{:/nomarkdown}
</div>

<div class="content-50 content-first">
  <h5 id="do-not-use-when">Do not use when</h5>
  <ul>
    <li>The information or interactions in the modal are crucial to the main user flow. Instead, either integrate what would have gone in the modal into the main UI of the page, or create an additional page.</li>
    <li>There is not enough space in the main page to present content, so the modal serves as additional screen real estate. Instead, either integrate the content into the main page or create a new page.</li>
    <li>The interaction is a commonly understood and expected behavior on the web, such as an external link directing to a different domain as the page it's on.</li>
    <li>The interaction is an error warning or status update. Use our [alerts and notification elements](https://github.com/cfpb/cf-notifications) instead.</li>
    
  </ul>
</div>
<div class="content-50 content-last">
{::nomarkdown}
[EXAMPLES]  
{:/nomarkdown}
</div>


<h2 id="style">Accessibility<span class="cf-code-link"><a href="https://cfpb.github.io/cf-modals/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-67 content-first">
#### Mobile devices
</div>

<div class="content-33 content-last">
{::nomarkdown} 
[EXAMPLE]
{:/nomarkdown}
</div>

<div class="content-67 content-first">
#### Keyboard navigation
</div>

<div class="content-33 content-last">
{::nomarkdown} 
[EXAMPLE]
{:/nomarkdown}
</div>

<div class="content-67 content-first">
#### Non-Javascript users
</div>

<div class="content-33 content-last">
{::nomarkdown} 
[EXAMPLE]
{:/nomarkdown}
</div>

<h2 id="style">Style<span class="cf-code-link"><a href="https://cfpb.github.io/cf-modals/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

<ul>
	<li>10px CFPB Green stripe along the top of the window</li>
	<li>14px Avenir Next Demi-bold, all caps, dark gray header text</li>
	<li>16px Avenir Next Regular black body text</li>
	<li>Delete minicon within a circle in the upper right hand corner, with a label (if space allows)</li>
	<li>Gray transparent background with opacity of 0.6</li>
	<li>Gray 10% bar along bottom of window to contain next action buttons</li>
</ul>

</div>

<div class="content-67 content-last">
[EXAMPLE]
</div>

Modals can be triggered by links, buttons, or inactivity timeouts.


**Questions to address:**

* **We need to spell out the rules around height and width of the modal.**
* **What height should the CFPB Green stripe be?**
* **What opacity should the transparent background be?**
* **Remember to include explicit direction around coding for accessibility in this section.**

<style scoped>

</style>










