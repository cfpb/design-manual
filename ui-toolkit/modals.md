---
layout: page
title:  Modal windows
category: UI toolkit
---

- [Use](#use)
- [Style](#style)
- [Accessibility](#accessibility)
{: class="toc"}

<div class="content-50 content-first">

<p>Modal windows (also known as dialog boxes or lightboxes) are “pop-up” elements that appear in front of a web page, blocking the main page below. Similar to popup windows or system alerts, modals are unique because they prevent interaction with the page underneath. </p> {: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-modals"><h4>cf-modals</h4></a>
      <p>Modal windows in the Capital Framework</p>
    </li>
  </ul>
</div> 

<h2 id="use">Use<span class="cf-code-link">
  <a href="https://cfpb.github.io/cf-modals/docs/">View code 
    <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

Modal windows (also referred to as popups or lightboxes) are useful for focusing
user attention, and can be triggered by links, buttons, or inactivity timeouts.
They should not be a default interaction method, since they result in an
interruption of standard user flows. Modal windows can confuse users due to
their similarity to popup windows or system alerts, and the find function will
not discover information contained in a modal window.

These guidelines can help you determine what content and information should be
presented in a modal window.

<div class="content-50 content-first">
  <h5 id="use-when">Use when</h5>
  <ul>
    <li>The user should be warned or alerted to a change in the user flow that 
      was not triggered by user interaction. For example, a modal window could 
      be used to warn about an impending inactivity timeout for a form 
      containing sensitive information.</li>
    <li>There is an short part of the flow that is triggered by user 
      interaction, has a clear beginning and end, and requires the user's full 
      attention the whole time. For example, a modal window could be used for a 
      save or export interaction (though alternative UI elements should be 
      explored).</li>
  </ul>
</div>
<div class="content-50 content-last">
{::nomarkdown}
<img src="/design-manual/static/img/modals/formexpiring.png" /> 
{:/nomarkdown}
</div>

<div class="content-50 content-first">
  <h5 id="do-not-use-when">Do not use when</h5>
  <ul>
    <li>The information or interactions in the modal window are crucial to the 
      main user flow. Instead, either integrate the content into the main page 
      or create a new page.</li>
    <li>You want to create additional screen real estate because the space on 
      the main page is is already “full.” Instead, either integrate the content 
      into the main page or create a new page.</li>
    <li>The content of the message  is an error warning or status update. Use a 
      notification instead.</li>
  </ul>
</div>


<h2 id="style">Style<span class="cf-code-link">
  <a href="https://cfpb.github.io/cf-modals/docs/">View code 
    <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-50 content-first">
* 3px CFPB Green stripe along the top of the window
* 30px padding as default
* 22px Avenir Next Regular black header text
* 16px Avenir Next Regular black body text
* 16px delete minicon within a circle in the upper right hand corner, inline
  with a "Close" label to its left.
* Gray transparent background with opacity of 0.7
* Next action bar:
    * Gray 5% background
	* 10px padding on top/bottom
	* 30px padding on left/right
	* Primary action buttons and secondary action links left aligned
* Maximum allowed width:
    * Small screens: 270px width
    * Medium and large screens: 630px width
    
Modal windows should have a clear headline at the top of the window. If the
modal window was triggered due to user action, the headline should closely match the
text of the triggering element.

When a modal window is displayed, its background page should be set to fixed.

Based on our use cases, modal windows should not scroll. If a modal window you have
designed or developed does scroll, use an alternative UI element.
</div>
<div class="content-50 content-last">
{::nomarkdown}
<img src="/design-manual/static/img/modals/savesearch.png" /> 
{:/nomarkdown}
</div>


<h2 id="accessibility">Accessibility<span class="cf-code-link">
  <a href="https://cfpb.github.io/cf-modals/docs/">View code 
    <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-67 content-first">
#### General

Specific coding directions:

* Use the `aria-hidden`, `aria-label`, and `aria-labelledby` attributes.
* Add `role="alertdialog"` to the modal window.
* Code the close minicon using a `button` element for more semantic markup. 

When the modal window opens, set the focus to the first element users need to interact
with. This could be either the first form field in the modal window or the primary
action button.

Provide separate focus and hover states for the close minicon and any next
action buttons.

The close minicon should be able to be accessed by a keyboard.

Save the last active element on the parent window, and return the focus there
when the modal window is closed.

</div>

#### Closing a modal window
<div class="content-67 content-first">

Modal windows are always closable by either:

* clicking/tapping a delete minicon in the upper right corner,
* clicking/tapping the next action buttons or links,
* clicking/tapping anywhere outside the modal window, or
* hitting the `ESC` key on a keyboard.

</div>










