---
layout: page
title:  Modal windows
category: UI toolkit
---

- [Use Cases](#use)
- [Behavior](#behavior)
- [Content Guidelines](#content)
- [Style](#style)
- [Code](#code) 
{: class="toc"}

<p>Modal windows (also known as dialog boxes or lightboxes) are “pop-up” elements that appear in front of a web page, blocking the main page below. Similar to popup windows or system alerts, modals are unique because they prevent interaction with the page underneath. </p> {: class="lead-in"}

<h2 id="use">Use Cases<span class="cf-code-link">
</span></h2>

<p>Modals help draw attention to an alert or a focused task by preventing interactions with anything on the web page other than the modal itself. Due to their disruptive nature, modal windows should only be used in very specific cases outlined below.</p> 

<div class="content-50 content-first">
  <h5 id="use-when">Only use modals to meet these objectives</h5>
  <p><strong>Feedback or correction</strong></p>
  <p>Modals can be effective for communicating a warning or alert outside the main web page. They can be triggered by a user interaction (like pressing a button to “save”) or without an interaction (like a timeout warning after a period of inactivity).</p>

  <p><strong>Interruption</strong></p>
  <p>Use modals to force the user to complete a task or make a decision that requires their full attention outside of the main workflow. A critical piece of this scenario is that you need the workflow to be interrupted to be effective. If not, explore other UI elements to accomplish the goal.</p> 
  <h5 id="examples">Examples of when to use modals</h5>
  <ul>
    <li>Confirm an action that can’t be undone, such as “Are you sure you want to delete this?</li>
    <li>Display a warning that something is about to expire or timeout</li>
    <li>Save a form that requires inputs separate from the main workflow, like entering a “Save as” file name</li>
    <li>Focus attention on the need to accept or acknowledge something before the user can proceed</li>
  </ul>
</div>
<div class="content-50 content-last">
{::nomarkdown}
<img src="/design-manual/static/img/modals/formexpiring.png" /> 
{:/nomarkdown}
</div>

<h2 id="behavior">Behavior<span class="cf-code-link">
 </span></h2>
 
 
<h2 id="content">Content Guidelines<span class="cf-code-link">
 </span></h2>
  
     
            
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


<h2 id="code">Code<span class="cf-code-link">
</span></h2>

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










