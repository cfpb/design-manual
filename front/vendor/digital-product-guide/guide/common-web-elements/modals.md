---
layout: document
document_label: modals
stage: draft
sponsor: "Leah Wechsler, Justin James, Chuck Werner"
title: Modals
subtitle: "Modals, usage and interaction"

---

## Modal Windows
Modal windows are child windows. They take the user focus from the parent page to a particular block of content not directly found on the page, the child window. They are a means of swiftly showing information to users on the same page they are working on, thus improving usability of your site and decreasing page loads. 


## Guidelines
Think task completion and consider the context. 

Modals are helpful for focusing the users attention:
1. To a specific piece of information
2. Block the application flow until information that is required is completed
3. Warning against the effects of a current action
4. Contact forms
5. Sign-up/ login forms
6. Search boxes 
7. Embedding PDFs
8. Alerts and notices that require user input
9. Help elements 


**Have an exit strategy**
How will the user get back to the main page? Consider these elements:
1. A button, it could an "OK", "Close", or "Cancel" button or even perhaps a "Close" text link.
2. Click outside the window
3. Use the escape key

**The container**
When using a modal window, the modal should be the only thing that a user can interact with. The modal container should have 30px of padding on all sides but overall width and height should be dictated by the content. To keep text line lengths legible a width of 4 columns or 33% of the browser width is recommended as a starting point. Background color of the container should be white and should have an additional 30px outer stroke of CFPB green. No drop shadow or altered colors should be used.

Keeping it usable:
* The first focusable item in the modal dialog should receive the keyboard focus. 
* When the user is on the last focusable item and presses Tab, the user should be taken to the first focusable item in the modal dialog. 
* When the user is on the first focusable item and presses Shift-Tab, the user should be taken to the last focusable item in the modal dialog.

**Content**
Text within the modal should follow the CFPB type hierarchy guidelines, but actual heading/paragraph levels will depend on the content itself. Additionally, button and link styles should be consistent with CFPB standards. Text should always be black/dark grey on the white background for modals.

**The page as background**
When the modal is displayed, you shouldn't be able to interact with what's behind the window, so to make sure that's clear, hide that background page behind the floating window. The background should be an 80% transparency of CFPB black. Another option is to use a drop shadow. Avoid blurring the background.


**Placement**
A modal window should be placed near the button that triggered the action. No one wants to miss out on the modal, so place it where people can find it. 

Options for placement include: above, below, left or right of the trigger.


**Transition effects** 
Transition effects can occur when someone opens or closes the modal window. These can look make the interaction a little bit nicer, some people like to use fade ins and fade outs. 

**For small screens** 
Consider the need to have a modal window. Also, you probably want to make the modal as big as possible so it's easy to see/ read/ interact with. On a desktop, you probably don't want it that big. 

**Avoid**
* Scrolling, this likely means you have a lot of content going on in that window, how can you change that? 
* Too many modals


## Accessibility
Key points of making modals accessible include managing focus and the relationship between labeling and describing elements.
* This post explains most of the [complexities when dealing with both keyboard and screen reader users](http://accessibility.oit.ncsu.edu/blog/2013/09/13/the-incredible-accessible-modal-dialog/).
* [The W3C outlines what is needed to make a modal dialog accessible] (http://www.w3.org/TR/wai-aria-practices/#modal_dialog)


## Examples 
![modals]([guideAssets]/images/modals.png)


![modals-annotated]([guideAssets]/images/modals-annotated.svg)

**Annotations** 
1. 30px padding
2. H1 title, 34px Avenir Next Reg. 
3. San serif body copy, 16/18px Avenir Next Reg. 
4. Secondary button style
5. 25px Mincon used fro closing with "esc" also as option to close.
6. 30px Green stroke/ padding
7. 4 column width on grid to keep line lengths manageable. 
8. 80% black overlay & 4px blur (in browsers that support it)

## Related guidelines
[Buttons] (https://github.cfpb.gov/pages/nicholasw/digital-product-guide/guide/common-web-elements/buttons.html)
