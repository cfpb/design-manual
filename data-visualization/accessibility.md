---
layout: page
title:  Accessibility
category: Data visualization
published: true
---

- [Alt tags](#alt-tags)
- [Color contrast and color blindness](#color-contrast-and-color-blindness)
 {: class="toc"}


Allowing all users to be able to comprehend charts and graphics is a key part
of being a government agency that serves the entire American public. This is an
interpretation of what it means for a chart to be 508 compliant and accessible,
starting with descriptive titles (see the [Data visualization chart components
subsection on titles](chart-components.html#titles)) and not only relying on
color to connect data to its meaning (with details in the [Data visualization
color section](color.html)).
{: class="lead-in"}

##### Key questions
* How would someone using a screen reader interact with this visualization?
* How would someone with low vision interact with this visualization?

### Alt tags
Alt tags are what a screen reader will say instead of the image. This is
important for not only web materials, but charts that are in pdfs and charts
that are placed as images into word documents.

Screen readers read all of the text in an alt tag without allowing users to
speed up, or skip. Make sure the information in the alt tag is descriptive but
succinct.

Alt tags should include:
* One sentence of what the chart is, including the chart type for users with
limited vision who can see part of it, but may not be able to have a full
understanding of the graph.

> _Example:_ Bar chart showing complaints by type for New York metro area, New
York state and the United States.

* A link to a CSV or other machine-readable data format with the data so people
with impaired vision can tab through the data with a screen reader. The data
should have descriptive column labels and provide a link.

### Color contrast and color blindness

See the [color section](color.html) of these data visualization guidelines.
