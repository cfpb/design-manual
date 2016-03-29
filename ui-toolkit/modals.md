---
layout: page
title:  Modal windows
category: UI toolkit
---

- [Use cases](#use)
- [Behavior](#behavior)
- [Content guidelines](#guidelines)
- [Style](#style)
- [Code](#code) 
{: class="toc"}

<p>Modal windows (also known as dialog boxes or lightboxes) are “pop-up” elements that appear in front of a web page, blocking the main page below. Similar to popup windows or system alerts, modals are unique because they prevent interaction with the page underneath. </p> {: class="lead-in"}

<h2 id="use">Use cases<span class="cf-code-link">
</span></h2>

<p>Modals help draw attention to an alert or a focused task by preventing interactions with anything on the web page other than the modal itself. Due to their disruptive nature, modal windows should only be used in very specific cases outlined below.</p>

<h3 id="feedback-correction">Feedback or correction</h3>

<p>Modals can be effective for communicating a warning or alert outside the main web page. They can be triggered by a user interaction (like pressing a button to “save”) or without an interaction (like a timeout warning after a period of inactivity).</p>

<h3 id="interruption">Interruption</h3>
<p>Use modals to force the user to complete a task or make a decision that requires their full attention outside of the main workflow. A critical piece of this scenario is that you need the workflow to be interrupted to be effective. If not, explore other UI elements to accomplish the goal.</p> 

<div class="content-50 content-first">
  <h4 id="examples">Examples of when to use modals</h4>
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
 
<h3 id="opening">Opening a modal</h3>
<p>Modals can be triggered by links, buttons, or even inactivity on a site. When a modal opens, set the focus to the first element users need to interact with. This could be either the first form field in the modal window or the primary action button.</p> 

<h3 id="scrolling">Scrolling within a modal</h3>
<p>Modal windows should not scroll. If a modal contains enough information to require scrolling, use an alternative method of displaying content, such as a different UI element or another content page.</p>

<h3 id="closing">Closing a modal</h3>
<p>Actions inside modals should be clearly marked. There should be a clear path forward (“continue”) and back (“cancel”), in addition to a clearly labeled way to close the modal without taking any action at all. When a modal window is closed, return focus to the last active element on the page behind the modal.</p>

<p>Modal windows are always closable by clicking or tapping:</p>
  <ul>
    <li>A delete minicon or label in the upper right corner</li>
    <li>The next action button or link</li>
    <li>Anywhere outside the modal window</li>
    <li>ESC key on a keyboard</li>
  </ul>

<h3 id="accessible-behavior">Creating accessible behaviors</h3>
<p>Provide separate focus and hover states for the close minicon and any “next” action buttons.</p>

<p>The close minicon needs to be accessible from a keyboard.</p>

<p>The find function (ctrl+F) will not search information contained within a modal window.</p> 

<p>Specific coding directions:</p>
  <ul>
    <li>Use the aria-hidden, aria-label, and aria-labelledby attributes.</li>
    <li>Add role="alertdialog" to the modal window.</li>
    <li>Code the close minicon using a button element for more semantic markup.</li>
  </ul>
 


<h2 id="guidelines">Content guidelines<span class="cf-code-link">
</span></h2>
  
<p>Modal windows should have a clear headline at the top of the window. This headline should clearly state what is happening or what action a modal is prompting the user for. For instance, if a modal appears due to inactivity, the headline should clearly state the action that is about to take place due to that inactivity.</p>
 
<p>Any copy underneath the headline should include clear instructions about what the user needs to do.</p>

<p>If form fields are included in a modal, they should follow standard form field design guidelines.</p> 


            
<h2 id="style">Style<span class="cf-code-link"></h2>

<div class="content-50 content-first">
<h4 id="modal">Modal window box</h4>
  <ul>
    <li>Alignment: centered horizontally and vertically on top of lightbox</li>
    <li>Background: White #ffffff</li> 
    <li>Background lightbox: Gray-80 #75787b, 70% opacity</li>
    <li>Color: Black #101820</li>
    <li>Font: Avenir Next Regular</li>
    <li>Padding: 30px</li>
    <li>Text size body: 16px</li>
    <li>Text size header: 22px</li>
    <li>Top border: 3px CFPB Green #20aa3f</li>
  </ul>  

<h4 id="close">Close area</h4>
  <ul>
    <li>Minicon: “delete-round”</li>
    <li>Minicon color: Pacific #0072ce</li>
    <li>Minicon size: 16px (cf-icon_lg)</li>
    <li>Font: 16px Avenir Next Regular</li>
    <li>Font color: Pacific #0072ce</li>
  </ul>

<h4 id="action-bar">Gray action bar</h4>
  <ul>
    <li>Background: Gray-5 #f7f8f9</li>
    <li>Padding right/left: 30px</li>
    <li>Padding top/bottom: 10px</li>
    <li>Primary action: left aligned <a href="/design-manual/ui-toolkit/buttons.html#variations">button</a></li>
  </ul> 

<h4 id="max-width">Maximum width</h4> 
  <ul>
    <li>270px for small screens</li>
    <li>630px for medium and large screens</li>
  </ul>

<h4 id="inactive">Inactive window</h4>
  <ul> 
    <li>Set page to fixed</li>
  </ul>
</div>
<div class="content-50 content-last">
{::nomarkdown}
<img src="/design-manual/static/img/modals/savesearch.png" /> 
{:/nomarkdown}
</div>


<h2 id="code">Code<span class="cf-code-link"></h2>
<p>Coming soon to Capital Framework</p>
