---
layout: page
title: Creating accessible interfaces
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

## Perceivable
Information and user interface components must be presentable to users in ways they can perceive. This includes disabled individuals using assistive technology (for instance screen readers for blind users or captions for deaf users) and users of varying devices (like grayscale screens or muted mobile devices).

<div class="content-33 content-first">
#### Text alternatives for non-text content

For any content that is not text-based (images, audio, video, animations, charts, graphs, etc), provide an alternative version of that content that is text-based.
</div>

<div class="content-67 content-last">

- Use the `alt` and `title` attributes on images and other graphical elements.
- Use the `title` and `desc` elements in SVG drawings.
- Use fallback text for the `<object>` element.
- Have descriptive text near the image in the document: for example, the legend for a pie chart might include the percentages of each item.
- Link to said text in the immediate context of the image or other multimedia.
- Provide transcripts of audio and video recordings.

</div>  

---

<div class="content-33 content-first">
#### Alternatives for multimedia

Multimedia such as audio, video, animations and the like will usually require more than just descriptive text. In most cases the timing of text and descriptions in these files is important, and should therefore be included in the alternative versions.
</div>

<div class="content-67 content-last">

##### Prerecorded content:  

- For audio-only content, provide a transcript that includes both spoken words and descriptions of other sounds.
- For video-only content, provide an audio track with descriptions of the video or a similar description in text.
- Combined audio/video content needs to provide alternatives for both the sound and video. There are a few strategies for this:
  - Alternatives for sound include closed captions or sign interpretation.
  - Alternatives for video include an audio description track or a document similar to a screenplay that includes dialog, description of sounds, and description of action.  

##### Live content

- Ideally closed captioning or sign interpretation should be available, but in some cases providing the prepared remarks or script alongside the audio/video may be sufficient.

</div>

---
  
<div class="content-33 content-first">
#### Organize content so that it can be presented in different ways by a browser without losing information or structure

Semantic content allows user agents to correctly parse documents and present it to end users in a way that is appropriate for their device and medium. 
</div>

<div class="content-67 content-last">

- Use semantic HTML, including relative header tags, lists, semantic tags like `<aside>`, `<figure>`, and so on.
- Be careful to support HTML tables with semantic tags like `<th>`, `<thead>`, `<tbody>`, `<caption>`, and so on.
- Be sure to mark up HTML forms with semantic tags like `<label>`, `<fieldset>`, `<legend>`, and – where appropriate – HTML5 form additions like email fields.
- If the sequence of a page matters, make sure it is in that sequence in the underlying HTML document or that the sequence is otherwise machine-readable.
- Avoid text descriptions that rely on layout or other sensory items such as “click the round button” or “the image on the right.” Note, however, that “above” and “below” are generally understood to mean “preceding” and “after,” and as such are okay to use.
</div>

---

<div class="content-33 content-first">
#### Make sure content is easy to distinguish from its surroundings and background

The previous guideline deals primarily with making content understandable to machines. This guideline deals with making sure the content is distinguishable to humans.
</div>

<div class="content-67 content-last">

##### Text:  

- Choose easy-to-read fonts.
- Avoid using images of text, except for logos and images meant to represent physical documents like a letter or disclosure form.
- Be sure text can be resized up to 200% without causing problems like overlapping items on the page (don’t rely on browser zoom for this; some users have settings to force large type).
For audio:
- Avoid using auto-playing audio. If this is absolutely unavoidable, make sure there is a control that allows the user to stop the audio, adjust the volume, or mute it).
- Mix audio such that background sounds are at least 20 dB lower than foreground sounds and speech. This does not apply to music.

##### Color:  

- Do not use color as the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
- Text should have a contrast ratio of at least 4.5:1, except for the following exceptions:
    - A contrast ratio of at least 3:1 for large text (defined as text of at least 18pt/24px, or bold text of at least 14pt/18px).
    - Text or images of text that are part of inactive UI components (such as disabled form controls), pure decoration, are not visible to anyone, or are part of a picture that contains significant other visual content have no contrast requirement.
    - Text as part of a logo has no minimum contrast requirement.
One good tool for testing contrast ratio can be found at <http://www.snook.ca/technical/colour_contrast/colour.html>
</div>

##Operable
Following these guidelines will ensure that users who need to use input devices other than a mouse will be able to use a website or app.

<div class="content-33 content-first">

#### Make sure all content is keyboard accessible

In general, making sure that all parts of a site can be operated using only a keyboard will cover use with less-common input devices as well. You should not rely on specific timing of individual keystrokes when planning for and implementing keyboard accessibility.

</div>

<div class="content-67 content-last">

- Make sure all controls are addressible by the keyboard. By default, this includes `<a>` elements, `<area>` elements, `<object>` elements, and all form elements, but other elements can be made addressible by applying a `tabindex` value to them.
- Make sure there are no keyboard traps. If a user can tab to an element on a page, she needs to be able to exit that element using only the keyboard as well.  

</div>

---

<div class="content-33 content-first">

#### Make sure users have enough time to read and interact with content

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

#### When possible, avoid interrupting a user

</div>

<div class="content-67 content-last">

- Avoid popups or other modal dialogs that haven’t been caused by explicit user action or are alerting the user about something time-sensitive
- Allow users to pause, stop, or hide anything moving, blinking or scrolling on the screen if the motion lasts longer than 5 seconds.
- Allow users to pause, stop, hide, or control the frequency of auto-updating information.

</div>

---

<div class="content-33 content-first">

#### Avoid designs or interactions that may cause seizures

Avoid anything that flashes more than 3 times in 1 second.

</div>

---

<div class="content-33 content-first">

#### Provide ways to help users navigate, find content, and determine where they are.

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
 
## Understandable

These guidelines primarily deal with a user’s ability to comprehend content.

<div class="content-33 content-first">

#### Make text content readable and understandable

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

#### Make sure a site behaves in a predictable way

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

##Robust

A robust site will be broadly compatible with past, current, and future web browsers and devices.

<div class="content-33 content-first">

In general, this means sticking to standard HTML elements, etc. In some cases, complex widgets are required – in these cases, use WAI-ARIA to make the use, states and properties clear to browsers and assistive technology.

</div>

<div class="content-67 content-last">

- Make sure your HTML validates.
- Also make sure IDs are unique on individual pages.
- Avoid deprecated or proprietary markup.
- Note that this does not include CSS – it’s specific to HTML.
- Make sure states and properties of elements are machine readable. 

</div> 






