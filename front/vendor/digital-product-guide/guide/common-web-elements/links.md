---
published: true
layout: document
document_label: links
stage: draft
css: "link-example"
sponsor: Nicholas Wallen
title: Links
subtitle: Guidelines for the styling and usage of links in CFPB webproducts

---

## Visual style

### Underline
* Links in body text
* Links in lists of links (e.g. the current CF.gov's footer)

### Don't underline
* Links in navigation
* Links in headers

## Link accessibility
* Users should be able to identify links without relying on color alone
* Consider proper contrast for links set on background colors other than white

## Visual styling and states
### Georgia paragraph links
<div class="guide-example dotted-persist-link">
    <p class="georgia">
        Lorem ipsum dolor sit amet, <a href="#">normal link here</a>. Vestibulum orci ante, sagittis quis dolor a, fringilla dapibus nunc. <a class="hover" href="#">Hover link here</a> venenatis suscipit. Nulla in purus nisi. Curabitur vel odio et est auctor tincidunt. <a class="focus" href="#">focused link here</a>, et ultricies erat pellentesque nec. Suspendisse quis <a class="active" href="#">active link here</a> faucibus nec eu justo. Nulla ut massa eget dolor vehicula bibendum. We've all been to the <a class="visited" href="#">visited link here</a>.
    </p>
</div>

### Avenir list links
<div class="guide-example dotted-persist-link">
    <ul class="avenir">
        <li>Lorem ipsum <a href="#">normal link here</a>, consectetur adipiscing elit.</li>
        <li>Curabitur vel odio et est auctor, <a class="hover" href="#">hover link here</a>.</li>
        <li>Aliquam mollis tellus in purus porta, <a class="focus" href="#">focus link here</a>.</li>
        <li><a class="active" href="#">Active link here.</a></li>
        <li>We've all been to the <a class="visited" href="#">visited link here</a>.</li>
    </ul>
</div>

## Code Details

**Note**: The code for this guide is slightly different than you would find on a production site. We've created different classes to display the different link states, but you would obviously **not** need to do that on a live site.

### Normal

```
a {
    border-bottom: 1px dotted #0072ce;
    color: #0072ce;
    text-decoration: none;
}
```

### Hover

```
a:hover {
    border-bottom: 1px solid #7eb8dd;
    color: #7eb8dd;
    text-decoration: none;
}
```

### Focus

```
a:focus {
    border-bottom: 1px solid #0072ce;
    color: #0072ce;
    outline:  thin dotted;
    text-decoration: none;
}
```

### Active

```
a:active {
    border-bottom: 1px solid #002d72;
    color: #002d72;
    text-decoration: none;
}
```

### Visited

```
a:visited {
    color: #005e5d;
    border-bottom: 1px solid #005e5d;
    text-decoration: none;
}
```