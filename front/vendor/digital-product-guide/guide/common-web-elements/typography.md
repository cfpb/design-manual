---
published: true
layout: document
document_label: type hierarchy
stage: comment
css: "typography-example"
sponsor: "Leah Wechsler, Natalia Fitzgerald, Scott Cranfill"
title: Typography
subtitle: "Type styling and hierarchy"

---

Readability affects how users process content. Do it well and they can engage with the material efficiently, absorb
the content in a meaningful way. 

## Guidelines

### Broad typographic considerations:

* Font size
* Contrast
* Line length
* Line height
* Hierarchy
* Layout
* Readability
* Scannable text
* Emphasis on important elements
* Consistency
* White space

### Font size

How is someone going to be reading the text? Body text should be readable for the display it is going to appear.

Varying type size is one of the best ways to differentiate content. Different sizes of type, used consistently
throughout your web pages will signal to the reader the relative importance of your pages’ elements. It also means
that if your readers are in a hurry, they can quickly pick out the important bits — and that could mean that they
stay longer and read on.

### Contrast

Text exists to be read; make sure that it contrasts enough with the background to achieve that. Provide high
contrast between text and background. Text should appear only on a solid background. Reversed out type is not
optimal and should not be done for long stretches of type.

### Line length

The number of words per line, a good line length allows the reader's eyes to flow from the end of one line to the
beginning of the next very easily. Generally speaking, as the number of characters increases per line, so should
the line height.

* For single column text: Line length closer to 66 characters (including spaces) with a range of 50-75 characters,
  target line length of 30em.
* For multiple columns: Line length to 7 to 10 words or 45-55 characters, target line length from 18–24em.

### Line height

Give each block text enough margin. Group subheads and correlated body text which aren’t visually grouped together. 
 
* It's also worth noting that when using the super heavy bold on larger font sizes you're taking up more horizontal
  space which can sometimes be problematic on a flexible site.

### Hierarchy

Hierarchy defines how to read through content. It shows the user were to start reading and where to read through.
It differentiates headers from body text. Although colors of text boxes can be used to contrast headers and body
text, hierarchy refers to the difference in size between these elements. Hierarchy plays a huge part in how
scannable a layout is.

### Layout

* Establish visual balance and natural flow
* White space
* Margins
* Gutters
* Grid
* Consistent styling of objects

### Readability

Readable text affects how users process the information in the content. Poor readability scares readers away from
the content. On the other hand, done correctly, readability allows users to efficiently read and take in the
information in the text. You want users to be able to read your content and absorb it easily.

Readability is influenced by:
* Line length / measure
* Primary and secondary leading
* Justification
* Type style
* Tracking
* Point size / Size
* Serif versus sans serif
* Spacing/Line height
 
### Scannable text

Making copy scannable consists of good use of headers, hierarchy and focus points to guide the user through the
content.

So, what makes copy scannable? Well, there are many factors, most of which have already been mentioned. Header size
and position, body text size, text line height, text contrast and the way focus points are differentiated all
impact how scannable copy is.

### Emphasis on important elements

Not all body content was created equal. You can highlight links, bold important text, show quotes, etc. By
emphasizing objects you provide focus points to the user. 

Focus points are certain elements or objects within the layout that attract, or are supposed to attract, the user’s
attention. This could be a header, a graphical element, a button, etc.

### Consistency

While noted for usability, it also applies to readability. It means that all the headers are the same size, font
and color. It helps provide a user with a familiar focus point when they are scanning and helps organize content. 

### White space

Let the type breathe. White space or blank space will help focus attention on the content; by creating "voids" it
makes it easier for the reader to know what to read and improves readability. A good rule of thumb for web is
line-spacing that’s at least 140% of your text size.


## CFPB typefaces

### Avenir Next

Avenir Next is the primary brand typeface and can be used across all formats from print to digital. Its round and
geometric letterforms are approachable and modern.

Avenir is great for titling, pull-quotes and lists, and in some cases can be used for lengthy body copy. Italics
are included in the brand typography but should only be used on rare occasion, when necessary for grammatical
accuracy.

### Georgia

Georgia is designed for digital executions. Its high x-height and round letterforms play nicely with Avenir Next.

Georgia is well suited lengthy body copy. Bold is useful for highlighting or titling within body copy. Georgia
should not be used for display type or large-scale typography. The Italic weights work nicely at a medium scale for
pull-quotes or language with a human tone.


## The Hierarchy

We are provisionally standardizing around the following guidelines which should be used in all CFPB web properties
going forward. If you encounter any recurring issues (be they design- or development-related) with this hierarchy,
please communicate them to the Typography sponsors: Leah Wechsler, Natalia Fitzgerald, and Scott Cranfill.

