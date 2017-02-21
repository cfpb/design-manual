# The CFPB Design Manual

https://cfpb.github.io/design-manual/

This is the repository for CFPB's Design Manual for developing print and web
products. It contains both the assets and the content for the site.

This Design Manual is an open-source resource for CFPB staff to produce
effective and visually-consistent products that are easy for consumers to
access, use, and understand. The Manual includes our design principles,
guidelines for user experience, visual identity standards, and code snippets
for common user interface elements. The Manual will continue to evolve as we
learn what works best for the CFPB and the people we serve.

These standards reflect our latest thinking and are a work-in-progress. Our
goal is to apply them to all of CFPB projects.

We are proud to join the community of organizations that have made their
design standards public, such as
[Mozilla](http://www.mozilla.org/en-US/styleguide/),
[BBC](http://www.bbc.co.uk/gel), and the UK's
[Government Digital Service](https://www.gov.uk/service-manual).
We hope our design manual can serve as a foundation for discussing and
practicing user-centered design in government.

All content has been released as open source under the
CC0 1.0 Universal Public Domain Dedication, and we'd love for other agencies,
developers, or groups to adapt it for their own use.


## Technology stack

- [Ruby](https://www.ruby-lang.org/en/) - For installing Jekyll.
- [Jekyll](http://jekyllrb.com/) - Static site server.
- [Node](https://nodejs.org/en/) - For managing front-end dependencies.
- [Grunt](http://gruntjs.com/) - Task runner for pulling in assets,
  linting and concatenating code, etc.
- [Less](http://lesscss.org/) - CSS pre-processor.
- [Capital Framework](https://cfpb.github.io/capital-framework/) -
  User interface pattern-library produced by the CFPB.

**NOTE:** If you're new to Capital Framework, we encourage you to
[start here](https://cfpb.github.io/capital-framework/getting-started).


## Installation

This site is powered by Jekyll a Ruby based static site generator. For
front-end tooling and asset management we use Node and Grunt. Before
running the site locally you will need these dependencies. We use
[homebrew](http://brew.sh/) on Mac OSX to manage installation of software.
To install the project dependencies using homebrew enter the following:

```shell
brew install ruby
brew install node
gem install jekyll
npm install --global grunt-cli
```

To install the site's dependencies, navigate to the project directory and run:

```shell
./setup.sh
```

To launch the site, enter:

```shell
npm start
```

This will start the Jekyll server and the Grunt watch task. Open a browser
window at http://localhost:4000.

### Developing

When first setting up this project, and each time you fetch from upstream,
run the setup shell script to install the newest project dependencies and
build the website with Grunt:

```sh
./setup.sh
```

We use Grunt to build our asset files. The easiest way to do that is to run
the `watch` task which will monitor file changes and re-build the assets
whenever you save a CSS or JS file
(**Note: This is running when you run `npm start`, no need to run it twice**):

```
grunt watch
```


## _config.yml

Options within the `_config.yml` file allow you to control the site's title,
subtitle, logo, author information, and the left column navigation.

### Project Page URL Structure

_This is an excerpt from the
[Jekyll docs](http://jekyllrb.com/docs/github-pages/)
on configuring your URL for Project Pages._

Sometimes it's nice to preview your Jekyll site before you
push your `gh-pages` branch to GitHub.
However, the subdirectory-like URL structure GitHub uses for Project Pages
complicates the proper resolution of URLs.
Here is an approach to utilizing the GitHub Project Page URL structure
(`username.github.io/project-name/`) whilst maintaining
the ability to preview your Jekyll site locally.

1. In `_config.yml`, set the `baseurl` option to `/project-name`
   – note the leading slash and the **absence** of a trailing slash.
2. When referencing JS or CSS files, do it like this:
   `{{ site.baseurl }}/path/to/css.css` – note the slash immediately following
   the variable (just before "path").
3. When doing permalinks or internal links, do it like this:
   `{{ site.baseurl }}{{ post.url }}` – note that there is **no** slash
   between the two variables.
4. Finally, if you'd like to preview your site before committing/deploying
   using `jekyll serve`, be sure to pass an **empty string** to the `--baseurl`
   option, so that you can view everything at `localhost:4000` normally
   (without `/project-name` at the beginning): `jekyll serve --baseurl ''`

This way you can preview your site locally from the site root on localhost,
but when GitHub generates your pages from the gh-pages branch all the URLs
will start with `/project-name` and resolve properly.


## Getting involved

We welcome your feedback and contributions.
See the [contribution guidelines](CONTRIBUTING.md) for more details.

**Note:** Currently this file has standard language geared toward code contributions.
Interested in contributing to design discussions? Just check out the
[issues](https://github.com/cfpb/design-manual/issues) and dive right in!

Additionally, you may want to consider
[contributing to the Capital Framework](https://cfpb.github.io/capital-framework/contributing/),
which is the front-end pattern library used in this project.

---

## How to track an issue

The CFPB’s Design & Development Team uses GitHub issues to track potential
updates and additions to the CFPB Design Manual. We welcome the public to
participate in our discussions and in opening pull requests to the
Design Manual.

**Design Manual Product Co-owners:**<br>
Each discipline, UX and GD, has a representative<br>
Jessica Schafer (UX)<br>
Candice Heberer (GD)

**Manual content strategist:**<br>
Insert name here

**Primary Maintainers:**<br>
Jimmy Wilson (FEWD)<br>
Scott Cranfill (FEWD)

## Process

**1. Create MVP**<br>
We work through open issues during group hack hours. During hack hours, you
should choose an issue that has been prioritized with the “Hack hours”
milestone, form small teams, and work to complete an MVP by the end of the
session. This could mean completing the issue, providing a written
recommendation, or simply outlining a plan for next steps. The goal will be
to add something live to the Manual as a way to provide guidance to the rest
of the team on that issue, as well as keeping the Manual a current source of
our standards.

**2. Review**<br>
Updates and additions are ready for publishing after an issue has been:
- reviewed and agreed upon by a combination of 3-4 user experience and graphic
designers
- content follows DM standards and is reviewed by the Manual content strategist
- reviewed by one of the FEWD Primary Maintainers to help spot any problems
from a development perspective

**3. Submit pull request**<br>
After review is complete, anyone can submit a pull request to merge the update.
The Primary Maintainers are responsible for reviewing and merging pull requests.

The issue will be added to the Capital Framework backlog to be prioritized in
upcoming sprints. DM Product Co-owners will attend CF backlog grooming sessions
to assist in prioritizing issues.

**4. Add patterns to design library**<br>
After the update has been merged and is live on the Manual, add .ai pattern
files to the design library in the folder ‘New patterns’ within website
templates for consumerfinance.gov on CFPB’s Google Drive.

## Assigning labels to your issue

**Where is it within the process?**<br>
1 - Working – apply this to issues you are working on during current hack
hours sprint.<br>
2 - Peer review – apply this to issues that need peer review before going
live. The page should be reviewed in it’s entirety, including content, before
being published to the Design Manual.

## Milestones
Hack hours – This milestone will be named with the month of the upcoming hack
hour, for example “February hack hours.” Issues for that session will be
prioritized and assigned this milestone in advance by DM Product Co-owners.


## Expedited review for component or template updates
In general, we try to build using our templated components to create a consistent
user experience and visual design across CFPB web products. If a project team
encounters a use case in which they need a template change, a component change,
and/or an entirely new template or component, please follow the expedited review
process:

1. Submit an issue to this repo requesting a review of your proposed change.
@ mention DM lead reviewers (as noted above) and CF.gov Product Owner
(currently Jessica Schafer).
 - Be sure to include your business or user experience justification for the
 proposed change.
 - The issue should include both a quick illustration or demo of how the new
 use case would be handled by established components/templates (if it can be
 handled at all) and how the use case would be handled by your update or
 addition.
2. DM lead reviewers and CF.gov Product Owner have 1 week for discussion and
consideration of the change. (Comments from others encouraged and welcome!)
If consensus is not reached by the end of the week, the CF.gov Product Owner
will make a decision.
3. If approved, add the “Approved concept” and “Documentation needed” tags to
the issue and implement the change within your project work.
 - If moving forward with the change requires modifications to our CMS code,
 the project team will take the lead with support from the CF.gov Platform
 Team.

By the time the project ends, Design Manual and Capital Framework documentation
should be updated to reflect the change per the existing processes described
above:

- Team updates existing DM page or creates a new one to be published. Mark all
approval labels that apply per standard DM process.
- Once all of approval labels have been removed by discipline leads, team
implements changes:
 - Update Capital Framework (ideally this will be done as part of project
 work)
 - Add to the Design Manual
 - Add assets to design libraries




----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
