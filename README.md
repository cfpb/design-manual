http://cfpb.github.io/design-manual/  

# The CFPB Design Manual

This is the repository for CFPB's Design Manual for developing print and web products. It contains both the assets and the content for the site. 

The Manual is an open-source resource built to help employees and contractors efficiently produce consistent print and web products. The guides and assets included in the Manual put our Design Principles into practice, helping CFPB build clear, consistent and accessible products. 

The Manual will include CFPB's design goals and principles, guidelines for user experience, identity standards, and code snippets for common user interface elements. Our internal design and development team collaboratively developed the Manual over the past nine months, but it will grow and change as we design new products and add staff.

Releasing the Manual to the public increases transparency and allows you to help us make improvements. The Manual is open source, so we’d love for other agencies, developers, or groups to adapt it for their own use. Many style guides influenced the Manual, including Mozilla's, MailChimp's, BBC's, but our primary inspiration is the UK's Government Digital Service's Government Service Design Manual. We hope ours can serve as a foundation for discussing and practicing user-centered design in government.

The site is built using Bower, Grunt, Jekyll, and LESS.

## To run it locally

Before you get started make sure you have an up-to-date version of Ruby installed. We use [Homebrew](http://brew.sh/):

```
brew install ruby
```

We use the static site generator [Jekyll](http://jekyllrb.com/) to generate and serve our Design Manual as a website. To install Jekyll run:

```
gem install jekyll
```

Fork and clone the repo:

```
git clone git@github.com:cfpb/design-manual.git
cd design-manual
```

Run Jekyll:

```
jekyll serve --watch --baseurl ''
```

## Working with the front-end

We use NodeJS, Node Packaged Modules and Grunt to simplify development tasks within our Design Manual. Let's get those installed if you don't have them already.

Install [node.js](http://nodejs.org/) however you'd like. We use [Homebrew](http://brew.sh/). That's:

```
brew install node
```

Install [Grunt](http://gruntjs.com/), a JavaScript task runner:

```
npm install -g grunt-cli
```

All of our front-end dependencies are stored within the `front` directory. To install the dependencies `cd` into front and run npm and bower:

```
cd front
npm install
bower install
```

We use [Grunt](http://gruntjs.com/) to compile and compress our Less and JavaScript files. The easiest way to do that is to run the `watch` task. This will watch for changes and run grunt whenever you save a file:

```
grunt watch
```

## _config.yml

Options within the `_config.yml` file allow you to control the site's title, subtitle, logo, author information, and the left column navigation.

### Project Page URL Structure

**This is an excerpt from the [Jekyll docs](http://jekyllrb.com/docs/github-pages/) on configuring your URL for Project Pages.**

Sometimes it's nice to preview your Jekyll site before you push your `gh-pages` branch to GitHub. However, the subdirectory-like URL structure GitHub uses for Project Pages complicates the proper resolution of URLs. Here is an approach to utilizing the GitHub Project Page URL structure (`username.github.io/project-name/`) whilst maintaining the ability to preview your Jekyll site locally.

1. In `_config.yml`, set the `baseurl` option to `/project-name` -- note the leading slash and the **absence** of a trailing slash.
2. When referencing JS or CSS files, do it like this: `{{ site.baseurl }}/path/to/css.css` -- note the slash immediately following the variable (just before "path").
3. When doing permalinks or internal links, do it like this: `{{ site.baseurl }}{{ post.url }}` -- note that there is **no** slash between the two variables.
4. Finally, if you'd like to preview your site before committing/deploying using `jekyll serve`, be sure to pass an **empty string** to the `--baseurl` option, so that you can view everything at `localhost:4000` normally (without `/project-name` at the beginning): `jekyll serve --baseurl ''`

This way you can preview your site locally from the site root on localhost, but when GitHub generates your pages from the gh-pages branch all the URLs will start with `/project-name` and resolve properly.

## License

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication][CC0].

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

[CC0]: http://creativecommons.org/publicdomain/zero/1.0/

## Current Sitemap

![sitemap image](https://raw2.github.com/dezzie/design-manual/gh-pages/assets/img/design_manual_sitemap.png)

## Roadmap
In the near future we plan to add guidelines for pagination, filtering, modals, tooltips, tabs, and responsive tables. We also plan to make the Design Manual itself fully responsive for small screens. The Design Manual will eventually merge with our existing cfpb.github.io page.