<table>
    <thead>
        <tr>
            <th></th>
            <th>Sample</th>
            <th>Example CSS*</th>
        </tr>
    </thead>
    <tbody>
        <tr class="display">
            <th rowspan="2">Display</th>
            <td class="sample">Getting out of debt</td>
            <td class="code" rowspan="2">
{% highlight css %}
.display {
    font-family: "Avenir Next Demi",
                    Arial, sans-serif;
    font-size: 3em;
    line-height: 1.25;
    font-weight: bold;
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Demi<br>
                48px / 60px
            </td>
        </tr>

        <tr class="h1">
            <th rowspan="2">H1</th>
            <td class="sample">Getting out of debt</td>
            <td class="code" rowspan="2">
{% highlight css %}
h1 {
    font-family: "Avenir Next",
                    Arial, sans-serif;
    font-size: 2.125em;
    line-height: 1.23529411764706;
    font-weight: normal;
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Regular<br>
                34px / 42px
            </td>
        </tr>

        <tr class="h2">
            <th rowspan="2">H2</th>
            <td class="sample">Getting out of debt</td>
            <td class="code" rowspan="2">
{% highlight css %}
h2 {
    font-family: "Avenir Next",
                    Arial, sans-serif;
    font-size: 1.625em;
    line-height: 1.23076923076923;
    font-weight: normal;
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Regular<br>
                26px / 32px
            </td>
        </tr>

        <tr class="h3">
            <th rowspan="2">H3</th>
            <td class="sample">Getting out of debt</td>
            <td class="code" rowspan="2">
{% highlight css %}
h3 {
    font-family: "Avenir Next",
                    Arial, sans-serif;
    font-size: 1.375em;
    line-height: 1.27272727272727;
    font-weight: normal;
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Regular<br>
                22px / 28px
            </td>
        </tr>

        <tr class="h4">
            <th rowspan="2">H4</th>
            <td class="sample">Getting out of debt</td>
            <td class="code" rowspan="2">
{% highlight css %}
h4 {
    font-family: "Avenir Next Medium",
                    Arial, sans-serif;
    font-size: 1.125em;
    line-height: 1.22222222222222;
    font-weight: 500;
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Medium<br>
                18px / 22px
            </td>
        </tr>

        <tr class="h5">
            <th rowspan="2">H5</th>
            <td class="sample">Getting out of debt</td>
            <td class="code" rowspan="2">
{% highlight css %}
h5 {
    font-family: "Avenir Next Demi",
                    Arial, sans-serif;
    font-size: 0.875em;
    line-height: 1.57142857142857;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Demi<br>
                14px / 22px<br>
                uppercase<br>
                letter-spacing: 1px
            </td>
        </tr>

        <tr class="h6">
            <th rowspan="2">H6</th>
            <td class="sample">Paying for college</td>
            <td class="code" rowspan="2">
{% highlight css %}
h6 {
    font-family: "Avenir Next Demi",
                    Arial, sans-serif;
    font-size: 0.75em;
    line-height: 1.83333333333333;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Demi<br>
                12px / 22px<br>
                uppercase<br>
                letter-spacing: 1px
            </td>
        </tr>

        <tr class="p-sans">
            <th rowspan="2">Body (sans-serif)</th>
            <td class="sample">Use this tool to compare school data and relevant financial factors to make a more informed decision for your future.</td>
            <td class="code" rowspan="2">
{% highlight css %}
blockquote {
    font-family: "Avenir Next",
                    Arial, sans-serif;
    line-height: 1.375; /* 22/16 */
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Avenir Next Regular<br>
                16px / 22px<br>
            </td>
        </tr>

        <tr class="p-serif">
            <th rowspan="2">Body (serif)</th>
            <td class="sample">Use this tool to compare school data and relevant financial factors to make a more informed decision for your future.</td>
            <td class="code" rowspan="2">
{% highlight css %}
p {
    font-family: Georgia,
                   "Times New Roman",
                   serif;
    line-height: 1.375; /* 22/16 */
}
{% endhighlight %}
            </td>
        </tr>
        <tr>
            <td class="spec">
                Georgia<br>
                16px / 22px<br>
            </td>
        </tr>
    </tbody>
</table>

__* Important note:__ This CSS is dependent on using the standard CFPB web font code as seen in
[web-fonts](http://github.cfpb.gov/adamscott/web-fonts) or [cfpb-bp](http://github.cfpb.gov/scranfill/cfpb-bp).
It also assumes a base `font-size` of 16px (unchanged from the default in most browsers).
