---
layout: page
title: Half-width link blob
category: Page components
published: true
---

- [Use case](#use-case)
- [Behavior](#behavior)
- [Content guidelines](#content-guidelines)
- [Style](#style)
{: class="toc"}

<div>
The half-width link blob is used on higher-level template pages to provide succinct descriptions and lead users to content deeper within the section. The two-column layout utilizes extra screen real estate found at higher breakpoints.
{: class="lead-in"}

<nomarkdown>
<img src="{{site.baseurl}}/static/img/V1_imagery/halfwidthblob_intro_mockup.png" alt="Mockup" height="100%" width="100%">
</nomarkdown>
</div>

## Use case
<div class="content-67 content-first">
#### When to use 
- Default option for providing succinct descriptions and navigation paths to child pages from a parent page.
- Ideally, when an even number of these components can be featured together.

#### When other options are better 
- When the number of components would be better featured in multiples of 3. Suggest using third-width link blob.
- When content requires imagery. Suggest using the [50/50 image and text]({{site.baseurl}}/page-components/50-50.html) or [25/75 image and text]({{site.baseurl}}//page-components/25-75.html) components instead.
- When there are multiple paragraphs of copy
- When we are not implying a parent/child relationship between the current page and the linked page
</div>

<div class="content-33 content-last">
##### Where to use
[Landing page]({{site.baseurl}}/global-elements/landing-page.html)

[Sub-landing page]({{site.baseurl}}/global-elements/sublanding-page.html)

[Browse page]({{site.baseurl}}//global-elements/browse-page.html)
</div>

## Behavior
At breakpoints below 601, the two-column pattern transitions into a single column and stacks each instance in Z-order.

<div class="content-50 content-first">
#### 601 and above (2 column)
![Desktop mockup]({{site.baseurl}}/static/img/V1_imagery/halfwidthblob_behavior_mockup_1.png)
</div>

<div class="content-50 content-last">
#### 600 and below (1 column stacked)
![Stacked mockup]({{site.baseurl}}/static/img/V1_imagery/halfwidthblob_behavior_mockup_2.png)
</div>

## Content guidelines
- Headings should be as succinct as possible, ideally 1 line at max column width (25 characters) or two lines at max column width maximum (50 characters).
- Description beneath heading should also be succinct, roughly 3-5 lines at max column width of text (100-250 characters).
- Call to action link should stay on a single line at max column width; 40 characters or less. Link content should follow [link guidelines]({{site.baseurl}}/page-components/links.html).
- When these components are featured together (which is ideal), the amount of content in each component should be as close to the same number of total lines as possible; one or two lines different is ok, but the components look best as a grouping when they are the same height. 


## Style
<nomarkdown>
<img src="{{site.baseurl}}/static/img/V1_imagery/halfwidthblob_style_mockup.png" alt="Mockup with specs" height="100%" width="100%">
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
