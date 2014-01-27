# The CFPB Design Manual

This is the repository for CFPB's Design Manual for developing print and web products. It contains both the assets and the content for the site. 

The Manual is an open-source resource built to help employees and contractors efficiently produce consistent print and web products. The guides and assets included in the Manual put our Design Principles into practice, helping CFPB build clear, consistent and accessible products. 

The Manual includes CFPB's design goals and principles, guidelines for user experience, identity standards, and code snippets for common user interface elements. Our internal design and development team collaboratively developed the Manual over the past six months, but it will grow and change as we design new products and add staff.

Releasing the Manual to the public increases transparency and allows you to help us make improvements. The Manual is open source, so we’d love for other agencies, developers, or groups to adapt it for their own use. Many style guides influenced the Manual, including Mozilla's, MailChimp's, BBC's, but our primary inspiration is the UK's Government Digital Service's Government Service Design Manual. We hope ours is one small step towards unified, quality, user-centric design across all US government websites.

The site is built using Grunt, Jekyll, and LESS.

## To run it locally

We use NodeJS, Node Packaged Modules and Grunt to help make lots of development tasks easier within our Design Manual. Let's get those installed if you don't have them already.

Install [NodeJS](http://nodejs.org/) however you'd like. We use Homebrew. That's:

```
brew install node
```

Install [Node Packaged Modules](https://npmjs.org/):

```
npm install
```

Install [Grunt](http://gruntjs.com/), a JavaScript task runner:

```
npm install -g grunt-cli grunt-init
```

Now, on to Jekyll. Jekyll generates and serves our Design Manual as a website.

Be sure to have [Jekyll](http://jekyllrb.com/) and [redcarpet](http://rubygems.org/gems/redcarpet) installed.

```
gem install jekyll
gem install redcarpet
```

Fork and clone the repo:

```
git clone git@github.com:cfpb/design-manual.git
cd design-manual
```
Run Jekyll:

```
jekyll serve --baseurl ''
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
