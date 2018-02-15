---
layout: page
title: Grid
category: Global elements
published: true
redirect_from: "/ui-toolkit/grid-and-layout.html"
---




- [Style](#style)
{: class="toc"}

<div class="content-50 content-first">

The grid provides structure for website content. The flexible design adjusts for different devices.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Source Code</h5>
  <ul class="repo-list">
    <li>
      {% include icons/github.svg %}
    </li>
    <li>
      <a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-grid">
        <h4>cf-grid</h4>
      </a>
      <p>Grid in Capital Framework</p>
    </li>
  </ul>
</div>

<h2 id="style">
    Style
    <span class="cf-code-link">
        <a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-grid">
            View code {% include icons/external-link.svg %}
        </a>
    </span>
</h2>

Twelve-column grid with flexible column widths and fixed gutters. The width of the padding on the left and right edge of the grid depends on device size.

* 30px fixed gutter width
* Max width 1230px, background colors may bleed to edge
* Desktop: 30px padding on each side
* Tablet: 30px padding on each side
* Mobile: 15px padding on each side

{::nomarkdown}

<div class="grid-demo cols-12">

    <section>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
    </section>
    <section>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
    </section>
    <section>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-2"><p>two</p></div>
    </section>
    <section>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-3"><p>three</p></div>
    </section>
    <section>
        <div class="col col-4"><p>four</p></div>
        <div class="col col-4"><p>four</p></div>
        <div class="col col-4"><p>four</p></div>
    </section>
    <section>
        <div class="col col-6"><p>six</p></div>
        <div class="col col-6"><p>six</p></div>
    </section>
    <section>
        <div class="col col-12"><p>twelve</p></div>
    </section>
</div>

{:/nomarkdown}

## Breakpoints

Five major breakpoints standardize large-scale changes like navigation and sidebar behavior. Use other breakpoints as necessary.

* xs: 0-600px
* sm: 601-900px
* med: 901-1020px
* lg: 1021-1230px
* xl: 1231px and up
