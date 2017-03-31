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
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-layout"><h4>cf-layout</h4></a>
      <p>Heroes in the Capital Framework</p>
    </li>
  </ul>
</div> 


<h2 id="use-case">Use case<span class="cf-code-link"><a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/cf-layout.less#L618-L620">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>


<div class="content-67 content-first">
Heroes should be the most prominent element on a page, in terms of their position and visual footprint. Heroes should only be used on top level pages, including landing and sublanding pages.
</div>

<div class="content-33 content-last">
##### Where to use
[Landing page]({{site.baseurl}}/global-elements/landing-page.html)

[Sub-landing page]({{site.baseurl}}/global-elements/sublanding-page.html)

</div>

<h2 id="behavior">Behavior<span class="cf-code-link"></h2>

Below the 601 px breakpoint, the text and image stack to span the full width of the viewport.

<div class="content-75 content-first"> 
<h4>601 px and above</h4> 
<img alt="Image of hero graphic at desktop size" src="../static/img/hero/hero_behavior_desktop.png"/>
</div>

<div class="content-25 content-last"> 
<h4>600 px and below</h4>
<img alt="Image of hero graphic at mobile size" src="../static/img/hero/hero_behavior_mobile.png"/>
</div>

<h2>Content guidelines</h2>
Hero content should serve to orient the user and communicate the primary goal of the page. Copy should be succint and engaging, reflecting the voice and tone of the CFPB. 

<div class="content-50 content-first"> 
  <h4>One line heading</h4> 
- One line heading at largest breakpoint
- Heading: 43 characters (maximum)
- Subheading: 165 characters (minimum) / 185 characters (maximum)
</div>

<div class="content-50 content-last">
  <img alt="Image of hero graphic with one line heading" src="../static/img/hero/hero_content_one_line_heading.png"/>
</div>

<div class="content-50 content-first"> 
  <h4>Two line heading</h4>
- Two line heading at largest breakpoint
- Heading: 40 characters (minimum) / 86 characters (maximum)
- Subheading: 25 characters (minimum) / 105 characters (maximum)
</div>

<div class="content-50 content-last">
  <img alt="Image of hero graphic with one line heading" src="../static/img/hero/hero_content_two_line_heading.png"/>
</div>

<h2 id="style">Style<span class="cf-code-link"><a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/cf-layout.less#L618-L620">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

- All illustrations should be saved at 200% to accommodate retina displays
- Use a transparent background or match the background color to the background hexcode of overall hero space

<h3>Standard</h3>

<h4>Illustration (no bleed)</h4>
- Single illustration for both large and small screens
- Dimensions for all screens: 470px x 195px (940px x 390px)
- Height dimension for small screens is the maximum

<img alt="Image of non-bleed hero graphic with dimensions" src="../static/img/hero/hero_style_size_non_bleed.png"/>

<h3>Variations</h3>

<h4>Photo</h4>
- When selecting a photo include a 30px horizontal margin of clear space between text and image area
- Type contrast ratios cannot be mathematically determined for photos so special care should be paid when selecting these images
- Small and large screen compositions should contain the same elements but can differ
- Dimensions for large screens: 1230px x 285px
- Dimensions for small screens: 600px x 338px
- Height dimension for small screens is the maximum 


<img alt="Image of photo hero graphic with dimensions" src="../static/img/hero/hero_style_size_photo.png"/> 

<h4>Illustration (bleed)</h4>
- Illustration bleeds top and bottom
- Dimensions for large screens: 470px x 305px (940px x 610px)
- Dimensions for small screens (maximum): 570px x 450px (1140px x 900px)

<img alt="Image of bleed illustration hero graphic with dimensions" src="../static/img/hero/hero_style_size_bleed.png"/> 


<h3>Style at different breakpoints</h3>

<h4>901px and above</h4> 
- Heading: H1
- Subheading: Avenir Next Regular, 22px/28px
- Top and bottom padding: 45px
- Text is vertically centered
- Total height is 285px (fixed)

<div class="content-75 content-first"> 
<img alt="Image of hero graphic at desktop width" src="../static/img/hero/hero_style_desktop.png"/>
</div>

<h4>Between 900px and 601px</h4>
- Heading: H2
- Subheading: Avenir Next Regular, 18px/22px
- Top and bottom padding: 30px
- Module height is flexible to text height

<div class="content-50 content-first"> 
<img alt="Image of hero graphic at tablet width" src="../static/img/hero/hero_style_tablet.png"/>
</div>

<h4>600px and below</h4>
- Heading: H2
- Subheading: Avenir Next Regular, 18px
- Top and bottom padding: 30px
- Module height is flexible to text height
- Illustration spans full width (less 15px left and right padding)

<div class="content-25 content-first"> 
<img alt="Image of hero graphic at mobile width" src="../static/img/hero/hero_style_mobile.png"/>
</div>








