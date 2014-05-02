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

<h2 id="perceivable">Perceivable<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#perceivable">View on W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

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
- Text should have a contrast ratio of at least 4.5 : 1, but there are exceptions.
  1. For large text, a contrast ratio of only 3 : 1 is necessary. Large regular text is at least 18pt/24px, while large bold text is 14pt/18px.
  1. Text or images of text that are either pure decoration or not visible, or are part of a logo, picture that contains significant other visual content, or inactive UI components (like disabled form controls) do not have a color contrast requirement.
- The [Colour Contrast Check](http://www.snook.ca/technical/colour_contrast/colour.html) is a nice tool for testing color contrast ratios. 

##### Audio:
- Avoid auto-playing audio. If this is absolutely unavoidable, provide a control that allows the user to stop the audio and adjust or mute the volume.
- Mix audio such that background sounds are at least 20 dB lower than foreground sounds and speech. This does not apply to music.

</div>

<h2 id="operable">Operable<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#operable">View on W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

User interface components and navigation must be operable: an interface cannot require interaction that a user cannot perform. Following these guidelines will guarantee that people who use input devices other than a mouse can still navigate the website or app.

<div class="content-33 content-first">

#### Ensure all content is keyboard accessible

In general, validating that a website can be operated using only a keyboard will also cover use with less-common input devices. 

</div>

<div class="content-67 content-last">

- All controls must be addressible by keyboard. By default, this includes `<a>`, `<area>`, `<object>`, and all form elements. Other elements can be made addressible by applying a `tabindex` value.
- Avoid keyboard traps. If a user can tab to an element on the page, s/he needs to be able to exit that element using only the keyboard as well. 
- Do not rely on specific timing of individual keystrokes when planning for and implementing keyboard accessibility. 

</div>

---

<div class="content-33 content-first">

#### Give users ample time to interact with content

Ideally, you should not use time limits. 

</div>

<div class="content-67 content-last">

For those cases where that is unavoidable:

- Allow users to turn off or extend the time limit to at least 10 times the default setting.
- Warn users at least 20 seconds before a time limit expires and enable a time extension with a simple action, such as pressing the space bar.
- If a user needs to log in again after a time limit, make sure there is no loss of data.

</div>

---

<div class="content-33 content-first">

#### Avoid interrupting a user, when possible

</div>

<div class="content-67 content-last">

- Avoid popups or other modal dialogs that haven not been prompted by explicit user action or are alerting the user about something that is time-sensitive.
- Allow users to pause, stop, or hide anything moving, blinking, or scrolling on the screen if the motion lasts longer than 5 seconds.
- Allow users to pause, stop, hide, or control the frequency of auto-updating information.

</div>

---

<div class="content-33 content-first">

#### Do not create designs or interactions that may cause seizures

Nothing should flash more than 3 times in 1 second.

</div>

---

<div class="content-33 content-first">

#### Help users navigate, find content, and determine where they are

</div>

<div class="content-67 content-last">

- Allow users to bypass blocks of content that appear repeatedly on a website, like navigations, with a “skip to main content” or similar link.
- Use titles that describe a webpage's topic or purpose.
- Use descriptive section headings to organize the content.
- Unless content is a step in a process, provide more than one way to access it, such as through browsing or searching.
- Provide a breadcrumb trail or other way to identify one’s location in a site on every page.
- Use more descriptive link text. Avoid calls to action like “click here” or “read more."

</div>

---

<div class="content-33 content-first">

#### Manage focus

From a browser’s perspective, only one element on a webpage has “focus” at a given time. It is vital to the user experience to manage this well.

</div>

<div class="content-67 content-last">

- If the order of controls on a page matters, make sure they will be focused in that order when navigating by keyboard.
- Make sure there is a visible indicator on screen of which element has focus. This may be an optional mode, but it should be turned on if the user begins to navigate with the keyboard.
- If a user action causes a modal dialog to appear on screen, make sure the focus is moved to that dialog or area. When the dialog is dismissed, re-focus back to the original control or to some other logical place in the document.

</div>
 
<h2 id="understandable">Understandable<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#understandable">View on W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

Users must be able to comprehend content and how to operate an interface.

<div class="content-33 content-first">

#### Create text content that is machine and human-readable

</div>

<div class="content-67 content-last">

- Specify the language of the content in a machine-readable way. Generally, this means using `<html lang="en-us">` or the equivalent for another language. This ensures that screen readers will use the correct pronunciation and help with translation software.
- If part of a document is in a different language from the overall language of the document, specify this with something like `<span lang="fr">`.
- Where possible, provide a way for users to find definitions of unusual words and phrases especially jargon.
- Make the meaning of abbreviations and acronyms available, either directly in the text, such as “Consumer Financial Protection Bureau (CFPB)”, or in a machine-readable way, like `<abbr title="Consumer Financial Protection Bureau">CFPB</abbr>)`.
- Write text to the eighth-grade comprehension level, excluding proper names and titles, where possible. If that is not an option, provide a simplified version of the text nearby.
- In the cases of hard-to-pronounce words, consider including the pronunciation.

</div>

--- 

<div class="content-33 content-first">

#### Develop sites that behave in a predictable way

</div> 

<div class="content-67 content-last">

- Related webpages should generally have a consistent navigation structure and layout. (Note that this doesn’t mean it has to be exactly the same – just consistent.)
- Components that perform the same action should be labelled the same way.

</div>

---

<div class="content-33 content-first">

#### Maintain context

Avoid drastically changing a user’s context without an explicit request from the user, like clicking or otherwise activing a link or button. At a bare minimum, do not change context due solely to a focus change.

If an automatic context change is necessary, warn the user in advance and give them an opportunity to change this behavior.

</div>

<div class="content-67 content-last">

A few examples of context changes:

- Submitting a form
- Moving focus to a different element
- Popping open a help dialog box
- Launching a new window
- Following a link
- Reloading most of the content on a page

</div>

<h2 id="robust">Robust<span class="cf-code-link"><a href="http://www.w3.org/TR/2008/REC-WCAG20-20081211/#robust">View on W3C site <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. A robust site will be broadly compatible with past, current, and future web browsers and devices.

<div class="content-33 content-first">

#### Follow standard web best practices

In general, this means sticking to standard HTML elements, etc. If complex widgets are required, use WAI-ARIA to make the use, states, and properties clear to browsers and assistive technologies.

</div>

<div class="content-67 content-last">

- Make sure your HTML validates.
- Use unique IDs on individual pages.
- Avoid deprecated or proprietary markup.
- Make sure states and properties of elements are machine readable. 
- Note that this is specific to HTML and does not include CSS.

</div> 






