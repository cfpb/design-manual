---
layout: page
title:  Color
category: Brand guidelines
redirect_from: "/identity/color-principles.html"
---

- [Palette](#palette)
{: class="toc"}

<div class="content-67 content-first">

A minimal palette, clear hierarchy, good information design, and ample white space ensures a voice of authority and expertise in communication.
{: class="lead-in"}

</div>

<div class="content-33 content-last">

![Primary color palette]({{ site.baseurl }}/static/img/color/Color0_@2.png "Primary color palette")

</div>

<h2 id="palette">Palette<span class="cf-code-link"><a href="https://github.com/cfpb/cf-theme-cfpb/blob/master/src/color-palette.less">View code <i class="cf-icon cf-icon-external-link"></i></a></span></h2>

Our core color palette includes CFPB Green and nine supporting colors.

### Primary colors

{::nomarkdown}
<div class="swatches">
    {% for color in site.data.cfpb-brand-colors %}
        {% if color.primary %}
            <figure class="swatch swatch__primary">
                <div class="swatch_field swatch_field__{{ color.shortname }}"></div>
                <figcaption class="swatch_label">
                    <h4 class="swatch_head">{{ color.name }}</h4>
                    <table class="swatch_table">
                        <tbody>
                            <tr>
                                <th>Hex</th>
                                <td>{{ color.hex }}</td>
                            </tr>
                            <tr>
                                <th>RGB</th>
                                <td>{{ color.RGB }}</td>
                            </tr>
                            <tr>
                                <th>CMYK</th>
                                <td>{{ color.CMYK }}</td>
                            </tr>
                        </tbody>
                    </table>
                </figcaption>
            </figure>
        {% endif %}
    {% endfor %}
</div>
{:/nomarkdown}

### Supporting colors

These colors are used primarily as accent colors, and should be used to add variety to page content and illustrations. They should never overpower the core brand colors.

{::nomarkdown}
<div class="swatches">
    {% for color in site.data.cfpb-brand-colors %}
        {% if color.secondary %}
            <figure class="swatch swatch__secondary">
                <div class="swatch_field swatch_field__{{ color.shortname }}"></div>
                <figcaption class="swatch_label">
                    <h4 class="swatch_head">{{ color.name }}</h4>
                    <table class="swatch_table">
                        <tbody>
                            <tr>
                                <th>Hex</th>
                                <td>{{ color.hex }}</td>
                            </tr>
                            <tr>
                                <th>RGB</th>
                                <td>{{ color.RGB }}</td>
                            </tr>
                            <tr>
                                <th>CMYK</th>
                                <td>{{ color.CMYK }}</td>
                            </tr>
                        </tbody>
                    </table>
                </figcaption>
            </figure>
        {% endif %}
    {% endfor %}
</div>
{:/nomarkdown}


### Tints

{::nomarkdown}
    {% assign family = site.data.cfpb-brand-colors[1].family %}
    <table class="color-table">
        <thead>
            <th></th>
            <th>Name</th>
            <th>Hex</th>
            <th>RGB</th>
            <th>CMYK</th>
        </thead>
    {% for color in site.data.cfpb-brand-colors %}
        {% if family != color.family %}
        {% assign family = color.family %}
        </table>
        <table class="color-table">
            <thead>
                <th></th>
                <th>Name</th>
                <th>Hex</th>
                <th>RGB</th>
                <th>CMYK</th>
            </thead>
        {% endif %}
        <tr>
            <td class="swatch_field swatch_field__{{ color.shortname }}"></td>
            <td>{{ color.name }}</td>
            <td>{{ color.hex }}</td>
            <td>{{ color.RGB }}</td>
            <td>{{ color.CMYK }}</td>
        </tr>
    {% endfor %}
    </table>
{:/nomarkdown}
