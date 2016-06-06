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
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-typography"><h4>cf-typography</h4></a>
      <p>Links in the Capital Framework</p>
    </li>
  </ul>
</div> 

<h2 id="style">Style<span class="cf-code-link"><a href="https://cfpb.github.io/cf-typography/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

#### Body text and lists
Links that appear in body text or link lists are underlined. Links are underlined with the ```border-bottom``` property.
</div>

<div class="content-67 content-last">
##### Georgia paragraph links
Lorem ipsum dolor sit amet, <a href="#">Default link style</a>. Vestibulum orci ante, sagittis quis dolor a, fringilla dapibus nunc. <a href="#" class="hover">Hover link style</a> venenatis suscipit. Nulla in purus nisi. Curabitur vel odio et est auctor tincidunt. <a href="#" class="focus">Focused link style</a>, et ultricies erat pellentesque nec. Suspendisse quis <a href="#" class="active">Active link style</a> faucibus nec eu justo. Nulla ut massa eget dolor vehicula bibendum. We've all been to the <a href="#" class="visited">Visited link style</a>. 

---

##### Avenir Next list links
- Lorem ipsum <a href="#">Default link style</a>, consectetur adipiscing elit.
- Curabitur vel odio et est auctor, <a href="#" class="hover">Hover link style</a>.
- Aliquam mollis tellus in purus porta, <a href="#" class="focus">Focused link style</a>.
- <a href="#" class="active">Active link style</a>.
- We've all been to the <a href="#" class="visited">Visited link style</a>.
</div>


<h2 id="states">States<span class="cf-code-link"><a href="https://cfpb.github.io/cf-typography/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

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


<h2 id="variations">Variations<span class="cf-code-link"><a href="https://cfpb.github.io/cf-typography/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

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
<a class="link-with-icon" href="#">External link <span class="cf-icon cf-icon-external-link"></span></a>
</div>

---

<div class="content-50 content-first">
##### Email links
Use the Email link minicon (glyph E302) to emphasize a <code>mailto</code> link.
</div>
<div class="content-50 content-last regular-ex">
<a class="link-with-icon" href="#">Email us <span class="cf-icon cf-icon-email"></span></a>
</div>

---

<div class="content-50 content-first">
##### Document links
Documents minicons can emphasize a link that contains a file or document.

Document links should open in the same browser window (i.e., do not set them to ```target="_blank"```). This allows the user to choose whether they want to open an additional window in order to view the content.
</div>
<div class="content-50 content-last regular-ex">
<ul class="list_links-minicons">
<li><a class="link-with-icon" href="#">Basic document <span class="cf-icon cf-icon-document"></span></a></li>
<li><a class="link-with-icon" href="#">Download <span class="cf-icon cf-icon-download"></span></a></li>
<li><a class="link-with-icon" href="#">Appendix <span class="cf-icon cf-icon-appendix"></span></a></li>
<li><a class="link-with-icon" href="#">Supplement <span class="cf-icon cf-icon-supplement"></span></a></li>
<li><a class="link-with-icon" href="#">Attach <span class="cf-icon cf-icon-attach"></span></a></li>
</ul>

</div>

</div>
