---
published: true
layout: document
document_label: tables
stage: draft
css: "table-example"
sponsor: "Mike Morici, Stephanie Osan, Leah Wechsler"
title: Tables
subtitle: Table styling and usage

---
## Overview 
**What is the user going to do with this information?** A tables primary use is comparison of data, so when using tables, think about the analysis. 

**Is the user trying to "compare" something or "find" something?**
If the user isn't trying to compare rows or columns, then you want to use a list. 

**Do people use the tables to compare rows? Compare columns?**
If the user is trying to **compare** information, then use a table. Lists are often best suited to **finding** something, by displaying or locating one ore more items of interest based on a few characteristics. While sorting and grouping a list of data lets something be bubbled up and can make analysis of that data easier to achieve, when the primary goal is comparison, then use a table.

**Simple is generally better** let the data do the work and consider what, if any, interaction with cell data could be.
Keep number of rows displayed to a managable level (perhaps a maximum of 25), use pagination or scrolling for larger displays of data and consider if it is necessary for a user to download and take away the information in some way? 


## Guidelines
Tables fall into two categories: static and interactive.
**Static tables** simply display information and data, like the comparison table in Paying for College.
**Interactive tables** allow interaction, either sortability or by including other tools/functionality.


### Table cells
Padding: 15 px default, 10 px for a tighter table

### Heading row
Heading row label text should make sense to the users. The labels should use clear, concise language, and avoid multiline labels.
Use visual clues to explain fields that are used for filtering (a label or icon).
* Use sentence case versus all caps
* Header background color is left up to the designer
* Interactive tables: Paired and single arrows will be used for sorting (like on the intranet)

### Header text styling
* Avenir Next Demi
* Color: black or white, depending on header background color

### Table background color
Static table: alternating 5% gray and 10% gray colored backgrounds to divide table rows 
Interactive table: white background with 20% gray rules to separate rows.

### Table rows
* Interactive tables, on hover: individual rows highlight in another color.

### Table cell text styling
* Avenir Next Regular
* Default is same pt size as body copy of the page; 15px
* Color: black
* Sentence case


### Responsive strategies
Content is king when it comes to tables, but first things first:

**How are people going to see the table?** When thinking about ways to display the table, make sure you are clear on how they will view it. The amount of content to display follows these general rules of thumb:
* Essential data gets displayed on a smartphone
* essential + optional data gets displayed on a larger screen view
* all data gets displayed on a large screen

Sometimes the challenge as we deal with tables with many columns is the layout works for comparison on a larger display, but on a smaller display, what can you do?
The goal is to expose more data as space becomes available, accommodating for larger tables.



* Consider flipping the table, so that the header row is a header column and the rows are then columns that become scrollable. 
* Reduce the number of columns by using adding a filter. The [Filament group example](http://filamentgroup.com/examples/rwd-table-patterns/) allows you to show specific columns of data at specific sizes while allowing the user to choose what is important for them to compare.


We should never permanently hide data from the user; **show the user as much essential data as possible.** If we are hiding optional data in order to show essential data we need a way to expose that hidden data. 

Or maybe consider one of these options for displaying columns: 
* making the header sticky
* creating options for the user to display additional columns
* shift/move table columns per display
* hide/delete columns 

**Avoid**
* Horizontal scrolls, be responsive
* Zooming
* Collapsing data in a way that makes it worse for the user to understand or find what they are looking for
* Using a table in place of a list

## Examples

**Static table**


<div class="guide-example">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Mon, April 1
                </td>
                <td>
                    Steve Antonakes: Travel to DC
                </td>
            </tr>
            <tr class="alt">
                <td>
                    Mon, April 1
                </td>
                <td>
                    Richard Cordray: Speech Prep
                </td>
            </tr>
            <tr>
                <td>
                    Mon, April 1
                </td>
                <td>
                    Richard Cordray: Social Media Discussion
                </td>
            </tr>
            <tr class="alt">
                <td>
                    Mon, April 1
                </td>
                <td>
                    Richard Cordray: Check-In with Ana Mahony
                </td>
            </tr>
        </tbody>
    </table>
</div>

**Interactive table**



<div class="guide-example">
    <table class="interactive-table">
        <thead>
            <tr>
                <th class="sorting">Date</th>
                <th class="sorting">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Mon, April 1
                </td>
                <td>
                    Steve Antonakes: Travel to DC
                </td>
            </tr>
            <tr class="alt">
                <td>
                    Mon, April 1
                </td>
                <td>
                    Richard Cordray: Speech Prep
                </td>
            </tr>
            <tr>
                <td>
                    Mon, April 1
                </td>
                <td>
                    Richard Cordray: Social Media Discussion
                </td>
            </tr>
            <tr class="alt">
                <td>
                    Mon, April 1
                </td>
                <td>
                    Richard Cordray: Check-In with Ana Mahony
                </td>
            </tr>
        </tbody>
    </table>
</div>

**Responsive tables**

**Tables with many columns of short-form data**

As a horizontal layout, which is good for larger screens.
![tables-horz]([guideAssets]/images/tables-example1-horz.svg)


...and then as a vertical layout, which works well for smaller screens. 
![tables-vert]([guideAssets]/images/tables-example1-vert.svg)

**Annotations** 
1. Table cells - Padding: 15 px default, 10 px for a tighter table
2. Heading row - Use sentence case versus all caps, Avenir Next Demi, 15px, and the color: black or white, depending on header background color
3. Table rows - Since this is a static table, the rows background alternates between 5% gray and 10% gray colored backgrounds
4. Table cell text styling - Avenir Next Regular, default is same pt size as body copy of the page; 15px, color: black, using sentence case

**Tables with long-form data**
If filtering isn't an option, then maybe use a [vertical comparison](https://github.cfpb.gov/github-enterprise-assets/0000/0094/0000/0630/e0062e46-0f29-11e3-9eeb-ca5087f4b682.png), reserving accordions for when a vertical table is too long (this allows us to show essential row header information while allowing the user to compare the data that is meaningful to them).
* Add example image here


## Related elements 
[Buttons](https://github.cfpb.gov/pages/nicholasw/digital-product-guide/guide/common-web-elements/buttons.html)

[Typography](https://github.cfpb.gov/pages/nicholasw/digital-product-guide/guide/common-web-elements/typography.html)
