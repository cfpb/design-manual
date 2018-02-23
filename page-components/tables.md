---
layout: page
title:  Tables
category: Page components
---

- [Use cases](#use-cases)
- [Behavior](#behavior)
- [Content guidelines](#content-guidelines)
- [Style](#style)
{: class="toc"}

<div class="content-50 content-first">

Tables divide information into distinct columns and rows to create an intersection “cell” where data is displayed.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Source Code</h5>
  <ul class="repo-list">
    <li>
      {% include icons/github.svg %}
    </li>
    <li>
      <a href="https://github.com/cfpb/capital-framework/tree/canary/src/cf-tables"><h4>cf-tables</h4></a>
      <p>Tables in Capital Framework</p>
    </li>
  </ul>
</div>

## Use cases

<div class="content-50 content-first">
Tables are only one method for presenting many data points grouped together in a visual way. Other options include charts or graphs.

Tables serve a unique purpose of allowing easy organization or comparison of more complex data than a chart or graph. They can be read either vertically (by columns) or horizontally (by rows).

Tables work best when:

- Presenting sequential data
- Data being presented requires specific or precise values
- Individual values are being presented or compared
- Values across columns or rows require different units of measurement
</div>
<div class="content-50 content-last">
{::nomarkdown}
    <table class="o-table o-table__stack-on-small">
        <thead>
            <tr>
                <th>
                    Column 1
                </th>
                <th>
                    Column 2
                </th>
                <th>
                    Column 3
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Column 1">
                    Cell A1
                </td>
                <td data-label="Column 2">
                    Cell A2
                </td>
                <td data-label="Column 3">
                    Cell A3
                </td>
            </tr>
            <tr>
                <td data-label="Column 1">
                    Cell B1
                </td>
                <td data-label="Column 2">
                    Cell B2
                </td>
                <td data-label="Column 3">
                    Cell B3
                </td>
            </tr>
            <tr>
                <td data-label="Column 1">
                    Cell C1
                </td>
                <td data-label="Column 2">
                    Cell C2
                </td>
                <td data-label="Column 3">
                    Cell C3
                </td>
            </tr>
            <tr>
                <td data-label="Column 1">
                    Cell D1
                </td>
                <td data-label="Column 2">
                    Cell D2
                </td>
                <td data-label="Column 3">
                    Cell D3
                </td>
            </tr>
        </tbody>
    </table>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
### Stacking tables

Since the nature of tables relies so much on visual space, there are several common variations that can be used to accommodate different types of data in a table.

A default table would “stack” the information on a smaller screen, since shrinking a table that maintained its columns/row structure would make it illegible.
</div>
<div class="content-50 content-last">
![A table as it would appear on a small screen]({{ site.baseurl }}/static/img/tables/table-small.png)
</div>

<div class="content-50 content-first">
### Directory tables

When the data you’re presenting should only be read across the rows (instead of down columns), you can use a directory table. The first column in these tables is what organizes or labels the other data points in the row.

For instance, contact information is comprised of a name, phone number, and email address. An event is made up of the name of the event, time, and location. You need all three pieces of data to create an understanding of the thing being shown, and the first column of data is the key to that understanding.

The default stacking behavior on smaller breakpoints doesn’t maintain that “first column” importance since it stacks based on column headers.

As such, at the small screen breakpoint, the directory table pattern uses that first column data (employee name, for instance) as a way to group and label stacks of rows.

See [guidance on styles](#style) for a a directory table and how it should look on smaller breakpoints.
</div>
<div class="content-50 content-last">
{::nomarkdown}
    <p>
        <span class="h5">
            Table 1:
        </span>
        Directory table on large screens
    </p>
    <table class="o-table o-table__stack-on-small">
        <thead>
            <tr>
                <th>
                    Employee
                </th>
                <th>
                    Date and time
                </th>
                <th>
                    Room
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Employee">
                    Andrew Able
                </td>
                <td data-label="Date and time">
                    Thurs. January 25, 8 pm
                </td>
                <td data-label="Room">
                    1001
                </td>
            </tr>
            <tr>
                <td data-label="Employee">
                    Betsy Bort
                </td>
                <td data-label="Date and time">
                    Fri. January 25, 3:30 pm
                </td>
                <td data-label="Room">
                    325
                </td>
            </tr>
            <tr>
                <td data-label="Employee">
                    David Jones
                </td>
                <td data-label="Date and time">
                    Fri. January 25, 3 pm
                </td>
                <td data-label="Room">
                    1001
                </td>
            </tr>
            <tr>
                <td data-label="Employee">
                    Sarah Lamb
                </td>
                <td data-label="Date and time">
                    Mon. January 28, 8 pm
                </td>
                <td data-label="Room">
                    801
                </td>
            </tr>
        </tbody>
    </table>
    <br>
    <p>
        <span class="h5">
            Table 2:
        </span>
        Directory table on small screens
    </p>
{:/nomarkdown}
![A directory table as it would appear on a small screen]({{ site.baseurl }}/static/img/tables/table-small-header.png)
</div>

<div class="content-50 content-first">
### Scrolling tables

When the data you’re presenting has more columns than what will comfortably fit on the screen, you can use a table that scrolls horizontally. This becomes especially important when thinking about tables on smaller screens, instead of allowing the data to stack at smaller breakpoints.

Using a table that scrolls ensures that all the information can be accessed in its original tabular structure, even on a smaller screen.

See [guidance on styles](#style) for a table that scrolls horizontally at all screen sizes.
</div>

<div class="content-50 content-last">
![A scrolling table as it would appear on a small screen]({{ site.baseurl }}/static/img/tables/table-small-scroll.png)
</div>

## Behavior

<div class="content-50 content-first">
### Sorting tables

Sorting allows users to reorder the contents of a table by a sortable column of their choice.

Any column that can sort needs to be specified in the table’s markup. When the table loads, it should be sorted by one of the sortable columns by default and indicate which column is already sorted. Not every column of a table needs to be sortable.

At large screen sizes, tables can be sorted using the header of any sortable column.

- The currently sorted column is marked with an up or down triangle for ascending and descending sorts, respectively
- On hover, the currently sorted column shows the opposite triangle
- Columns that can sort show an up triangle on hover
- Columns that cannot sort show nothing on hover

If sorting is needed for smaller screens, use a filter-like expandable with a sorting control (or add a sorting control to the existing filter if the table has one) that only appears when the table switches from tabular to stacked.
</div>

<div class="content-50 content-last">
{::nomarkdown}
<table class="o-table o-table__sortable">
  <thead>
      <tr>
          <th>
              Agency
          </th>
          <th>
            <button class="sortable">
              Languages
            </button>
          </th>
          <th>
            <button class="sortable sorted-up" data-sort_type="number">
              Distance
            </button>
          </th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>
              Alpha
          </td>
          <td data-label="Languages">
              English
          </td>
          <td data-label="Distance">
              2.6 mi
          </td>
      </tr>
      <tr>
          <td>
              Beta
          </td>
          <td data-label="Languages">
              English, Spanish
          </td>
          <td data-label="Distance">
              1.4 mi
          </td>
      </tr>
      <tr>
          <td>
              Gamma
          </td>
          <td data-label="Languages">
              English, French, Spanish
          </td>
          <td data-label="Distance">
              1.4 mi
          </td>
      </tr>
      <tr>
          <td>
              Delta
          </td>
          <td data-label="Languages">
              English, Spanish
          </td>
          <td data-label="Distance">
              3.2 mi
          </td>
  </tbody>
</table>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
### Filtering tables

Tables can be paired with a filter to show only rows that meet certain criteria.
</div>

<div class="content-50 content-last">
{::nomarkdown}
<div class="o-expandable o-expandable__filters o-expandable__padded">
    <button class="o-expandable_header o-expandable_target" aria-pressed="false">
        <span class="o-expandable_header-left o-expandable_label">
            Filter activities
        </span>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue-open">
                Show
                {% include icons/plus-round.svg %}
            </span>
            <span class="o-expandable_cue-close">
                Hide
                {% include icons/minus-round.svg %}
            </span>
        </span>
    </button>
    <div class="o-expandable_content" aria-expanded="false">
        <p>Filter options go here</p>
    </div>
</div>
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th class="u-w20pct">
                Type
            </th>
            <th class="u-w55pct">
                Title
            </th>
            <th class="u-w25pct">
                Date
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Type">
                {% include icons/speech-bubble.svg %} Blog
            </td>
            <td data-label="Title">
                Three things to do before closing
            </td>
            <td data-label="Date">
                AUG 5, 2015
            </td>
        </tr>
        <tr>
            <td data-label="Type">
                {% include icons/bullhorn.svg %} News
            </td>
            <td data-label="Title">
                Electronic Mortgage Closings Can Benefit Consumers
            </td>
            <td data-label="Date">
                AUG 5, 2015
            </td>
        </tr>
        <tr>
            <td data-label="Type">
                {% include icons/speech-bubble.svg %} Blog
            </td>
            <td data-label="Title">
                National Day of Civic Hacking 2015
            </td>
            <td data-label="Date">
                JUL 29, 2015
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
### Pagination

Tables with over 20 rows can be paired with pagination.
</div>

<div class="content-50 content-last">
{::nomarkdown}
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th class="u-w20pct">
                Type
            </th>
            <th class="u-w55pct">
                Title
            </th>
            <th class="u-w25pct">
                Date
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Type">
                {% include icons/speech-bubble.svg %} Blog
            </td>
            <td data-label="Title">
                Three things to do before closing
            </td>
            <td data-label="Date">
                AUG 5, 2015
            </td>
        </tr>
        <tr>
            <td colspan="3" style="text-align: center; font-weight: bold;">
                (18 more rows)
            </td>
        </tr>
        <tr>
            <td data-label="Type">
                {% include icons/speech-bubble.svg %} Blog
            </td>
            <td data-label="Title">
                National Day of Civic Hacking 2015
            </td>
            <td data-label="Date">
                JUL 29, 2015
            </td>
        </tr>
    </tbody>
</table>
<nav class="m-pagination" role="navigation" aria-label="Pagination" >
    <a class="a-btn
              a-btn__disabled
              m-pagination_btn-prev">
        {% include icons/left.svg %}
        Newer
    </a>

    <a class="a-btn
              m-pagination_btn-next" href="#">
        Older
        {% include icons/right.svg %}
    </a>

    <form class="m-pagination_form" action="#">
        <label class="m-pagination_label" for="m-pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number out of 3 total pages
            </span>
            <input class="m-pagination_current-page"
                   id="m-pagination_current-page"
                   name="page"
                   type="number"
                   min="1"
                   max="3"
                   inputmode="numeric"
                   value="1">
            of 3
        </label>
        <button class="a-btn
                       a-btn__link
                       m-pagination_submit-btn"
                id="pagination_submit"
                type="submit">Go</button>
    </form>
</nav>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
### Creating accessible behaviors

Remember to always use headers (that is, `<th>` elements) for all data tables to make tabular data accessible.
</div>

<div class="content-50 content-last"></div>

## Content guidelines

<div class="content-50 content-first">
As a rule, design tables so that they are easy to read. Label columns precisely and include units of measurement where necessary. Organize the data so that the underlying meaning is quickly apparent.
</div>

<div class="content-50 content-last"></div>

<div class="content-50 content-first">
### Labels and titles

Give tables a meaningful title that succinctly describes the content presented so that users can understand their purpose at a glance. If presenting more than one table within a page, consider adding labels  (e.g. “Table 1,” “Table 2,” etc.) in addition to titles. Labels should precede titles (e.g. “Table 1: The title given to this table”).

Styles for labels and titles are found [here](#style).

#### Long column labels

Consider using fixed columns or truncation for column labels that are significantly longer than the expected width of the data.

#### Units of measurement

Make sure to indicate the unit of measurement. In terms of placement, if the units are the same across columns, indicate the unit of measurement in the title or someplace noticeable above the table.

Alternatively, if the table uses at most two units of measurement, consider using asterisks following the column label, and define the unit of measurement below the table, as shown in the example here.

If units differ from column to column, the standard is to list the unit of measure in parentheses following the column label. Make sure to use common abbreviations when indicating units of measure. Spell out any ambiguous or obscure abbreviations.
</div>

<div class="content-50 content-last">
{::nomarkdown}
<p>
    <span class="h5">
        Table 1:
    </span>
    Budget by strategic goal
</p>
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th></th>
            <th class="o-table_cell__right-align">
                FY 2011*
            </th>
            <th class="o-table_cell__right-align">
                %
            </th>
            <th class="o-table_cell__right-align">
                FY 2012*
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Goal 1
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $252.0
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                48%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $279.4
            </td>
        </tr>
        <tr>
            <td>
                Goal 2
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $107.8
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                20%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $131.6
            </td>
        </tr>
        <tr>
            <td>
                Goal 3
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $46.4
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                9%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $56.3
            </td>
        </tr>
        <tr>
            <td>
                Goal 4
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $118.2
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                23%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $138.6
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    Total
                </strong>
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                <strong>
                    $524.4
                </strong>
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                <strong>
                    100%
                </strong>
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                <strong>
                    $605.9
                </strong>
            </td>
        </tr>
    </tbody>
</table>
<p><small>* In millions</small></p>


<p>
    <span class="h5">
        Table 2:
    </span>
    Key investments
</p>
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th>
                Outcome
            </th>
            <th>
                Key investment descripton
            </th>
            <th class="o-table_cell__right-align">
                %
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Outcome">
                1.1
            </td>
            <td data-label="Key investment descripton">
                Disclosure, design, testing, implementation
            </td>
            <td data-label="%" class="o-table_cell__right-align">
                16
            </td>
        </tr>
        <tr>
            <td data-label="Outcome">
                1.2
            </td>
            <td data-label="Key investment descripton">
                Small business rulemaking
            </td>
            <td data-label="%" class="o-table_cell__right-align">
                9
            </td>
        </tr>
        <tr>
            <td data-label="Outcome">
                1.3
            </td>
            <td data-label="Key investment descripton">
                Large business rulemaking
            </td>
            <td data-label="%" class="o-table_cell__right-align">
                20
            </td>
        </tr>
    </tbody>
</table>
<p>
    <small>* In millions</small>
</p>

{:/nomarkdown}
</div>

<h2 id="style">
    Style
    <span class="cf-code-link">
        <a href="https://github.com/cfpb/capital-framework/tree/canary/src/cf-tables">
            View code {% include icons/external-link.svg %}
        </a>
    </span>
</h2>

<div class="content-50 content-first">
<h3 class="h4">Default table and directory table (large screens)</h3>

This is the default style at the large screen breakpoint. It is also how the directory table pattern appears at the large screen breakpoint.

<h4 class="h5">Header</h4>

- Background: Gray-05 #F8F8F8
- Font: Avenir Next Demi-bold, all caps
- Font-color: Black #101820
- Font-size: 14px

<h4 class="h5">Border</h4>

- Bottom: 1px, Gray-50 #BABBBD on each row, including header

<h4 class="h5">Cells</h4>

- Background: Gray-05 #F8F8F8
- Font: Avenir Next Regular Black
- Font-color: Black #101820
- Font-size: 16px
- Padding: 10px

</div>
<div class="content-50 content-last">
{::nomarkdown}
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th>
                Column 1
            </th>
            <th>
                Column 2
            </th>
            <th>
                Column 3
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Column 1">
                Cell A1
            </td>
            <td data-label="Column 2">
                Cell A2
            </td>
            <td data-label="Column 3">
                Cell A3
            </td>
        </tr>
        <tr>
            <td data-label="Column 1">
                Cell B1
            </td>
            <td data-label="Column 2">
                Cell B2
            </td>
            <td data-label="Column 3">
                Cell B3
            </td>
        </tr>
        <tr>
            <td data-label="Column 1">
                Cell C1
            </td>
            <td data-label="Column 2">
                Cell C2
            </td>
            <td data-label="Column 3">
                Cell C3
            </td>
        </tr>
        <tr>
            <td data-label="Column 1">
                Cell D1
            </td>
            <td data-label="Column 2">
                Cell D2
            </td>
            <td data-label="Column 3">
                Cell D3
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
<h3 class="h4">Default table (small screens)</h3>

This is the default style for small screens. Remember to add `data-label` attributes to every `<td>` in the table body.

<h4 class="h5">Border</h4>

- Bottom: 1px, Gray-50 #BABBBD

<h4 class="h5">Cells</h4>

- Font: 16px Avenir Next Regular Black
- Font-color: Black #101820
- Labels font: 14px Avenir Next Regular, all caps
- Labels font-color: Black #101820

<h4 class="h5">Padding</h4>

- Padding, label / content: 15px
- Padding, content / next label: 30px
- Padding, rule line / first label: 15px

</div>
<div class="content-50 content-last">
![A table as it would appear on a small screen]({{ site.baseurl }}/static/img/tables/table-small.png)
</div>

<div class="content-50 content-first">
<h3 class="h4">Scrolling tables</h3>

- Border: 1px, Gray-50 #BABBBD around the scrolling table
- Alternate row striping: Grey-05 #F8F8F8
</div>
<div class="content-50 content-last">
![A scrolling table as it would appear on a small screen]({{ site.baseurl }}/static/img/tables/table-small-scroll.png)
</div>

<div class="content-50 content-first">
<h3 class="h4">Directory tables (small screens)</h3>

- Bottom border: 1px, Gray-50 #BABBBD on each row
- Font: 16px Avenir Next Regular Black
- Font-color: Black #101820
- Header background color: #f1f1f1
- Labels font: 14px Avenir Next Regular, all caps
- Labels font-color: Black #101820
- Padding, column label/bottom border: 15px
- Padding, bottom border/content: 15px
- Padding, content / next label: 30px
</div>
<div class="content-50 content-last">
![A directory table as it would appear on a small screen]({{ site.baseurl }}/static/img/tables/table-small-header.png)
</div>

<div class="content-50 content-first">
<h3 class="h4">Striped rows</h3>

Striping is useful to help the eye track across table rows. Use striping for tables that have more than five columns, or for tables with rows that are difficult to follow across the full width of the table.

- Alternate row background: Grey-05 #F8F8F8
</div>
<div class="content-50 content-last">
{::nomarkdown}
<table class="o-table o-table__stack-on-small o-table__striped">
    <thead>
        <tr>
            <th>
                Column 1
            </th>
            <th>
                Column 2
            </th>
            <th>
                Column 3
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Column 1">
                Cell A1
            </td>
            <td data-label="Column 2">
                Cell A2
            </td>
            <td data-label="Column 3">
                Cell A3
            </td>
        </tr>
        <tr>
            <td data-label="Column 1">
                Cell B1
            </td>
            <td data-label="Column 2">
                Cell B2
            </td>
            <td data-label="Column 3">
                Cell B3
            </td>
        </tr>
        <tr>
            <td data-label="Column 1">
                Cell C1
            </td>
            <td data-label="Column 2">
                Cell C2
            </td>
            <td data-label="Column 3">
                Cell C3
            </td>
        </tr>
        <tr>
            <td data-label="Column 1">
                Cell D1
            </td>
            <td data-label="Column 2">
                Cell D2
            </td>
            <td data-label="Column 3">
                Cell D3
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
<h3 class="h4">Alignment</h3>

Right-align columns of numbers that contain quantities (counts, dollar amounts, percentages) or ordinals (ranks, item numbers).

Left-align columns of nominal numbers (ZIP codes, room numbers) or non-numeric values (names, phrases).
</div>
<div class="content-50 content-last">
{::nomarkdown}
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th>
                County
            </th>
            <th>
                ZIP
            </th>
            <th class="o-table_cell__right-align">
                Records
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="County">
                Abbeville
            </td>
            <td data-label="ZIP">
                96122
            </td>
            <td class="o-table_cell__right-align" data-label="Records">
                8
            </td>
        </tr>
        <tr>
            <td data-label="County">
                Abbey
            </td>
            <td data-label="ZIP">
                94012
            </td>
            <td class="o-table_cell__right-align" data-label="Records">
                586
            </td>
        </tr>
        <tr>
            <td data-label="County">
                Acadia
            </td>
            <td data-label="ZIP">
                96201
            </td>
            <td class="o-table_cell__right-align" data-label="Records">
                126
            </td>
        </tr>
        <tr>
            <td data-label="County">
                Acer
            </td>
            <td data-label="ZIP">
                96104
            </td>
            <td class="o-table_cell__right-align" data-label="Records">
                1,685
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
<h3 class="h4">Fixed-width columns</h3>

Column widths are automatically set by browsers by default. If needed, some or all columns can be set to specific widths instead to accommodate longer data or labels.

Fixed-width columns at the 600 px breakpoint and less lose their custom widths and expand to full width. This is the same responsive pattern used for default tables at small screens.
</div>
<div class="content-50 content-last">
{::nomarkdown}

<p>
    <span class="h5">
        Table 1:
    </span>
    Table with column widths set automatically by the browser
</p>
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th>
                County
            </th>
            <th>
                Lien status
            </th>
            <th>
                Active?
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="County">
                Abbeville
            </td>
            <td data-label="Lien status">
                Secured
            </td>
            <td data-label="Active?">
                Yes
            </td>
        </tr>
        <tr>
            <td data-label="County">
                Abbey
            </td>
            <td data-label="Lien status">
                Secured
            </td>
            <td data-label="Active?">
                No
            </td>
        </tr>
    </tbody>
</table>

<p>
    <span class="h5">
        Table 2:
    </span>
    Table with columns fixed at 20%, 60%, and 20% of the table width
</p>
<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th class="u-w20pct">
                County
            </th>
            <th class="u-w60pct">
                Lien status
            </th>
            <th class="u-w20pct">
                Active?
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="County">
                Abbeville
            </td>
            <td data-label="Lien status">
                Secured
            </td>
            <td data-label="Active?">
                Yes
            </td>
        </tr>
        <tr>
            <td data-label="County">
                Abbey
            </td>
            <td data-label="Lien status">
                Secured
            </td>
            <td data-label="Active?">
                No
            </td>
        </tr>
    </tbody>
</table>
{:/nomarkdown}
</div>

<div class="content-50 content-first">
<h3 class="h4">Table labels and titles</h3>

- Label font: 14pt Avenir Next Demi Bold
- Label font-color: Black #101820
- Title font: 16px Avenir Next Regular
- Title font-color: Black #101820
</div>
<div class="content-50 content-last">
{::nomarkdown}
<p>
    <span class="h5">
        Table 1:
    </span>
    Budget by strategic goal
</p>

<table class="o-table o-table__stack-on-small">
    <thead>
        <tr>
            <th>

            </th>
            <th class="o-table_cell__right-align">
                FY 2011*
            </th>
            <th class="o-table_cell__right-align">
                %
            </th>
            <th class="o-table_cell__right-align">
                FY 2012*
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="">
                Goal 1
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $252.0
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                48%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $279.4
            </td>
        </tr>
        <tr>
            <td data-label="">
                Goal 2
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $107.8
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                20%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $131.6
            </td>
        </tr>
        <tr>
            <td data-label="">
                Goal 3
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $46.4
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                9%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $56.3
            </td>
        </tr>
        <tr>
            <td data-label="">
                Goal 4
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                $118.2
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                23%
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                $138.6
            </td>
        </tr>
        <tr>
            <td data-label="">
                <strong>
                    Total
                </strong>
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2011*">
                <strong>
                    $524.4
                </strong>
            </td>
            <td class="o-table_cell__right-align" data-label="%">
                <strong>
                    100%
                </strong>
            </td>
            <td class="o-table_cell__right-align" data-label="FY 2012*">
                <strong>
                    $605.9
                </strong>
            </td>
        </tr>
    </tbody>
</table>
<p>
    <small>* In millions</small>
</p>
{:/nomarkdown}
</div>
