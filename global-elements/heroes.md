---
layout: page
title: Heroes
category: Global elements
published: true
redirect_from: "/ui-toolkit/heroes.html"
---

- [Use case](#use-case)
- [Behavior](#behavior)
- [Content guidelines](#content-guidelines)
- [Style](#style)
 {: class="toc"}

<div class="content-50 content-first">
Heroes function as a primary focal point on a page, often used to introduce a collection of pages by combining a brief description of the goals of that section along with a visually impactful graphic.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Source Code</h5>
  <ul class="repo-list">
    <li>
      {% include icons/github.svg %}
    </li>
    <li>
      <a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/molecules/heroes.less">
        <h4>cf-layout</h4>
      </a>
      <p>Heroes in Capital Framework</p>
    </li>
  </ul>
</div>


## Use case

<div class="content-67 content-first">
Heroes are the most prominent component on a page, in terms of their position and visual footprint. Heroes should only be used on top level pages, including landing and sublanding pages.
</div>

<div class="content-33 content-last">
##### Where to use
[Landing page]({{site.baseurl}}/global-elements/landing-page.html)

[Sublanding page]({{site.baseurl}}/global-elements/sublanding-page.html)
</div>

<img alt="Image of standard hero graphic" src="{{site.github.url}}/static/img/hero/hero_use-case.png"/>

<h4>When to use</h4>
- When orienting a user to a new section or topic
- When the page serves as a navigational tool with general information about a subject and links to lower-level pages that contain more specific information

<h4>When other options are better</h4>
- When introducing a specific piece of content, like a blog, press release, or other lengthy or detailed content, use the [text introduction]({{site.baseurl}}/global-elements/text-introductions.html)

## Behavior

Below the 601 px breakpoint, the text and image stack to span the full width of the viewport.

<div class="content-75 content-first">
<h4>601 px and above</h4>
<img alt="Image of hero graphic at desktop size" src="{{site.github.url}}/static/img/hero/hero_behavior_large.png"/>
</div>

<div class="content-25 content-last">
<h4>600 px and below</h4>
<img alt="Image of hero graphic at mobile size" src="{{site.github.url}}/static/img/hero/hero_behavior_small.png"/>
</div>

## Content guidelines

Hero content should serve to orient the user and communicate the primary goal of the page. Copy should be succinct and engaging, reflecting the voice and tone of the CFPB.

<h3>Purpose</h3>
Hero copy should be written from the user’s perspective. It’s less about what we can do for them or what we can offer them, and more about what the user can do with the resources we provide.

Hero content should help a user answer these two questions:

- Is this page what I was looking for? (orient the user)
- Do I want to keep reading? (engage the user)

Since the goal of the hero is to get the user to continue reading the page, don't include links or calls to action within the hero. If there is content that needs to link elsewhere for explanation, place it underneath the hero within the main content area.

<h3>Writing hero content</h3>

<h4>Heading</h4>
Headings should communicate what the user can learn from the page or the benefit the page provides. Headings should be a single phrase, preferably one line at the largest breakpoint. Take care to avoid orphaned text.

Headings should not include a period at the end. Question marks can be used when a question is asked, but avoid phrasing heroes as questions. Actionable, descriptive, orienting statements work best.

- One-line (at largest breakpoint): 41 characters maximum
- Two-line (at largest breakpoint): 82 characters maximum


<h4>Subheading</h4>
Subheading content should be brief, enticing, and build upon the heading to describe the value of the page. Take care to avoid orphaned text.

- After one-line heading: Between 165 and 186 characters (three lines at largest breakpoint)
- After two-line heading: Between 108 and 124 characters (two lines at largest breakpoint)

<h2 id="style">Style<span class="cf-code-link"><a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/molecules/heroes.less">View code {% include icons/external-link.svg %}</a></span></h2>

<div class="content-67 content-first">
- All illustrations should be saved at 200% to accommodate retina displays
- When saving illustrations, use a transparent background
</div>

<div class="content-33 content-last">
##### Component parts

[Illustration]({{site.baseurl}}/brand-guidelines/illustration.html)

[Photography]({{site.baseurl}}/brand-guidelines/photography.html)
</div>

<h3>Standard hero</h3>

<h4>Illustration (no bleed)</h4>
- Single image for both large and small screens
- Illustration dimensions: 470px (exact) x 195px (maximum) (2x: 940px x 390px)

<div class="content-50 content-last">
  <p>Large screens (601+)</p>
  <img alt="Image of non-bleed hero graphic with dimensions" src="{{site.github.url}}/static/img/hero/hero_style_non-bleed_large.png"/>
</div>

<div class="content-50 content-last">
 <p>Small screens (600-)</p>
  <img alt="Image of photo hero graphic with dimensions" src="{{site.github.url}}/static/img/hero/hero_style_non-bleed_small.png"/>
</div>

<h3>Hero variations</h3>

<h4>Photo</h4>
- Two images must be created, one for large and one for small screens
- Large and small screen images should contain the same elements but can differ compositionally
- When selecting a photo include a 30px horizontal margin of clear space between text and image area
- Type contrast ratios cannot be mathematically determined for photos so special care should be paid when selecting these images
- To conserve vertical space, small screen image should be as short as possible
- Photo dimensions for large screens (exact): 1230px x 285px
- Photo dimensions for small screens: 600px (exact) x 338px (maximum)

<div class="content-50 content-last">
  <p>Large screens (601+)</p>
  <img alt="Image of photo hero graphic with dimensions" src="{{site.github.url}}/static/img/hero/hero_style_photo_large.png"/>
</div>

<div class="content-50 content-last">
 <p>Small screens (600-)</p>
  <img alt="Image of photo hero graphic with dimensions" src="{{site.github.url}}/static/img/hero/hero_style_photo_small.png"/>
</div>

<h4>Illustration (bleed)</h4>
- Two images must be created, one for large and one for small screens
- Large and small screen images should contain the same elements but can differ compositionally
- On large screens, illustration bleeds top and bottom
- Large screen image dimensions are based on maximum possible hero height at 601px width
- To conserve vertical space, small screen image should be as short as possible
- Illustration dimensions for large screens (exact): 470px x 638px (2x: 940px x 1276px)
- Illustration dimensions for small screens: 570px (exact) x 320px (maximum) (2x: 1140px x 640px)

<div class="content-50 content-last">
  <p>Large screens (601+)</p>
  <img alt="Image of bleed illustration hero graphic with dimensions" src="{{site.github.url}}/static/img/hero/hero_style_bleed_large.png"/>
</div>

<div class="content-50 content-last">
  <p>Small screens (600-)</p>
  <img alt="Image of bleed illustration hero graphic with dimensions" src="{{site.github.url}}/static/img/hero/hero_style_bleed_small.png"/>
</div>

<h3>Style at different breakpoints</h3>

<h4>901px and above</h4>
- Heading: H1
- Subheading: Avenir Next Regular, 22px/28px
- Top and bottom padding: 45px
- Left and right padding: 30px
- Text is vertically centered
- Total height is 285px (fixed)

<div class="content-75 content-first">
<img alt="Image of hero graphic at desktop width" src="{{site.github.url}}/static/img/hero/hero_style_desktop.png"/>
</div>

<h4>Between 900px and 601px</h4>
- Heading: H2
- Subheading: Avenir Next Regular, 18px/22px
- Padding on all sides: 30px
- Module height is flexible to text height

<div class="content-50 content-first">
<img alt="Image of hero graphic at tablet width" src="{{site.github.url}}/static/img/hero/hero_style_tablet.png"/>
</div>

<h4>600px and below</h4>
- Heading: H2
- Subheading: Avenir Next Regular, 18px/22px
- Top and bottom padding: 30px
- Left and right padding: 15px
- Module height is flexible to text height

<div class="content-25 content-first">
<img alt="Image of hero graphic at mobile width" src="{{site.github.url}}/static/img/hero/hero_style_mobile.png"/>
</div>








