---
layout: page
title:  Modals
category: UI toolkit
---

- [Use](#use)
- [Style](#style)
- [Accessibility](#accessibility)
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
<img src="/design-manual/static/img/modals/formexpiring.png"" /> 
{:/nomarkdown}
</div>

<div class="content-50 content-first">
  <h5 id="do-not-use-when">Do not use when</h5>
  <ul>
    <li>The information or interactions in the modal are crucial to the main user flow. Instead, either integrate the content into the main page or create a new page.</li>
    <li>There is not enough space in the main page to present content, so the modal serves as additional screen real estate. Instead, either integrate the content into the main page or create a new page.</li>
    <li>The interaction is an error warning or status update. Use a notification instead. (<em>NOTE: Place a link here when cf-notifications is published.</em>)</li>
    <li>The interaction is to alert the user that the link they have clicked is for a different domain than ours.</li>
  </ul>
</div>


<h2 id="style">Style<span class="cf-code-link"><a href="https://cfpb.github.io/cf-modals/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-50 content-first">
* Can be triggered by links, buttons, or inactivity timeouts.
* 3px CFPB Green stripe along the top of the window
* 30px padding as default
* 22px Avenir Next Demi-bold black header text
* 16px Avenir Next Regular black body text
* 16px delete minicon within a circle in the upper right hand corner, inline with a "Close" label to its left.
* Gray transparent background with opacity of 0.7
* Next action bar:
    * Gray 5% background
	* 10px padding on top/bottom
	* 30px padding on left/right
	* Primary action buttons and secondary action links left aligned
* Maximum allowed width:
    * Small screens: 270px width
    * Medium and large screens: 630px width
</div>

<div class="content-50 content-last">
{::nomarkdown}
<img src="/design-manual/static/img/modals/savesearch.png"" /> 
{:/nomarkdown}
</div>

#### Headline considerations
<div class="content-67 content-first">

Modals should have a clear headline at the top of the window. If the modal was triggered due to user action, the headline should closely match the text of the triggering element.

</div>


<h2 id="style">Accessibility<span class="cf-code-link"><a href="https://cfpb.github.io/cf-modals/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-67 content-first">
#### General

* Use the `aria-hidden`, `aria-label`, and `aria-labelledby` attributes.
* Add `role="alertdialog"` to the modal.
* Code the close minicon using a `button` element for more semantic markup. 
* Provide separate focus and hover states for the close minicon and any next action buttons.
* When the modal opens, set the focus to the first element users need to interact with. This could be either the first form field in the modal or the primary action button.
* Save the last active element on the parent window, and return the focus there when the modal is closed.

</div>

#### Closing a modal
<div class="content-67 content-first">

Modals are always closable by either:

* clicking/tapping a delete minicon in the upper right corner,
* clicking/tapping the next action buttons or links,
* clicking/tapping anywhere outside the modal, or
* hitting the `ESC` key on a keyboard.

</div>


<div class="content-67 content-first">
#### Mobile devices

When a modal is displayed, its background page should be set to fixed.

Based on our use cases, modals should not scroll. If a modal you have designed or developed does scroll, use an alternative UI element.

</div>


<div class="content-67 content-first">
#### Keyboard navigation

* When the modal opens, the focus should be on the first element users need to interact with. This could be either the first form field in the modal or the primary action button.
* The close minicon should be able to be navigated to by a keyboard.
* The modal should be closable by hitting the `ESC` key on a keyboard.

</div>









