---
layout: page
title: Layouts
category: UI toolkit
published: true
---

- [Landing](#landing)
- [Browse](#browse)
- [Learn](#learn)
{: class="toc"}

<div class="content-50 content-first">

Responsive, standard web page layouts help us create a straightforward and consistent experience on consumerfinance.gov for for all users, across devices.
{: class="lead-in"}

The following three foundational page layouts are the building blocks of our site.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-layout"><h4>cf-layout</h4></a>
      <p>Layout in the Capital Framework</p>
    </li>
  </ul>
</div>

<h2 id="landing">Landing</h2>

<h3>User goal: Get the big picture</h3>

Landing pages provide an overview of a section and helps users situate themselves within the site and the subject matter. Users should be able to quickly skim section topics and select the category that interests them.
{: class="lead-in"}

Landing pages exist for each of the five first level navigation sections as well as for second-level subsections as needed.
{: class="lead-in"}

<div class="content-33 content-first">
<h3>Standard content areas</h3>
{::nomarkdown}  
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Introduction
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            The introduction space contains a short description to help orient users to the section and set expectations for what they will find deeper in the section. This may take the form of a hero or a text introduction.
        </p>
    </div>
</div> <!-- ./Introduction -->

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Main content
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            This space is used to introduce users to the different topics, tools, resources, or journeys in the section. Standard formatting for each module within this area includes a title and short description with links or a call to action. The description should act as a prompt to action rather than presenting the “meat” of the topic. Depending on quantity and importance these modules may make use of illustration, buttons, links, well wrappers, etc. to establish the appropriate hierarchy. Users will navigate to deeper pages within the section via the modules in this area.
        </p>
    </div>
</div> <!-- ./Main content -->

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Sidebar
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            The sidebar space is typically used to share related, relevant, or recent content that applies to the section. Many different modules can live within a sidebar, they are typically repeatable modules that can can be used across multiple page types (examples: related XXXX, popular XXXX, recent XXXX, email sign up, etc.)
        </p>
    </div>
</div> <!-- ./Sidebar -->

{:/nomarkdown}
</div>

<div class="content-67 content-last regular-ex">
  <img src="{{ site.baseurl }}/static/img/layout/landing.png" alt="Landing page layout">
</div>

<h2 id="browse">Browse</h2>

<h3>User goal: Skim specifics for the detail I need</h3>

Browse pages provide more specific topic or product overviews and information. Often these pages contain lists of documents or other resources within a filterable list, or descriptions of action steps or FAQ.
{: class="lead-in"}

Users navigate between the browse pages within a subsection via the left side navigation list. If the content of a browse page requires further division into subpages that maintain the browse style, these subpages will also be listed in the left side navigation.
{: class="lead-in"}

<div class="content-33 content-first">
<h3>Standard content areas</h3>
{::nomarkdown}  
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Breadcrumb
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          The abbreviated breadcrumb shows the navigation path up to, but not including, the primary section landing page (i.e. About Us, Policy & Compliance).
        </p>
    </div>
</div> <!-- ./Breadcrumb -->

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Side navigation
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          Side navigation contains sibling browse pages or child sub-browse pages.
        </p>
    </div>
</div> <!-- ./Navigation -->

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Introduction
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          The introduction space contains a short, informative text description to help orient users. This area may also include a featured piece of content.
        </p>
    </div>
</div> <!-- ./Introduction -->

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Main content
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          This space is used to provide an overview of specific documents, resources, guides, or tools within the section. Formatting of modules in this area can vary greatly, from a list of blog posts to body copy about a specific topic. Content sections and links here may act as a secondary means of navigating to pages also listed within the left side navigation, or a primary means of navigating to individual learn pages, such as a full blog post.
        </p>
    </div>
</div> <!-- ./Main Content -->

<h3>Optional content area</h3>
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Pre-footer
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          The page-specific pre-footer space is typically used to share related, relevant, or recent content that applies to that section. Many different modules can live within a sidebar, they are typically repeatable modules that can can be used across multiple page types (examples: related XXXX, popular XXXX, recent XXXX, email sign up, etc.)
        </p>
    </div>
</div> <!-- ./Pre-footer -->
{:/nomarkdown}
</div>

<div class="content-67 content-last regular-ex">
  <img src="{{ site.baseurl }}/static/img/layout/browse.png" alt="Browse page layout">
</div>

<h2 id="learn">Learn</h2>

<h3>User goal: Engage and understand specific content</h3>

Learn pages invite the user to engage with a specific tool or learn more comprehensive information about a topic. Examples include articles, reports, or interactive tools.
{: class="lead-in"}

<div class="content-33 content-first">
<h3>Standard content areas</h3>
{::nomarkdown}  
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Breadcrumb
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          The abbreviated breadcrumb shows the navigation path up to, but not including, the primary section landing page (i.e. About Us, Policy & Compliance).
        </p>
    </div>
</div> <!-- ./Breadcrumb -->

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Introduction
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          The introduction space contains a short, informative description to help orient users to the detailed content that follows.
        </p>
    </div>
</div> <!-- ./Introduction -->

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Main content
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          At the learn level this space will contain the most specific information on a topic. In most instances this is the terminal level of information. Content format can vary greatly from a block of body copy to a full-width interactive tool.
        </p>
    </div>
</div> <!-- ./Main Content -->

<h3>Optional content area</h3>
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target">
        <span class="expandable_header-left expandable_label">
            Sidebar
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
          The sidebar space is typically used to share related, relevant, or recent content that applies to the section. Many different modules can live within a sidebar, they are typically repeatable modules that can can be used across multiple page types (examples: related XXXX, popular XXXX, recent XXXX, email sign up, etc.) If the learn page is not being used to display a full-width interactive tool, use of the sidebar to provide related, contextual information is strongly encouraged.
        </p>
    </div>
</div> <!-- ./Sidebar -->
{:/nomarkdown}
</div>

<div class="content-67 content-last regular-ex">
  <img src="{{ site.baseurl }}/static/img/layout/learn.png" alt="Learn page layout">
</div>
