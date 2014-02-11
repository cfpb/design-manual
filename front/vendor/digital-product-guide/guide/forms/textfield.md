---
published: true
layout: document
document_label: forms
stage: comment
sponsor: "Ben Guhin, Eduardo Ortiz, Misha Tepper, Mehgan Iulo, David Kennedy"
title: Text inputs and textareas
subtitle: Guidelines for text field styling and usage in forms
css: "textfield-example"
---


## General guidelines

See [General form guidelines](forms.html).


## Basic styling

Text field styling is reasonably easy to control with CSS. Here is our recommended styling:

### Single-line text `input`s

<div class="guide-example">
    <label>Standard field</label>
    <input type="text" placeholder="placeholder text" />
</div>

<div class="guide-example">
    <label>Focused field</label>
    <input class="focus" type="text" placeholder="placeholder text" />
</div>

<div class="guide-example">
    <label>Field in error state</label>
    <input class="error" type="text" value="Invalid input" />
    <i class="icon-remove-sign"><span class="jekyll-bug"></span></i>
</div>

<div class="guide-example">
    <label>Field in success state</label>
    <input class="success" type="text" value="Validated input" />
    <i class="icon-ok-sign"><span class="jekyll-bug"></span></i>
</div>

### Multi-line `textarea`s

<div class="guide-example">
    <label>Standard field</label>
    <textarea>Example response</textarea>
</div>

<div class="guide-example">
    <label>Focused field</label>
    <textarea class="focus">Example response</textarea>
</div>

<div class="guide-example">
    <label>Field in error state</label>
    <textarea class="error">Invalid input</textarea>
    <i class="icon-remove-sign"><span class="jekyll-bug"></span></i>
</div>

<div class="guide-example">
    <label>Field in success state</label>
    <textarea class="success">Validated input</textarea>
    <i class="icon-ok-sign"><span class="jekyll-bug"></span></i>
</div>
