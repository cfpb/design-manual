---
layout: page
title: Links
category: Page components
published: true
redirect_from: "/ui-toolkit/links.html"
---


- [Style](#style)
- [States](#states)
- [Variations](#variations)
{: class="toc"}

<div class="content-50 content-first">

Links lead users to a different page or further information. In contrast, <a href="/design-manual/ui-toolkit/buttons.html">buttons</a> are used to signal actions. Users should be able to identify links without relying on color or styling alone.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Code Source</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/capital-framework/blob/canary/src/cf-core/src/cf-base.less#L396">
        <h4>cf-core</h4>
      </a>
      <p>Links in Capital Framework</p>
    </li>
  </ul>
</div>

## Style

<div class="content-33 content-first">
### Body text and lists
Links that appear in body text or link lists are underlined.

Links should be Regular weight if inline with other text
(e.g., within a paragraph),
but should be Medium weight when standing alone
(e.g., in a call to action or list of links).
</div>

<div class="content-67 content-last">
#### Inline links
Lorem ipsum dolor sit amet, <a href="#">default link style</a>. Vestibulum orci ante, sagittis quis dolor a, fringilla dapibus nunc. <a href="#" class="hover">Hover link style</a> venenatis suscipit. Nulla in purus nisi. Curabitur vel odio et est auctor tincidunt. <a href="#" class="focus">Focused link style</a>, et ultricies erat pellentesque nec. Suspendisse quis <a href="#" class="active">active link style</a> faucibus nec eu justo. Nulla ut massa eget dolor vehicula bibendum. We've all been to the <a href="#" class="visited">visited link style</a>.

---

#### Standalone links
<ul class="medium-ex m-list m-list__unstyled">
    <li class="m-list_item">
        <a href="#">Default link style</a>
    </li>
    <li class="m-list_item">
        <a href="#" class="hover">Hover link style</a>
    </li>
    <li class="m-list_item">
        <a href="#" class="focus">Focused link style</a>
    </li>
    <li class="m-list_item">
        <a href="#" class="active">Active link style</a>
    </li>
    <li class="m-list_item">
        <a href="#" class="visited">Visited link style</a>
    </li>
</ul>
</div>




## States

<div class="content-33 content-first">
#### Default
* Pacific Blue
* 1px dotted bottom border
</div>

<div class="content-67 content-last regular-ex">
<a href="#">Default link style</a>
</div>
---

<div class="content-33 content-first">
#### Hover
* 50% Pacific Blue
* 1px solid bottom border
</div>
<div class="content-67 content-last regular-ex">
<a href="#" class="hover">Hover link style</a>
</div>
---

<div class="content-33 content-first">
#### Focus
* Pacific Blue
* 1px dotted bottom border
* Thin dotted outline
</div>
<div class="content-67 content-last regular-ex">
<a href="#" class="focus">Focused link style</a>
</div>
---

<div class="content-33 content-first">
#### Active
* Navy Blue
* 1px solid bottom border
</div>
<div class="content-67 content-last regular-ex">
<a href="#" class="active">Active link style</a>
</div>
---

<div class="content-33 content-first">
#### Visited
* 50% Teal
* 1px solid bottom border
</div>

<div class="content-67 content-last regular-ex">
<a href="#" class="visited">Visited link style</a>
</div>


## Variations

<div class="content-33 content-first">
#### Links in headers
* No underline
</div>

<div class="content-67 content-last">
# Header 2 <a href="#">link style</a>

Lorem ipsum dolor sit amet. Vestibulum orci ante, sagittis quis dolor a, fringilla dapibus nunc. Nulla in purus nisi. Curabitur vel odio et est auctor tincidunt. Et ultricies erat pellentesque nec. Suspendisse quis faucibus nec eu justo. Nulla ut massa eget dolor vehicula bibendum.
</div>

---

<div class="content-33 content-first">
#### Links in navigation
* No underline
* No visited link style
</div>

{: class="nav-link-ex"}
<div class="content-67 content-last">
- [Home](#)
- [About](#)
- [News](#)
- [Contact us](#)
{: class="toc"}
</div>

---

<div class="content-33 content-first">
#### Links with icons
Use icons when a link needs extra emphasis. Use icons consistently, or don't use them at all. Each icon should be used exclusively for one action.

Icons appear to the right of the link text. The color and ```font-size``` of icons should be the same as the adjacent text, including state changes. Icons are never underlined.
</div>

<div class="content-67 content-last">

<div class="content-50 content-first">
##### External links
Use the external link minicon (glyph E610) to emphasize a non-CFPB webpage.

External links should open in the same browser window (i.e., do not set them to ```target="_blank"```). This allows the user to choose whether they want to open an additional window in order to view the content.
</div>

<div class="content-50 content-last regular-ex">
  <a class="a-link
            a-link__icon
            cf-icon
            cf-icon__after
            cf-icon-external-link" href="#">
    <span class="a-link_text">External link</span>
  </a>
</div>

---

<div class="content-50 content-first">
##### Email links

Use the Email link minicon (glyph E302) to emphasize a <code>mailto</code> link.
</div>

<div class="content-50 content-last regular-ex">
  <a class="a-link
            a-link__icon
            cf-icon
            cf-icon__after
            cf-icon-email" href="#">
    <span class="a-link_text">Email us</span>
  </a>
</div>

---

<div class="content-50 content-first">
##### Document links
Documents minicons can emphasize a link that contains a file or document.

Document links should open in the same browser window (i.e., do not set them to ```target="_blank"```). This allows the user to choose whether they want to open an additional window in order to view the content.
</div>

<div class="content-50 content-last regular-ex">
<ul class="list_links-minicons">
  <li>
    <a class="a-link
              a-link__icon
              cf-icon
              cf-icon__after
              cf-icon-document" href="#">
      <span class="a-link_text">Basic document</span>
    </a>
  </li>
  <li>
    <a class="a-link
              a-link__icon
              cf-icon
              cf-icon__after
              cf-icon-download" href="#">
      <span class="a-link_text">Download</span>
    </a>
  </li>
  <li>
    <a class="a-link
              a-link__icon
              cf-icon
              cf-icon__after
              cf-icon-appendix" href="#">
      <span class="a-link_text">Appendix</span>
    </a>
  </li>
  <li>
    <a class="a-link
              a-link__icon
              cf-icon
              cf-icon__after
              cf-icon-supplement" href="#">
      <span class="a-link_text">Supplement</span>
    </a>
  </li>
  <li>
    <a class="a-link
              a-link__icon
              cf-icon
              cf-icon__after
              cf-icon-attach" href="#">
      <span class="a-link_text">Attach</span>
    </a>
  </li>
</ul>

</div>

</div>
