---
layout: page
title:  Grid and layout
category: UI toolkit
---

- [Style](#style)
- [States](#states)
- [Variations](#variations)
{: class="toc"}

<div class="content-50 content-first">

Lorem ipsum dolor sit amet.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <i class="cf-icon cf-icon-github"></i>
    </li>
    <li>
      <a href="http://github.com/cfpb/cf-grid"><h4>cf-grid</h4></a>
      <p>Grid in the Capital Framework</p>
    </li>
  </ul>
</div>

<h2 id="style">Style<span class="cf-code-link"><a href="http://cfpb.github.io/cf-grid/docs/">View code <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

{::nomarkdown}
<div class="cols-12">
        <h2>12 columns w/ 1200px max width</h2>
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
{:/nomarkdown}

<h2 id="variations">Variations<span class="cf-code-link"><a href="http://cfpb.github.io/cf-grid/docs/">View code <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

{::nomarkdown}
        <h3>Prefixing/Suffixing</h3>
        <section>
            <div class="col col-1 suffix-11"><p>prefix 0, suffix 11</p></div>
            <div class="col col-1 prefix-1 suffix-10"><p>prefix 1, suffix 10</p></div>
            <div class="col col-1 prefix-2 suffix-9"><p>prefix 2, suffix 9</p></div>
            <div class="col col-1 prefix-3 suffix-8"><p>prefix 3, suffix 8</p></div>
            <div class="col col-1 prefix-4 suffix-7"><p>prefix 4, suffix 7</p></div>
            <div class="col col-1 prefix-5 suffix-6"><p>prefix 5, suffix 6</p></div>
            <div class="col col-1 prefix-6 suffix-5"><p>prefix 6, suffix 5</p></div>
            <div class="col col-1 prefix-7 suffix-4"><p>prefix 7, suffix 4</p></div>
            <div class="col col-1 prefix-8 suffix-3"><p>prefix 8, suffix 3</p></div>
            <div class="col col-1 prefix-9 suffix-2"><p>prefix 9, suffix 2</p></div>
            <div class="col col-1 prefix-10 suffix-1"><p>prefix 10, suffix 1</p></div>
            <div class="col col-1 prefix-11"><p>prefix 11, suffix 0</p></div>
        </section>
        <h3>Push/Pull</h3>
        <section>
            <div class="col col-4 push-8"><p>four, push eight</p></div>
            <div class="col col-8 pull-4"><p>eight, pull four</p></div>
        </section>
        <section>
            <div class="col col-9 push-3"><p>nine, push three</p></div>
            <div class="col col-3 pull-9"><p>three, pull nine</p></div>
        </section>
        <h3>Nesting</h3>
        <section>
            <div class="col col-6">
                <p>six</p>
                <section>
                    <div class="col col-4"><p>four</p></div>
                    <div class="col col-4"><p>four</p></div>
                    <div class="col col-4"><p>four</p></div>
                </section>
            </div>
            <div class="col col-6">
                <p>six</p>
                <section>
                    <div class="col col-4"><p>four</p></div>
                    <div class="col col-4"><p>four</p></div>
                    <div class="col col-4"><p>four</p></div>
                </section>
            </div>
        </section>
        <section>
            <div class="col col-3">
                <p>three</p>
                <section>
                    <div class="col col-6"><p>six</p></div>
                    <div class="col col-6"><p>six</p></div>
                </section>
            </div>
            <div class="col col-6">
                <p>six</p>
                <section>
                    <div class="col col-4"><p>four</p></div>
                    <div class="col col-4"><p>four</p></div>
                    <div class="col col-4"><p>four</p></div>
                </section>
            </div>
            <div class="col col-3">
                <p>three</p>
                <section>
                    <div class="col col-3"><p>three</p></div>
                    <div class="col col-3"><p>three</p></div>
                    <div class="col col-3"><p>three</p></div>
                    <div class="col col-3"><p>three</p></div>
                </section>
            </div>
        </section>
</div>
{:/nomarkdown}