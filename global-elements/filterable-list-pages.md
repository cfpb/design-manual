---
layout: page
title: Filterable list pages
category: Global elements
published: true
---

- [Use case](#use-case)
- [Behavior](#behavior)
- [Content guidelines](#content-guidelines)
- [Style](#style)
{: class="toc"}

Filterable list page types are used to house searchable lists of articles, documents, or other resources and publications.
{: class="lead-in"}

Most filterable list pages use the browse page template layout, though in rare cases they can be housed on a sublanding page template layout. The filterable list itself is composed of [post preview components]({{site.baseurl}}/global-elements/document-detail.html#behavior) that link to individual document detail pages.
{: class="lead-in"}

<div class="content-50 content-first">
#### Sublanding page
![Sublanding page mockup]({{site.baseurl}}//static/img/V1_imagery/sublanding_behavior_desktop.jpg)
</div>

<div class="content-50 content-last">
#### Browse page
![Sublanding page mockup]({{site.baseurl}}//static/img/V1_imagery/browse_behavior_desktop.jpg)
</div>

## Use case
<div class="content-67 content-first">
##### When to use
- When asking users to look through more than 20 articles, documents, or resources.
- Additional content may be included before or after the filterable list, but it is not encouraged. The filterable list should be the focus of the page. 

</div>

<div class="content-33 content-last">
##### Page components included
Within each area of the template, various components may be selected to best fit the content of the specific page being created.

#### Area 1
[Hero]({{site.baseurl}}/global-elements/heroes.html)

[Text introduction]({{site.baseurl}}/global-elements/text-introductions.html)

[Featured content module]({{site.baseurl}}/page-components/featured-content-module.html)

#### Area 2
[Full-width text]({{site.baseurl}}/page-components/fullwidth-text.html)

[Filter control panel]({{site.baseurl}}/page-components/filter-control.html)

[Post preview of document detail]({{site.baseurl}}/global-elements/document-detail.html)

[Pagination](#)

#### Area 3
[Sidebar breakout](#)

[Sidebar]({{site.baseurl}}/page-components/sidebar-prefooter.html)

[Email sign-up]({{site.baseurl}}/page-components/email-sign-up.html)
</div>

## Behavior
Responsive behavior follows the pattern of the base page types ([sublanding page](#) or [browse page](#)).

#### Sublanding page with filterable list

<div class="content-67 content-first">
901+ breakpoints

![Desktop mockup]({{site.baseurl}}//static/img/V1_imagery/sublanding_behavior_desktop.jpg)
</div>

<div class="content-33 content-last">
Breakpoints 900 and under

![Desktop mockup]({{site.baseurl}}//static/img/V1_imagery/sublanding_behavior_mobile.jpg)
</div>

#### Browse page with Filterable List

<div class="content-67 content-first">
901+ breakpoints

![Desktop mockup]({{site.baseurl}}//static/img/V1_imagery/browse_behavior_desktop.jpg)
</div>

<div class="content-33 content-last">
Breakpoints 900 and under

![Desktop mockup]({{site.baseurl}}//static/img/V1_imagery/browse_behavior_mobile.jpg)
</div>

## Content guidelines
- Text introduction and/or full width text should be used to introduce the documents that are being filtered.
- If any of the filtering labels are technical or require further explanation (such as categories), a full width text element can be placed above the filter control panel to provide further explanation.


## Style
Required elements: filter control panel, list of items ([displayed as post preview items]({{site.baseurl}}/global-elements/document-detail.html#behavior)) and pagination.
