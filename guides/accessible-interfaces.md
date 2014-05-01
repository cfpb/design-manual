---
layout: page
title: Accessible interfaces
category: Guides
---

- [Perceivable](#perceivable)
- [Operable](#operable)
- [Understandable](#understandable)
- [Robust](#robust)
{: class="toc"}

<div class="content-67 content-first">

The following four principles, as defined by the [W3C](http://www.w3.org/TR/2008/REC-WCAG20-20081211/), lay the foundation for ensuring that web content is available for all users, including people with disabilities and users on non-desktop devices. These guidelines also enable forward compatibility in the event that future devices are radically different from those in use today.
{: class="lead-in"}

Note: While this document can function as a checklist – and at times, it will – that isn’t the primary purpose. The goal is to foster understanding of why these guidelines are important.
{: class="lead-in"}

</div>

<div class="content-33 content-last">
  
[Feature image or links?]

</div>

<h2 id="perceivable">Perceivable<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#perceivable">Visit W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

Information and user interface components must be presentable to users in ways they can perceive. This includes disabled individuals using assistive technology (for instance screen readers for blind users or captions for deaf users) and users of varying devices (like grayscale screens or muted mobile devices).

<div class="content-33 content-first">
#### Include text alternatives for non-text content

For any content that is not text-based (images, audio, video, animations, charts, graphs, etc), provide an alternative version of that content that is text-based.
</div>

<div class="content-67 content-last">

- Use the `alt` and `title` attributes on images and other graphical elements.
- Use the `<title>` and `<desc>` elements in SVG drawings.
- Use fallback text for the `<object>` element.
- Include descriptive text near images (for example, a pie chart legend with percentages of each item).
- Provide transcripts of audio and video recordings.

</div>  

---

<div class="content-33 content-first">
#### Provide alternatives for multimedia

Multimedia such as audio, video, and animations will usually require more than just descriptive text. In most cases the timing of text and descriptions in these files is important, and should therefore be incorporated by alternative means.
</div>

<div class="content-67 content-last">

##### Prerecorded content

- For audio-only content, provide a transcript of both spoken words and descriptions of other sounds.
- For video-only content, provide an audio track or transcript that describes the video.
- Combined audio and video content should accommodate alternatives for both; ie closed captioning or sign interpretation for audio, and an audio track or a screenplay-like document that transcribes dialog and descriptions of sounds and action for video.  

##### Live content

- Ideally closed captioning or sign interpretation should always be available, but in some cases providing the prepared remarks or script alongside the audio/video may suffice.

</div>

---
  
<div class="content-33 content-first">
#### Organize content semantically

Semantic content allows user agents to correctly parse documents and present it to end users in a way that is appropriate for their device and medium without losing information or structure. 
</div>

<div class="content-67 content-last">

- Use semantic HTML, including relative header tags, lists, and semantic tags like `<aside>`, and `<figure>`
- Be careful to support HTML tables with semantic tags like `<th>`, `<thead>`, `<tbody>`, and `<caption>`
- Be sure to mark up HTML forms with semantic tags like `<label>`, `<fieldset>`, `<legend>`, and – where appropriate – HTML5 form additions like email fields.
- If the sequence of a page matters, make sure it is in that order in the underlying HTML document or that the sequence is otherwise machine-readable.
- Avoid text descriptions that rely on layout or other sensory items such as “click the round button” or “the image on the right.” However, not that “above” and “below” are generally understood to mean “preceding” and “after” respectively, and as such are permissible usage.

</div>

---

<div class="content-33 content-first">
#### Make content easily distinguishable from its surroundings

Thus far, the listed guidelines have focused primarily on making content machine-readable. The following will help ensure that content is distinguishable to humans.
</div>

<div class="content-67 content-last">

##### Text:  

- Choose easy-to-read fonts.
- Avoid using images of text, except for logos and images meant to represent physical documents like a letter or disclosure form.
- Make sure text can be resized up to 200% without causing overlapping issues with other content on the page. Also don’t rely on browser zoom, since some users have settings to force large type.

##### Color:  

- Do not use color as the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
- Text should have a contrast ratio of at least 4.5:1, with the following exceptions: 
  1. a contrast ratio of at least 3:1 is necessary for large text, ie a minimum of 18pt/24px regular text or 14pt/18px bold text
  1. text or images of text that are part of inactive UI components (like disabled form controls), pure decoration, are not visible, or are part of a picture that contains significant other visual content have no contrast requirement
  1. text as part of a logo has no minimum contrast requirement.
- The [Colour Contrast Check](http://www.snook.ca/technical/colour_contrast/colour.html) is a nice tool for testing color contrast ratios. 

##### Audio:
- Avoid using auto-playing audio. If this is absolutely unavoidable, make sure there is a control that allows the user to stop the audio, adjust the volume, or mute it).
- Mix audio such that background sounds are at least 20 dB lower than foreground sounds and speech. This does not apply to music.

</div>

<h2 id="operable">Operable<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#operable">Visit W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

User interfaces cannot require interaction that a user cannot perform. Following these guidelines will ensure that users who need to use input devices other than a mouse will be able to use a website or app.

<div class="content-33 content-first">

#### Ensure all content is keyboard accessible

In general, making sure that all parts of a site can be operated using only a keyboard will cover use with less-common input devices as well. You should not rely on specific timing of individual keystrokes when planning for and implementing keyboard accessibility.

</div>

<div class="content-67 content-last">

- Make sure all controls are addressible by the keyboard. By default, this includes `<a>` elements, `<area>` elements, `<object>` elements, and all form elements, but other elements can be made addressible by applying a `tabindex` value to them.
- Make sure there are no keyboard traps. If a user can tab to an element on a page, she needs to be able to exit that element using only the keyboard as well.  

</div>

---

<div class="content-33 content-first">

#### Give users ample time to interact with content

Ideally, you should not use time limits. 

</div>

<div class="content-67 content-last">

For those cases where it is unavoidable, make sure to follow these guidelines:

- Allow the user to turn off or extend the time limit to at least 10 times the default setting.
- Warn users at least 20 seconds before a time limit expires and allow them to extend it with a simple action (such as “press the space bar”).
- If a user needs to log in again after a time limit, make sure there is no loss of data.

</div>

---

<div class="content-33 content-first">

#### Avoid interrupting a user, when possible

</div>

<div class="content-67 content-last">

- Avoid popups or other modal dialogs that haven’t been caused by explicit user action or are alerting the user about something time-sensitive
- Allow users to pause, stop, or hide anything moving, blinking or scrolling on the screen if the motion lasts longer than 5 seconds.
- Allow users to pause, stop, hide, or control the frequency of auto-updating information.

</div>

---

<div class="content-33 content-first">

#### Do not create designs or interactions that may cause seizures

Avoid anything that flashes more than 3 times in 1 second.

</div>

---

<div class="content-33 content-first">

#### Help users navigate, find content, and determine where they are

</div>

<div class="content-67 content-last">

- Allow users to bypass blocks of content that appear repeatedly on a website (such as navigation) with a “skip to main content” or similar link.
- Use titles that describe web page topic or purpose.
- Use descriptive section headings to organize content.
- Unless content is a step in a process, provide more than one way to get to it (such as browse and search).
- Provide a breadcrumb trail or other way to identify one’s location in a site on every page.
- Use descriptive link text (so avoid links like “click here” or “read more”).

</div>

---

<div class="content-33 content-first">

#### Manage focus

From a browser’s perspective, only one element on a webpage has “focus” at a given time. It is vital to the user experience to manage this well.

</div>

<div class="content-67 content-last">

- If the order of controls on a page matters, make sure they’ll be focused in that order when navigating by keyboard.
- Make sure there is a visible indicator on screen of which element has focus. It is okay to make this an optional mode, but the mode should be turned on if the user begins to navigate with the keyboard.
- If a user action causes a modal dialog or something else to appear on screen, make sure the focus is moved to that dialog or area. When the dialog is dismissed, move focus back to the original control or to some other logical place in the document.

</div>
 
<h2 id="understandable">Understandable<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#understandable">Visit W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

These guidelines primarily deal with a user’s ability to comprehend content and operate an interface.

<div class="content-33 content-first">

#### Create text content that is machine and human-readable

</div>

<div class="content-67 content-last">

- Specify content’s language in a machine-readable way. Generally, this means using <html lang="en-us"> or equivalent for another language. This ensures that screen readers will use the correct pronunciation and helps translation software.
- If part of a document is in a different language from the overall language of the document, specify this with something like <span lang="fr">.
- Where possible, provide a way for users to find definitions of unusual words and phrases (especially jargon).
- Make the meaning of abbreviations and acronyms available, either directly in the text (such as “Consumer Financial Protection Bureau (CFPB)”) or in a machine-readable way (such as <abbr title="Consumer Financial Protection Bureau">CFPB</abbr>).
- Write text to the eighth-grade level (excluding proper names and titles) where possible. When it’s not possible to reach an eighth-grade level, provide a simplified version of the text nearby.
- In the cases of hard-to-pronounce words, consider providing their pronunciation. 

</div>

--- 

<div class="content-33 content-first">

#### Develop sites that behave in a predictable way

</div> 

<div class="content-67 content-last">

- Related webpages should generally have a consistent navigation structure and layout (note that this doesn’t mean it has to be exactly the same – just consistent).
- Components that do the same thing should be labelled the same way.

</div>

---

<div class="content-33 content-first">

#### Maintain context

Avoid drastically changing a user’s context without an explicit request from that user. Generally, explicit request an be thought of as clicking or otherwise activing a link or button. At a bare minimum, do not change context due solely to a focus change.

</div>

<div class="content-67 content-last">

A few examples of context changes:

- Submitting a form.
- Moving focus to a different element.
- Popping open a help dialog box.
- Launching a new window.
- Following a link.
- Reloading most of the content of a page.

If an automatic context change is necessary, warn the user in advance and give them an opportunity to change this behavior.

</div>

---

<div class="content-33 content-first">

#### Provide assistance when filling out forms

</div> 

<div class="content-67 content-last">

- Explicitly note required form fields.
- Provide labels or instructions for all form inputs.
- If an error filling out a form is detected, describe it to the user in text. If possible, suggest how they can correct the error.
- If a specific format is required for a form field, programattically format data from other known formats to the preferred format (for example, change 5/10/12 to 2012-05-10 with code). If this isn’t possible, inform the user of the required format up front.
- If a form field is complex or unusual, provide context-sensitive help.
- If possible, allow a user to reverse or edit form submissions after the fact. If this is not possible, allow them to review and confirm their inputs before submitting the form.

</div>

<h2 id="robust">Robust<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#robust">Visit W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. A robust site will be broadly compatible with past, current, and future web browsers and devices.

<div class="content-33 content-first">

#### Follow standard web best practices

In general, this means sticking to standard HTML elements, etc. In some cases, complex widgets are required – in these cases, use WAI-ARIA to make the use, states and properties clear to browsers and assistive technology.

</div>

<div class="content-67 content-last">

- Make sure your HTML validates.
- Also make sure IDs are unique on individual pages.
- Avoid deprecated or proprietary markup.
- Note that this does not include CSS – it’s specific to HTML.
- Make sure states and properties of elements are machine readable. 

</div> 






