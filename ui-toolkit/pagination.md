---
layout: page
title:  Pagination
category: UI toolkit
---

- [Style](#style)
- [States](#states)
- [Variations](#variations)
{: class="toc"}

<div class="content-50 content-first">

Pagination allows a user to browse through pages of search results, archives or any other kind of continuous content. Choosing pagination or infinite scrolling is subjective to the amount of content on a page, but should be implemented consistently across pages. 
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <i class="cf-icon cf-icon-github"></i>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-pagination"><h4>cf-pagination</h4></a>
      <p>Pagination in the Capital Framework</p>
    </li>
  </ul>
</div> 


## Style

The styling of the pagination bar is adapted from the button style. 

### Use

Use large clickable areas to avoid unwanted actions. Identify the current page and indicate the total number of pages. Allow for the user to move between previous and next pages.

Using generous whitespace to space out elements make it as easy to navigate through pages as it is to use all other navigation on the page.

## States 

#### First page

#### Middle page

#### Last page

## Variations

#### Infinite scrolling

Users generally have better experiences scrolling rather than clicking. For large amounts of text, readability can especially be improved through the use of infinite scrolling over pagination.








{::nomarkdown}
{% include ui-toolkit/pagination/custom.html %}
{:/nomarkdown}