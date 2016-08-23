---
layout: page
title: Sidebar/prefooter
category: Page components
published: true
---

- [Use case](#use-case)
- [Behavior](#behavior)
- [Content guidelines](#content-guidelines)
- [Style](#style)
 {: class="toc"}

Sidebars are present across most page templates to house information related to the main content of the page. On pages with leftside sub-navigation, sidebar content may be displayed as an optional prefooter at the bottom of the main content.
{: class="lead-in"}

Sidebars may can contain related posts, calls to action, metadata, [email sign ups]({{site.baseurl}}//page-components/email-sign-up.html), [contact information]({{site.baseurl}}//page-components/contact-information.html), etc. Primary layout variations as seen in basic sidebar format:
{: class="lead-in"}

<div class="content-50 content-first">
#### Related posts
[![related_posts_example.jpg]({{site.baseurl}}/static/img/V1_imagery/related_posts_example.jpg)]({{site.baseurl}}/static/img/V1_imagery/related_posts_example.jpg)
[See larger image]({{site.baseurl}}/static/img/V1_imagery/related_posts_example.jpg)
</div>

<div class="content-50 content-last">
#### Related links
[![related_links_example.jpg]({{site.baseurl}}/static/img/V1_imagery/related_links_example.jpg)]({{site.baseurl}}/static/img/V1_imagery/related_links_example.jpg)
[See larger image]({{site.baseurl}}/static/img/V1_imagery/related_links_example.jpg)
</div>

<div class="content-50 content-first">
#### Metadata
[![metadata_example.jpg]({{site.baseurl}}/static/img/V1_imagery/metadata_example.jpg)]({{site.baseurl}}/static/img/V1_imagery/metadata_example.jpg)
[See larger image]({{site.baseurl}}/static/img/V1_imagery/metadata_example.jpg)
</div>

<div class="content-50 content-last">
#### Call to action with button
[![metadata_example.jpg]({{site.baseurl}}/static/img/V1_imagery/cta_example.png)]({{site.baseurl}}/static/img/V1_imagery/metadata_example.jpg)
[See larger image]({{site.baseurl}}/static/img/V1_imagery/cta_example.png)
</div>

<h2 id="use-case">Use case</h2>

### Related posts

<div class="content-67 content-first">

#### When to use
* This component is used to display lists of related content dynamically pulled from elsewhere in the site – blogs, events, and newsroom items– based on topic tag selections.
* The amount and types of related content may be restricted based on the subject matter and needs of the page.


#### When other options are better
* When lists of items should not be automatically updated consider related links instead.
* When posts will be mixed with other types of content.

</div>

<div class="content-33 content-last">
##### Used on all templates

[Landing page]({{site.baseurl}}//global-elements/landing-page.html)

[Sub-landing page]({{site.baseurl}}//global-elements/sublanding-page.html)

[Browse page]({{site.baseurl}}//global-elements/browse-page.html)

[Filterable list page]({{site.baseurl}}//global-elements/filterable-list-pages.html)

[Learn page]({{site.baseurl}}//global-elements/learn-page.html)

[Document detail]({{site.baseurl}}//global-elements/document-detail.html)

</div>


### Related links

<div class="content-67 content-first">

#### When to use
* When a specific, static piece of content and call to action needs to be displayed in the sidebar.
* When a static list of links or specific related posts need to be displayed in the sidebar.


#### When other options are better
* When all of the content is posts that can be dynamically populated. 
</div>

<div class="content-33 content-last">

##### Used on all templates

[Landing page]({{site.baseurl}}//global-elements/landing-page.html)

[Sub-landing page]({{site.baseurl}}//global-elements/sublanding-page.html)

[Browse page]({{site.baseurl}}//global-elements/browse-page.html)

[Filterable list page]({{site.baseurl}}//global-elements/filterable-list-pages.html)

[Learn page]({{site.baseurl}}//global-elements/learn-page.html)

[Document detail]({{site.baseurl}}//global-elements/document-detail.html)

</div>

### Metadata

<div class="content-67 content-first">

#### When to use
* When displaying relevant metadata about a specific document or set of documents, such as for a rule, notice, or report, for users to easily reference.

#### When other options are better
* When anything other than metadata for a document detail page is being displayed.
</div>

<div class="content-33 content-last">

##### Templates used on


[Document detail]({{site.baseurl}}//global-elements/document-detail.html)

</div>

### Call to action with button

<div class="content-67 content-first">

#### When to use
* When highlighting or featuring a call to take a specific action.

#### When other options are better
* When the "action" is navigating to another page of the site or downloading a document. Refer to the [buttons]({{site.baseurl}}/page-components/buttons.html) page for more information.
</div>

<div class="content-33 content-last">

##### Used on all templates

[Landing page]({{site.baseurl}}/global-elements/landing-page.html)

[Sub-landing page]({{site.baseurl}}/global-elements/sublanding-page.html)

[Browse page]({{site.baseurl}}/global-elements/browse-page.html)

[Filterable list page]({{site.baseurl}}/global-elements/filterable-list-pages.html)

[Learn page]({{site.baseurl}}/global-elements/learn-page.html)

[Document detail]({{site.baseurl}}/global-elements/document-detail.html)

</div>

<h2 id="behavior">Behavior</h2>

<p>All variations of sidebar element move into prefooter format at screen widths less than 901 px. The sidebar area can house multiple stacked sidebar elements.</p>

<div class="content-50 content-first">

#### Sidebar 901+

![behavior_sidebar_desktop.png]({{site.baseurl}}/static/img/V1_imagery/behavior_sidebar_desktop.jpg)
</div>

<div class="content-50 content-last">

#### Sidebar 900 or less (transition to prefooter)

![behavior_sidebar_mobile.png]({{site.baseurl}}/static/img/V1_imagery/behavior_sidebar_mobile.jpg)

</div>

<p>Prefooter format is automatically used on pages that have a left side secondary navigation.</p>

<p>Below 601 px width, for legibility link styling on clickable headings remains in the standard format, but mobile link style is applied where possible.</p>

<div class="content-50 content-first">

#### Prefooter 901+ (with side nav.)
![behavior_prefooter_desktop_1.jpg]({{site.baseurl}}/static/img/V1_imagery/behavior_prefooter_desktop_1.jpg)
</div>

<div class="content-50 content-last">

#### Prefooter 600 or less
![behavior_prefooter_mobile_1.jpg]({{site.baseurl}}/static/img/V1_imagery/behavior_prefooter_mobile_1.jpg)
</div>


<h2 id="content-guidelines">Content guidelines</h2>
* Slugs should be as succinct as possible, ideally 30 characters or less. They should be limited to one line at max column width.
* Description beneath heading should also be succinct, limited to 3 lines at max column width max; 100 characters.
* Call to action link should be limited to one line at max column width; 40 characters or less.




<h2 id="style">Style</h2>

<div class="content-33 content-first">

### Global

* Background: 5% grey (#F7F7F7)
* Multiple elements can be used in the sidebar/ prefooter but each should have their own slug label. 
* Under 600px all elements become single column. Mobile link style should be used in place of normal links at this size.

</div>

<div class="content-67 content-last">
![style_global.png]({{site.baseurl}}/static/img/V1_imagery/style_global.jpg)
</div>


<nomarkdown>
<img src="{{site.baseurl}}/static/img/V1_imagery/style_prefooter.jpg" alt="pre-footer style" height="100%" width="100%">
</nomarkdown>

<div class="content-67 content-first">
### Prefooter

* Content can be one or two columns in prefooter depending on need.
* Content is populated in a Z-order, chronologically.
</div>

<div class="content-33 content-last">
##### Component parts

[Illustration]({{site.baseurl}}/brand-guidelines/illustration.html)

[Links]({{site.baseurl}}/page-components/links.html)

[Minicons]({{site.baseurl}}/brand-guidelines/minicons.html)

[Photography]({{site.baseurl}}/brand-guidelines/photography.html)

[Typography]({{site.baseurl}}/brand-guidelines/typography.html)
</div>

<div class="content-33 content-first">


