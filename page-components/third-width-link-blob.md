---
layout: page
title: Third-width link blob
category: Page components
published: true
---

- [Use case](#use-case)
- [Behavior](#behavior)
- [Content guidelines](#content-guidelines)
- [Style](#style)
{: class="toc"}

<div>
The third-width link blob provides users with supplemental content or suggested navigation paths to sibling pages. The three-column layout utilizes extra screen real estate found at higher breakpoints.
{: class="lead-in"}

<nomarkdown>
<img src="{{site.baseurl}}/static/img/third_width_link_blob/third_width_link_blob_intro.png" alt="Mockup" height="100%" width="100%">
</nomarkdown>
</div>

## Use case
<div class="content-67 content-first">
#### When to use 
* Default option for providing users with secondary content or suggested navigation paths to sibling pages.
* Ideally, when a group of these components can be featured together in multiples of three (3, 6, 9, etc.). 

#### When other options are better 
* When the number of components would be better featured in multiples of 2 (Suggest using the half-width link blob)
* When headings are too long for the narrower width, for example, when they break to 3 lines or more.
* When content requires imagery (Suggest using the [50/50 image and text]({{site.baseurl}}/page-components/50-50.html) or the [25/75 image and text]({{site.baseurl}}/page-components/25-75.html) instead
* When there are multiple paragraphs of copy
* When the page includes a sidebar

</div>

<div class="content-33 content-last">
##### Where to use
[Landing page]({{site.baseurl}}/global-elements/landing-page.html)

[Sub-landing page]({{site.baseurl}}/global-elements/sublanding-page.html)

[Browse page]({{site.baseurl}}/global-elements/browse-page.html)
</div>

## Behavior
At breakpoints below 601, the three-column pattern transitions into a single column and stacks each instance in Z-order.

#### 601px and above (3 column)
<nomarkdown>
<img src="{{site.baseurl}}/static/img/third_width_link_blob/third_width_link_blob_behavior_1.png" alt="Mockup" height="100%" width="100%">
</nomarkdown>

#### 600px and below (1 column stacked)
<div class="content-33 content-last">
<nomarkdown>
<img src="{{site.baseurl}}/static/img/third_width_link_blob/third_width_link_blob_behavior_2.png" alt="Mockup">
</nomarkdown>
</div>

## Content guidelines
* Headings should be as succinct as possible, ideally 1 line at max column width (25 characters) or two lines at max column width maximum (45 characters).
* Description beneath heading should also be succinct, roughly 3-5 lines at max column width of text (between 90 and 150 characters).
* Call to action link should stay on a single line at max column width; 30 characters or less. Link content should follow link guidelines.
* When these components are featured together (which is ideal), the amount of content in each component should be as close to the same number of total lines as possible; a difference of one line is ok, but the components look best as a grouping when they are the same height (have the same number of lines).

## Style
<nomarkdown>
<img src="{{site.baseurl}}/static/img/third_width_link_blob/third_width_link_blob_style.png" alt="Mockup" height="100%" width="100%">
</nomarkdown>
<div class="content-67 content-first">
* Headings: Use H3 or H4. Do not use both. 
  * H3: Use when you wish to give the blob heading text a higher level of prominence within the page hierarchy. Avoid using H3 when it will cause the heading to break to 3 lines or more. 
  * H4: Use when you wish to give the heading text less prominence within the page hierarchy or when the blob set follows an H3 heading. When you select the H4 you have the option of including a minicon to the left of the heading.  
* Body copy: Avenir paragraph.
* At breakpoints below 601: H3 automatically drops down to an H4, the three-column pattern transitions into a single column and stacks, and the mobile link style is used for the call to action link(s)
</div>

<div class="content-33 content-last">
##### Component parts
[Links]({{site.baseurl}}/page-components/links.html)

[Typography]({{site.baseurl}}/brand-guidelines/typography.html)
</div>
