---
layout: page
title:  Design best practices
category: Guides
---

# Test Content from HMDA API DOCS:

### Query Language

The query language is based on Socrata's [SoQL language](http://dev.socrata.com/consumers/getting-started#queryingwithsoql). If you're already comfortable with the basics you can
learn how to construct more advanced queries by familiarizing yourself with all the HMDA fields on the [field reference](fields.html) page, or by using the [metadata endpoints](console/#!/hmda/getSliceMetadataHmda_get_3) on the interactive console. Otherwise, we have organized this page into two sections to familiarize yourself:

**Querying data** - An overview of the clauses you can use to specify what you want and do not want returned in a slice. If our API was the 
barista at your favorite coffee shop, it could handle even the most persnickety of drink orders.  

**Summarizing or aggregating data** - Once you have the data you need to work with, our API can crunch all the numbers 
for you. This section explains the ins and outs of how to gain more insight into large and overwhelming data.

### Querying data

Use these clauses to filter through millions of records to get only the data you want in a matter of seconds. See the API in action on the [explore the data](http://consumerfinance.gov/hmda/explore.html) section of our HMDA page.


<table class="table-code">
<thead>
<tr>
<th>Clause</th>
<th>What it does</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>$select</code></td>
<td>Specifies which fields to return, separated by commas. If not specified, all columns will be returned. Use this to <a href="#aggregating">aggregate or summarize data</a>. A list of all fields available is <a href="fields.html">here</a> or at the <code>concept</code> <a href="console/#!/hmda/getConceptHmda_get_1" class="toggleOperation">endpoint</a>.</td>
</tr>
<tr>
<td><code>$where</code></td>
<td>Filter the results using SQL <code>WHERE</code> query syntax. If not specified, the results will not be filtered. <a href="#where">Learn more</a>.</td>
</tr>
<tr>
<td><code>$orderBy</code></td>
<td>Fields to order by, separated by commas, or <code>ASC</code> and <code>DESC</code>. If not specified, the order will be consistent, but unspecified. <a href="#orderby">Learn more</a>.</td>
</tr>
<tr>
<td><code>$group</code></td>
<td>Fields to group by, separated by commas. <a href="#group">Learn more</a>.</td>
</tr>
<tr>
<td><code>$limit</code></td>
<td>Maximum number of results to return. If not specified, defaults to <code>100</code>. Enter <code>0</code> for no limit.</td>
</tr>
<tr>
<td><code>$offset</code></td>
<td>Number of records to skip. If not specified, defaults to <code>0</code>.</td>
</tr>
<tr>
<td><code>$callback</code></td>
<td>The name of the JavaScript callback to invoke in a query. Only used with JSONP.</td>
</tr>
</tbody>
</table>

<span class="anchor" id="where"> </span>
##### More on $where

This clause supports a mini-language for writing queries. It's a subset of SQL <code>WHERE</code> clauses, with the addition of function 
support. A ```$where``` clause is made up of one or more comparisons, joined by boolean operators.

<!--[if IE]>
<h5>Possible comparisons</h5>
<table class="table-code">
<thead>
<tr>
<th>Operator</th>
<th>What it means</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>=</code></td>
<td>equality</td>
<td><code>name = "Phillip"</code></td>
</tr>
<tr>
<td><code>!=</code></td>
<td>inequality</td>
<td><code>state != "Alaska"</code></td>
</tr>
<tr>
<td><code>&gt;</code></td>
<td>greater than</td>
<td><code>age &gt; 18</code></td>
</tr>
<tr>
<td><code>&gt;=</code></td>
<td>greater than or equal</td>
<td><code>square_miles &gt;= 1000</code></td>
</tr>
<tr>
<td><code>&lt;</code></td>
<td>less than</td>
<td><code>age &lt; 65</code></td>
</tr>
<tr>
<td><code>&lt;=</code></td>
<td>less than or equal</td>
<td><code>square_miles &lt;= 1000</code></td>
</tr>
<tr>
<td><code>LIKE</code></td>
<td>matches strings</td>
<td><code>name LIKE = "Pete%"</code> would match "Pete, "Peter," or anything that starts with "Pete"</td>
</tr>
<tr>
<td><code>ILIKE</code></td>
<td>matches case-insensitive strings</td>
<td><code>name ILIKE = "%rick"</code> would match "Rick" as well as "Yorick," "Harrick," or anything else with "rick" in it</td>
</tr>
<tr>
<td><code>IS NULL</code></td>
<td>existence of a value</td>
<td><code>city is NULL</code></td>
</tr>
<tr>
<td><code>IS NOT NULL</code></td>
<td>non-existence of a value</td>
<td><code>city IS NOT NULL</code></td>
</tr>
</tbody>
</table>

<h5>Possible boolean comparisons</h5>
<table class="table-code">
<thead>
<tr>
<th>Operator</th>
<th>What it means</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>AND</code></td>
<td>logical AND of two comparisons</td>
<td><code>state = "Alaska" AND age &gt; 18</code></td>
</tr>
<tr>
<td><code>OR</code></td>
<td>logical OR of two comparisons</td>
<td><code>state = "Alaksa" OR state = "Hawaii"</code></td>
</tr>
<tr>
<td><code>NOT</code></td>
<td>negation of a comparison</td>
<td><code>NOT (state = "Alaska" OR state = "Hawaii"</code></td>
</tr>
<tr>
<td><code>()</code></td>
<td>grouping or order of operations</td>
<td><code>(state = "Alaska" OR state = "Hawaii") AND age &gt; 18</code></td>
</tr>
</tbody>
</table>

<![endif]-->

<!--[if !IE]><!-->
<div class="expandable expandable">
    <header class="expandable-header">
        <span class="expandable-text">Show</span><h4> a list of possible comparisons</h4><a class="expandable-button" href="#"> </a>
    </header>

<div class="expandable-content expandable-hidden" style="display:none;">

<table class="table-code">
<thead>
<tr>
<th>Operator</th>
<th>What it means</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>=</code></td>
<td>equality</td>
<td><code>name = "Phillip"</code></td>
</tr>
<tr>
<td><code>!=</code></td>
<td>inequality</td>
<td><code>state != "Alaska"</code></td>
</tr>
<tr>
<td><code>&gt;</code></td>
<td>greater than</td>
<td><code>age &gt; 18</code></td>
</tr>
<tr>
<td><code>&gt;=</code></td>
<td>greater than or equal</td>
<td><code>square_miles &gt;= 1000</code></td>
</tr>
<tr>
<td><code>&lt;</code></td>
<td>less than</td>
<td><code>age &lt; 65</code></td>
</tr>
<tr>
<td><code>&lt;=</code></td>
<td>less than or equal</td>
<td><code>square_miles &lt;= 1000</code></td>
</tr>
<tr>
<td><code>LIKE</code></td>
<td>matches strings</td>
<td><code>name LIKE = "Pete%"</code> would match "Pete, "Peter," or anything that starts with "Pete"</td>
</tr>
<tr>
<td><code>ILIKE</code></td>
<td>matches case-insensitive strings</td>
<td><code>name ILIKE = "%rick"</code> would match "Rick" as well as "Yorick," "Harrick," or anything else with "rick" in it</td>
</tr>
<tr>
<td><code>IS NULL</code></td>
<td>existence of a value</td>
<td><code>city is NULL</code></td>
</tr>
<tr>
<td><code>IS NOT NULL</code></td>
<td>non-existence of a value</td>
<td><code>city IS NOT NULL</code></td>
</tr>
</tbody>
</table>
    </div>
</div>


<div class="expandable expandable">
    <header class="expandable-header">
        <span class="expandable-text">Show</span><h4> a list of possible boolean operators</h4><a class="expandable-button" href="#"> </a>
    </header>

<div class="expandable-content expandable-hidden" style="display:none;">

<table class="table-code">
<thead>
<tr>
<th>Operator</th>
<th>What it means</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>AND</code></td>
<td>logical AND of two comparisons</td>
<td><code>state = "Alaska" AND age &gt; 18</code></td>
</tr>
<tr>
<td><code>OR</code></td>
<td>logical OR of two comparisons</td>
<td><code>state = "Alaksa" OR state = "Hawaii"</code></td>
</tr>
<tr>
<td><code>NOT</code></td>
<td>negation of a comparison</td>
<td><code>NOT (state = "Alaska" OR state = "Hawaii"</code></td>
</tr>
<tr>
<td><code>()</code></td>
<td>grouping or order of operations</td>
<td><code>(state = "Alaska" OR state = "Hawaii") AND age &gt; 18</code></td>
</tr>
</tbody>
</table>
    </div><!-- /.expandable-content -->
</div>
<!--<![endif]-->

<span class="anchor" id="aggregating"> </span>
### Summarizing and aggregating data

In addition to powerful data filtering, you can also aggregate data, as seen in the [summary tables](http://consumerfinance.gov/hmda/explore#!/) section of our HMDA page. The three clauses used in these queries are:

##### $select
This clause takes a list of the fields you want returned, separated by commas.  Unlike the SQL version of ```SELECT```, it does not allow for ```AS``` aliasing, so:

**Right:** ```state_abbr```, ```county```

**Wrong:** ```state_abbr AS state```, ```county```

<span class="anchor" id="orderby"> </span>
##### $orderBy
This clause determines the order of the results returned. It takes a list of columns, separated by commas, with an optional suffix of ```ASC``` or ```DESC``` to indicate that you want the data in ascending or descending order. For example, if you wanted to see loan applications ordered by gender, and age in descending order, you would use:

```$orderBy = gender, age DESC```

<span class="anchor" id="group"> </span>
##### $group
This clause lists the fields you want to group results by. For example, if you wanted to see loan applications organized by denial reason, you would use:

```$group = denial_reason```

```$group``` usually requires a ```$select``` clause, where you need to specify the fields you are grouping on, as well as any aggregations you want. 

##### Aggregation functions
Aggregations are functions run on fields of grouped data in order to reduce them to an associated value. All functions are called with the name of the field to aggregate in parentheses. For example, if you wanted to know the total number of owner-occupied properties per metro area in HMDA, you would use:

```$select: msamd, SUM(numer_of_owner_occupied_units)```

```$group: msamd```

<table class="table-code">
<thead>
<tr>
<th>Function</th>
<th>What it does</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>SUM</code></td>
<td>Totals the values</td>
</tr>
<tr>
<td><code>MIN</code></td>
<td>Returns the minimum value in the results</td>
</tr>
<tr>
<td><code>MAX</code></td>
<td>Returns the maximum value in the results</td>
</tr>
<tr>
<td><code>COUNT</code></td>
<td>Returns the number of rows in the set, i.e., the number of results. You can use <code>COUNT</code> for any field</td>
</tr>
</tbody>
</table>

##### Order matters
When summarizing and aggregating data, take care to know the order in which the clauses and names of the aggregated fields are applied.
 
1. ```$where``` is applied first in order to reduce the amount of data being aggregated
2. The data is then aggregated using ```$group``` and ```$select``` clauses
3. ```$orderBy```
4. ```$limit```, ```$offset```

Then, when you want to use aggregated fields for grouping, name them according to the function you used following
this format:

```function_field_name```

and

```sum_number_of_owner_occupied_units```


##### That's everything!

You're ready to start building your own queries, and bring HMDA data into your own apps and tools!

Get familiar with the information contained in HMDA LAR data on the [field reference](fields.html) page, and head on over to [API calls](console/) to test out your queries in the console.

