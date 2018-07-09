---
layout: page
title: Minicons
category: Brand guidelines
redirect_from: "/identity/minicons.html"
---

- [Stylistic guidelines](#stylistic-guidelines)
- [Asset library](#asset-library)
- [Download](#download)
{: class="toc"}

<div class="content-67 content-first">

Minicons are small-scale icons that visually reinforce an interface action, file type, status, or category.
{: class="lead-in"}

Minicons are visually simple, quickly recognizable, and easy to understand. They are almost always used in context with descriptive text and function to reinforce the message of that text.
{: class="lead-in"}

</div>

<div class="content-33 content-last">

![CFPB Minicons]({{ site.baseurl }}/static/img/minicons/Minicons0_@2.png "CFPB Minicons")

</div>

## Stylistic guidelines

<div class="content-33 content-first">

### Scaling

#### Web scale
The following primary benchmark sizes should be used for web sizing:

* 16px: inline with text
* 20px: on buttons
* 25px: social media sharing sets
* 30px: inline with large text links
* 40px: paired with primary headers

</div>

<div class="content-67 content-last">

<table class="minicon-scale-table">
    <thead>
        <th>16px</th>
        <th>20px</th>
        <th>25px</th>
        <th>30px</th>
        <th>40px</th>
    </thead>
    <tbody>
        <td class="minicon-scale-16px">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-20px">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-25px">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-30px">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-40px">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
    </tbody>
</table>

</div>

<div class="content-33 content-first">

#### Print scale
The following primary benchmark sizes should be used for print sizing:

* 14pt: inline with text
* 21pt: numbers, contact icons
* 28pt: numbers, contact icons
* 36pt: numbers, contact icons
* 48pt: paired with primary headers

</div>

<div class="content-67 content-last">

<table class="minicon-scale-table">
    <thead>
        <th>14pt</th>
        <th>21pt</th>
        <th>28pt</th>
        <th>36pt</th>
        <th>48pt</th>
    </thead>
    <tbody>
        <td class="minicon-scale-14pt">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-21pt">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-28pt">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-36pt">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
        <td class="minicon-scale-48pt">
            {% include icons/loan.svg %}
            {% include icons/loan-round.svg %}
        </td>
    </tbody>
</table>

</div>

<div class="content-33 content-first">

### Color
Minicons should always be one color. If used over a color field, negative space should be knocked out.

Although color usage is flexible, minicons should always be used in high contrast tones relative to the background to maximize legibility.

</div>

<div class="content-67 content-last">


<div class="content-50 content-first">
#### One color

![One color minicon example]({{ site.baseurl }}/static/img/minicons/Minicons3a_@2.png "One color minicon example")
</div>
<div class="content-50 content-last">
#### Negative space knocked out

![Negative space knocked out minicon example]({{ site.baseurl }}/static/img/minicons/Minicons3b_@2.png "Negative space knocked out minicon example")
</div>

</div>

<div class="content-33 content-first">

### Spacing

Padding varies around minicons of various primary shapes. Square, vertically and horizontally rectangular, diagonal, and most complex minicons can fit within the relative padding bounding box. Circular and some complex icons should be slightly larger to offset the visual weight of surrounding negative space.

</div>

<div class="content-67 content-last">

![Minicon spacing diagram]({{ site.baseurl }}/static/img/minicons/Minicons4_@2.png "Minicon spacing diagram")

</div>

<div class="content-33 content-first">

### Animation

In certain instances, minicons can be animated to aid communication or to
reassure the user that an action is functioning as intended. Examples include
saving or loading content. Depending on the context, the animated minicon
follows the standards of the component that contains it, for example, the
minicon follows the size and padding standards for buttons when placed inside
a [button to indicate loading]({{site.github.url}}/page-components/buttons.html#animation)
or follows standards of a form-level alert within an
[alert message]({{site.github.url}}/page-components/form-fields.html#form-level-action).

</div>

<div class="content-67 content-last">
{::nomarkdown}
    <div class="minicon-asset-lib">
        <!-- empty div unfortunately required for layout spacing -->
        <div class="minicon-assets-div"></div>
        <div class="minicon-assets-div">
            <h6>Update</h6>
            <p>
                {% include icons/updating.svg %}
            </p>
        </div>
        <!-- empty div unfortunately required for right border -->
        <div class="minicon-assets-div"></div>
    </div>
{:/nomarkdown}
</div>

<h2 id="asset-library">
    Asset Library
    <span class="cf-code-link">
        <a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-icons">
            View code {% include icons/external-link.svg %}
        </a>
    </span>
</h2>

<div class="minicon-asset-lib">

{% include identity/icons/index.md %}

</div>

## Download

<div class="content-50 content-first">

### Minicon font
Our full minicon set is available for desktop use as an icon font (.ttf). It can be accessed through programs like Illustrator and InDesign via the glyph panel.

<a href="https://github.com/cfpb/cf-icons/blob/gh-pages/src/fonts/cf-icons.ttf?raw=true" target="_blank" class="a-btn">
    <span class="a-btn_icon
                 a-btn_icon__on-left">{% include icons/download.svg %}</span>
    Download .ttf
</a>

</div>

<div class="content-50 content-last">

### Vector files
Each of our minicons is available for download as a vector (.svg) on The Noun Project, a platform that collects and catalogs icons that are created and uploaded by graphic designers from around the world.

<a class="icon-link icon-link__external-link" href="http://thenounproject.com/cfpb_minicons/">
    View on Noun Project
</a>

</div>
