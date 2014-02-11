---
published: true
layout: document
document_label: filtering
stage: comment
css: "filtering-example"
sponsor: "Nicholas Wallen, Lee Williams, Scott Cranfill"
title: Filtering
subtitle: "common patterns and pitfalls"

---
## Overview
Filtering helps users when they don't know exactly what they want and there are a lot of results. Search is more efficient if someone knows exactly what they want. A good filtering experience has some high-level goals:

**Show the user how results are organized** if results are arranged by tag, date, or another piece of metadata filters exposing these help the user make sense of results and select a relevant slice to investigate. However, be wary of exposing every piece of metadata the system provides, which can overwhelm the user. Instead, focus on what the user is looking for and provide the right level of information to help them find it. 

**Help the user make the results relevant to his/her goals** every filtering interface is an interactive conversation with the user in which the user tells us what is relevant to him/her. Make this as pleasant and as painless as possible: eliminate clutter and provide options based on the user's goals, make sure that the underlying system is responsive and returns correct results.

**Get the user to what s/he is looking for as efficiently as possible** remember that time spent filtering is not productive for the user. Filtering is a hallway to get somewhere else: not the endpoint. Test your interface with actual users to make sure they're able to use it efficiently without getting confused or lost in the filtering part of their experience.


## General Rules of Thumb 
The following are some quick questions to help you "gut-check" your filtering interface. 

### Keeping it simple

**Did you match filters to user needs?** filters don't always need to be the primary focus of a page. Just because the system *can* filter something doesn't mean you *should* provide a filter to the user. Consider providing an "advanced" filtering interface if you are designing for a range of users. 

**Did you follow common patterns?** if you didn't, do you have a good reason for inventing something new? Did you test the new thing you've invented? If yes, great! Please add it to this guide and share with your colleagues.

**Is your taxonomy noisy?** A long list of tags corresponding to one item each is overwhelming (and not useful). Ensure that your taxonomy helps users group and understand the available items.


### Putting the user in control

**Did you provide a way to reset filters?** especially with multiple filters, reseting filters to an initial state gives the user a quick way to reverse unproductive filter settings

**Do you provide feedback when the user changes a filter?** Remember that just updating the list of results is often not enough since some items may not change. Instead, also update a count of results or a list of active filters.

**Do you provide hints about what each filter will do?** for example, always show the number of items matching a particular term. 

**Did you provide sorting controls?** sorting is essential when items having meaningful maximum and minimum values. Depending on the use case, more complicated filters may not even be required.

**Do you provide a good search?** if users know what they are looking for in a large dataset search is more efficient than filtering. Don't force users to filter.


### Verify

**Did you test your filtering interface with real users?** filters are complex and each interface is different. Make sure you've done some testing since things that may be obvious to you are not to users. for example, when filtering a paged list users may assume that filters only apply to the current page. Once again, you'll need to test. 

**Is your interface accessible?** our products are for all Americans. 

**Does your interface work on a range of screens?** users want to access information from the handiest device, which may be small, big or in-between. Make sure you have a strategy to give them all a great experience.


## Filtering Patterns
The following are some handy summaries of major filtering patterns. A [pattern sheet]([guideAssets]/patterns/filtering-patternsheet.svg) is provided for each to use in your wireframes or as a guide for prototypes:


### Drilldown filtering 

**Drilldown filters navigate a hierarchy** in which selecting one filter goes to the next step in the hierarchy and displays a new set of filters. Typically, since each filter takes you to a new interface, drilldown filters **look like links** or link-like elements. It's important to **always provide an obvious way to undo a drilldown filter selection** since selecting drilldown filters often changes the available filters.

![drilldown filtering pattern sheet]([guideAssets]/patterns/drilldown-filtering-preview.svg)

<br />
##### Annotations
<br />
1. Number of results listed, which should change as filters are applied.
2. Sorting control provided since "date" and "views" have meaningful maximum and minimum values. Each result displays the related values to reinforce the ordering logic.
3. Filter represented as link. Hint provided to let the user know how many results are in each category.
4. Going to the next level in the hierarchy provides a new list of filters. Link to go back to previous level of hierarchy is provided.

[download filtering pattern sheet]([guideAssets]/patterns/filtering-patternsheet.svg)



### Parallel filtering 

**Parallel filters filter by multiple values simultaneously** to provide a more powerful, but more complicated, filtering experience. Filters may be combined with a logical OR (i.e. each item has X *OR* Y) or a logical AND (i.e. each item has X *AND* Y). 

**Logical OR filters look like a group of checkboxes** whereas **Logical AND filters look like other input elements** such as range sliders, date pickers, etc. It's important to **always provide a clear way to reset filter selections** since deselecting or selecting multiple filters is tedious for the user.

![drilldown filtering pattern sheet]([guideAssets]/patterns/parallel-filtering-preview.svg)

<br />
##### Annotations
<br />
1. Filters which may be combined with a logical OR are represented as checkboxes
2. The hinted number of results remains consistent as checkboxes are selected: the order the checkboxes are selected in does not matter.
3. A reset link allows the user to reset all filters to their original values.
4. Since the date range filter is also set the hinted number of results changes. Upon mapping to no results the filter remains visible with a disabled style.
5. Selecting a new date range combines with checkbox filters as a logical AND which changes the number of hinted results next to each checkbox.

[download filtering pattern sheet]([guideAssets]/patterns/filtering-patternsheet.svg)

##### Additional notes
<br />
**The default state of checkbox filters may vary** in the above example, the checkbox set defaults to unchecked which requires the user to be *additive* and check the filters they want to apply. You may also start with all checkboxes checked requiring the user to be *subtractive* and uncheck the filters they don't want to apply. You may also employ a hybrid approach in which the *most common* filters are checked by default.

![Kayak subtractive filtering example]([guideAssets]/images/kayak-filtering-example-01.png)

**The default state of checkbox filters should depend on the user's goals** the default state of filters should require as little updating from the user as possible. Use an *additive* approach when the user will want to apply only a few filters with the majority deselected. Use *subtractive* approach when the user will want to apply many filters with only a few deselected.   

**Use radio buttons and select boxes when the user may only select one filter in a set** radio buttons are suited for a few options, while select boxes are suited for many options.

**Use a filter-by-search box to let the user add his/her own filter keyword** be sure to differentiate this from other search functions using micro-copy or layout.


## Mobile


![drilldown filtering pattern sheet]([guideAssets]/patterns/responsive-filtering-preview.svg)

**Move drilldown filters below filtered results** provide an indication at the top of the results that they are filtered.

**Move parallel filters to a sliding pane** provide an indication within the pane of the number of results as the user applies filters

## Accessibility

**Filtering interfaces are forms** so follow best practices for accessible form elements.

## References

* [http://www.uxmatters.com/mt/archives/2009/09/best-practices-for-designing-faceted-search-filters.php](http://www.uxmatters.com/mt/archives/2009/09/best-practices-for-designing-faceted-search-filters.php)




