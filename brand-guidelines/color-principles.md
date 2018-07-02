---
layout: page
title:  Color
category: Brand guidelines
redirect_from: "/identity/color-principles.html"
---

- [Palette](#palette)
{: class="toc"}

<div class="content-67 content-first">

A minimal palette, clear hierarchy, and ample whitespace ensure a voice of authority and expertise in communication.
{: class="lead-in"}

</div>

<div class="content-33 content-last">

![Primary color palette]({{ site.baseurl }}/static/img/color/Color0_@2.png "Primary color palette")

</div>

<h2 id="palette">Palette<span class="cf-code-link"><a href="https://github.com/cfpb/cf-theme-cfpb/blob/master/src/color-palette.less">View code {% include icons/external-link.svg %}</a></span></h2>

### Primary colors
Our core brand color is CFPB Green. Green 60 and Green 20 play a supporting role in basic branded pieces. Black is typically used for type and icons while grays are used for wells and accents, such as rules and borders.

{::nomarkdown}
<div class="swatches-container__primary">
    <div class="swatches swatches__primary">
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
                                <th>PMS</th>
                                <td>{{ color.PMS }}</td>
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
</div>
{:/nomarkdown}

---

### Secondary colors
The secondary color palette introduces visual variety. Colors were selected to hold together as a family and coordinate with CFPB Green.

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
                                <th>PMS</th>
                                <td>{{ color.PMS }}</td>
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
Tints expand upon the primary and secondary color palettes to help create visual cohesion when incorporating complex illustrations and data visualizations.

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


## Updating the color palette

To update the color palette within the Design Manual:

1. Update the values within the [CFPB Brand Colors CSV file](https://github.com/cfpb/design-manual/blob/gh-pages/_data/cfpb-brand-colors.csv)
1. From terminal within this repo run `npm run colors`, this will auto-generate a [new brand-palette.less file](https://github.com/cfpb/design-manual/blob/gh-pages/src/static/css/brand-palette.less)
1. Run `grunt build` (you may need the `-f` flag because of linting issues)
1. Run `npm start` and check `/design-manual/brand-guidelines/color-principles.html` locally
1. Commit the changes and open a PR.

Once the PR is merged, the Less file needs to be duplicated [in Capital Framework CF Core](https://github.com/cfpb/capital-framework/tree/canary/src/cf-core/src) and follow that project's release process.
