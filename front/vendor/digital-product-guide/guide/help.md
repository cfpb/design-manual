---
layout: document
stage: draft
sponsor: Nicholas Wallen
document_label: help
title: Help
subtitle: How to use the CFPB digital product guide
page_type: meta
---

## Process

The [Product Quality & Standards Working Group](https://github.cfpb.gov/CFPB/ProductTeamWorkingGroups/wiki/Product-quality-and-standards) is piloting a three-stage process for creating guideline documents: 

<p><span class="mini-stage-label stage-draft"> draft </span>  collecting and writing guidelines based on existing patterns and best practices (~ 1 week)</p>

<p><span class="mini-stage-label stage-comment"> comment </span>  publicized for feedback and suggestions from T&amp;I (~ 1 week)</p>

<p><span class="mini-stage-label stage-final"> final </span>  considered a guideline: all products are evaluated by the guideline and must give a rational when they depart from it</p>

Each guideline document has a sponsor who is the point of contact and responsible for moving the guideline process along. Attend the [Product Quality & Standards Working Group](https://github.cfpb.gov/CFPB/ProductTeamWorkingGroups/wiki/Product-quality-and-standards) meeting (time and contact on [The Wiki](https://github.cfpb.gov/CFPB/ProductTeamWorkingGroups/wiki/Product-quality-and-standards)) to propose a guideline you would like to sponsor.

## Contributing

### Add an Issue
The best way to give feedback or ask a question about a particular guideline is to add an Issue. Click the "Add an Issue" link at the top of the guideline. The issue will appear within the guideline once the Sponsor or someone else with editing permissions adds the appropriate label to the issue. If you have editing permissions the appropriate label will be automatically applied to your issue.

### Edit a Guideline
If you have editing permission you amy edit any guideline. To edit, click one of the "Page Edit" links in any document. This will open the source for the guideline in Prose.io, which is a editor for GitHub documents. Documents use markdown syntax. Each guideline tracks its own history. So, don't be afraid to make edits. Although, major content changes to an established guideline should be discussed by adding an issue, first.  

### Create a Guideline
To create a guideline document add a new markdown file to the appropriate folder within the repository containing a special header:

    ---
    layout: document
    document_label: <the label that will be applied to issues created about the guideline>
    stage: <draft, comment or final -- depending on the stage>
    css: <filename of specific css file within "guide/assets/css/" without ".css">
    sponsor: <your name, if you are the document sponsor>
    title: <the title of the guide line>
    subtitle: <a short description of the guideline>
    ---

Guidelines are grouped by the folders with the "guide" folder. Any document added to one of these folders will automatically appear in the guide index.If you wish to create a new category, create a new folder within the "guide" folder -- you will also need to add the name of the folder to the "page_categories" variable in the `_config.yml` file.
