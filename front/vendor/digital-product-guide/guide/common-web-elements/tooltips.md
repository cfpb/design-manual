---
layout: document
document_label: tooltips
stage: draft
sponsor: "Leah Wechsler, Justin James, Chuck Werner"
title: Tooltips
subtitle: "Tooltips, usage and interaction"

---

# Tooltips
Tooltips are an way of simplifying an interface by providing additional information to a user on a needed basis. 

## Guidelines
**Instances where you might need a tooltip**
1. Clarify a potentially confusing element
2. Display a description for an icon in a toolbar
3. Identify required fields
4. Wayfinding

**Triggering a tooltip** 
Click, hover, focus, or a manual definition. Tips will automatically display when the user triggers them. 
A click is the preferred method of an element to display text. 

* Tooltip should not be right on the minicon but slightly offset (example 5px)
* Tooltip should be paired with question mark (help) minicon, color TBD
* Inline tooltips? 

**Showing and hiding the tooltip** 
How long it could and should a tooltip be visible? It will take users a longer amount of time to find tips in nonstandard places. The visual cue should be recognizable and used consistently. 

**The tooltip as an object**
Placement should be responsive. Default to above placement, move to below if the page scroll doesn't allow. In some instances, for example, forms, might work best with the tooltip to the right. 

**Insert design considerations here**
Points of note: 
* Container size
* Amount of text (max width)
* Padding
* Display time
* Animation

**Position the tooltip**
Tooltips can be displayed at the top, bottom, left and right of an object. 

**Animation**
 Apply a transition to the tooltip

**Tooltip vs. Popover**
A tooltip provides a brief amount of text, while a popover provides more interactivity. 

**Avoid**
* Putting too much text into a tooltip, keep them short and sweet
* Too many tooltips
* Tooltip triggers that aren't easily discoverable
* Making them hard to read

**Container**
Tooltip container should have 15px of padding on all sides but overall width and height should be dictated by the content. To keep text line lengths legible a width of 4 columns or 33% of the browser width is recommended as a starting point. Background color of the container should be and 80% screen (not transparent) CFPB black although there may be alternate colors needed depending on context. The container should have square corners and the “pointer” should be the same shape as the directional arrow minicons. No drop shadow should be used.

**Content**
Text within the tooltip should follow the CFPB type hierarchy guidelines, but actual heading/paragraph levels will depend on the content itself. Text should always be white on the 80% screen CFPB black background for tooltips.

**Placement**
The pointer should have a 5px offset from icon, direction dependent on context however, above should be default.
Icon - Use a 25px question mark (help) minicon to signal tooltip. Default to pacific blue color, with alternate colors dependent on context. Minicon sizing flexible to accommodate inline tooltips.
 

## Accessibility and tooltips
From the [W3C](http://www.w3.org/TR/wai-aria-practices/#tooltips): "To provide simple text tooltips, the HTML title attribute should more than suffice because the user agent will render it for tooltips. When creating a tooltip, it is essential that the user be able to activate it using the keyboard. When a form control or widget receives keyboard focus, the tooltip must display. When the form control or widget loses focus, the tooltip must disappear. Browsers do not currently support this functionality."

1. Tooltip content should be accessible by both screen reader users and keyboard-only users.
2. Be mindful of using `display: none;` in CSS, injecting content with JavaScript or using the title attribute.
3. Use ARIA roles for enhancement.

**Resources**
* [Accessible Tooltips by Simply Accessible](http://examples.simplyaccessible.com/tooltips/)
* [Tooltips Examples with ARIA and CSS by Open AJAX](http://oaa-accessibility.org/examplep/tooltip2/)

## Examples 

![tooltips]([guideAssets]/images/tooltips.png)

![tooltips-annotated]([guideAssets]/images/tooltips-annotated.svg)

**Annotations** 
1. San serif body copy, 16/18px Avenir Next Reg. 
2. 4 column width to keep line length manageable. 80% screen of CFPB black
3. 15px padding (all sides)
4. 25px minicon to signal tooltip. Default to pacific blue color. Sizing flexible to accomodate inline tooltips. 5px offset of "bubble" point from icon.
5. Point should match shape of carat minicon (default to above and move to below if page requires).

## Related elements
[Buttons](https://github.cfpb.gov/pages/nicholasw/digital-product-guide/guide/common-web-elements/buttons.html)


