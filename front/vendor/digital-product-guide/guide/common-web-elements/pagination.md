---
published: true
layout: document
document_label: pagination
stage: draft
css: "pagination-example"
sponsor: "Nicholas Wallen, Lee Williams, Scott Cranfill"
title: Pagination
subtitle: "Guidelines for breaking out large result sets into multiple pages"
---

## What it is

To be written.


## When to use it

To be written.


## CFPB style

<div class="guide-example">
    <nav class="pagination">
        <a class="button button-icon prev-page" href=""><i class="icon-chevron-left"><span class="jekyll-bug"></span></i> Previous</a>
        <form class="pagination-form">
            <label for="current-page">Page</label>
            <input class="current-page" id="current-page" name="current-page" type="text" value="2" />
            <label>of 149</label>
            <button class="button button-link page-go" id="page-go" type="submit">Go</button>
        </form>
        <a class="button button-icon next-page" href="">Next <i class="icon-chevron-right"><span class="jekyll-bug"></span></i></a>
    </nav>
</div>

### To do:

- [ ] Audit this code for accessibility
- [ ] Post sample code when satisfied
