# The CFPB Design Manual

https://cfpb.github.io/design-manual/

This is the repository for CFPB's Design Manual for developing print and web products. It contains both the assets and the content for the site.

This Design Manual is an open-source resource for CFPB staff to produce effective and visually-consistent products that are easy for consumers to access, use, and understand. The Manual includes our design principles, guidelines for user experience, visual identity standards, and code snippets for common user interface elements. The Manual will continue to evolve as we learn what works best for the CFPB and the people we serve.

These standards reflect our latest thinking and are a work-in-progress. Our goal is to apply them to all of CFPB projects.

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


## Running it locally

Content editors and developers probably want to set up the Design Manual on
their local machine so they can preview updates without pushing to GitHub.

Before you get started make sure you have an up-to-date version of Ruby and Bundler.
We use [Homebrew](http://brew.sh/):

```sh
brew install ruby
gem install bundler
```

As the site is intended to be deployed on GitHub Pages, installing the
GitHub Pages gem is the best way to install Jekyll and related dependencies.
Run the following command to install it:

```sh
bundle install
```

[Fork and clone the repo](https://help.github.com/articles/fork-a-repo/)
to your local machine.

From the project directory, run Jekyll:

```sh
bundle exec jekyll serve --watch --baseurl ''
```

Open it up in your browser: <http://localhost:4000/>


## Working with the front end

The Design Manual front end currently uses the following:

- [Grunt](http://gruntjs.com/): Task runner for pulling in assets,
  linting and concatenating code, etc.
- [Less](http://lesscss.org/): CSS pre-processor.
- [Capital Framework](https://cfpb.github.io/capital-framework/):
  User interface pattern-library produced by the CFPB.
- [Jekyll](http://jekyllrb.com/): Static site generator used by GitHub Pages.

**NOTE:** If you're new to Capital Framework, we encourage you to
[start here](https://cfpb.github.io/capital-framework/getting-started).

### Installing dependencies (one time)

1. Install [node.js](http://nodejs.org/) however you'd like.
2. Install [Grunt](http://gruntjs.com/) globally:

```sh
npm install -g grunt-cli
```

### Developing

When first setting up this project, and each time you fetch from upstream,
run the setup shell script to install the newest project dependencies and
build the website with grunt:

```sh
./setup.sh
```

We use [Grunt](http://gruntjs.com/) to compile and compress
our Less and JavaScript files.
The easiest way to do that is to run the `watch` task.
This will watch for changes and run `grunt` whenever you save a CSS or JS file:

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

The CFPB’s  Design & Development Team uses GitHub issues to track potential updates and additions to the CFPB Design Manual. These issues are organized through milestones and labels. We welcome the public to participate  in our discussions and in opening pull requests to the Design Manual.

- Updates and additions are published in the Design Manual after a GitHub issue has received approval from the applicable disciplines. The approvers are:
  - Natalia Fitzgerald (GD)
  - Jessica Schafer (UI)
  - Scott Cranfill (FEWD)
  - Jennifer Horan (508/Accessibility)
- After an issue has received the necessary approvals, anyone can volunteer to submit a pull request to make the change to the manual. Any applicable changes to our asset libraries and templates should also be updated on CFPB’s internal Google Drive. Any changes that require updates to a Capital Framework component should be made in the appropriate [GitHub repository](https://github.com/cfpb/capital-framework).

### Milestones

#### Backlog / Priority
There are three backlogs: Design, UI, and FEWD. In advance of quarterly meetings, discipline leads groom the backlog and match project teams with priority topics. If there are certain issues you want included in the next quarter’s sprint, make sure to communicate this to your discipline lead.

#### Sprints
We work through open issues in quarterly  sprints. These milestone helps us prioritize what to tackle and when. Meeting time is reserved for brief updates from each team and to communicate any issue needing larger consensus. The remaining time can be used for Manual work amongst small teams.

#### Next up
These issues may not be as high of a priority as the quarterly  sprint but they are issues being actively discussed and worked on. We consider these items to be “next in line.”

### Labels

#### Step one: Label by classification

Include all that apply
- 508 (Accessibility)
- FEWD
- UI
- Design
- Multimedia
- Content strategy

#### Step two: Where is it within the process?

**0 - Backlog** – When a new issue is created, it should be assigned to the backlog. Make sure to select a label so that your team lead can appropriately review and prioritize all issues.

**1 - Working** – issues that are being worked on in the current sprint.

**2 - Approval** – issues that need approval to publish. Be sure to tag the appropriate approver from the options listed below. To receive approval, the content should be finalized and presented in the way that it would be published to the Design Manual.
- FEWD approval
- UI approval
- Design approval
- 508 approval
It is the responsibility of the approver to remove the approval tag.

**3 - Implement changes** – When an issue has received all of the necessary approvals (which depends on the type of standard), move the issue to the milestone ‘Implement changes.’ The following steps must be accomplished in order to be considered done.

Add the following checklist to an issue when it's time to implement changes:

>Steps to close out this issue:
- [ ] Add to the Design Manual
- [ ] Update Capital Framework
- [ ] Add assets to design libraries

**Definition of done for each step**
- Add to the Design Manual - DM pages should be built following the content standards.
 
- Update Capital Framework - Make any necessary changes to our front-end code, following the Capital Framework contribution guidelines. Once the update is published, update the component here in the Design Manual.

- Add assets to design libraries – This is the responsibility of the graphic designer or UX designer of the team championing the issue. 
 - Web Patterns
    - Add the final asset to the Axure component library.
    - Add .ai template file of the pattern to the folder ‘New patterns’ within website templates for consumerfinance.gov  on CFPB’s Google Drive. 
    - Create a Google Doc of the approved DM page and add it to the folder ‘Approved standards’ within the Design Manual folder on Drive. This is to help all designers stay on top of the most current approved standards while the pattern is in development. Once the DM page has been built, this file should be removed from the folder.
  - Other assets
    - Add illustration assets, to the ‘In progress’ folder to be added to the official library. 
    - Email an SVG file of approved Minicon font additions to Daniel Pizarro.

## Expedited review for component or template updates
In general, we try to build using our templated components to create a consistent user experience and visual design across CFPB web products. If a project team encounters a use case in which they need a template change, a component change, and/or an entirely new template or component, please follow the expedited review process: 

1. Submit an issue to this repo requesting a review of your proposed change. @ mention DM lead reviewers (as noted above) and CF.gov Product Owner (currently Jessica Schafer).
 - Be sure to include your business or user experience justification for the proposed change.
 - The issue should include both a quick illustration or demo of how the new use case would be handled by established components/templates (if it can be handled at all) and how the use case would be handled by your update or addition. 
2. DM lead reviewers and CF.gov Product Owner have 1 week for discussion and consideration of the change. (Comments from others encouraged and welcome!) If consensus is not reached by the end of the week, the CF.gov Product Owner will make a decision.
3. If approved, add the “Approved concept” and “Documentation needed” tags to the issue and implement the change within your project work. 
 - If moving forward with the change requires modifications to our CMS code, the project team will take the lead with support from the CF.gov Platform Team.

By the time the project ends, Design Manual and Capital Framework documentation should be updated to reflect the change per the existing processes described above:

- Team updates existing DM page or creates a new one to be published. Mark all approval labels that apply per standard DM process.
- Once all of approval labels have been removed by discipline leads, team implements changes:
 - Update Capital Framework (ideally this will be done as part of project work)
 - Add to the Design Manual
 - Add assets to design libraries




----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
