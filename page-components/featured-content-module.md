---
layout: page
title: Featured content modules
category: Page components
published: true
redirect_from: "/ui-toolkit/featured-content-module.html"
---

- [Use cases](#use)
- [Desktop style](#desktop)
- [Tablet style](#tablet)
- [Mobile style](#mobile)
{: class="toc"}

<div class="content-50 content-first">

Featured content modules (FCMs) function to highlight a specific piece of content within a page. They are not integral to the page, and could be removed while leaving the page integrity intact. 
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-layout"><h4>cf-layout</h4></a>
      <p>FCMs in the Capital Framework</p>
    </li>
  </ul>
</div> 


<h2 id="use">Use<span class="cf-code-link"><a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/cf-layout.less#L544-L546">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>


<div class="content-67 content-first">

Featured content modules should include a single piece of content from a defined content type, including: Blog, News, Video, Event, and Tool. 

FCMs appear below the title and introductory paragraph on a page, and retain that position on all screen sizes.

FCMs contain a headline, body copy text, and a graphical element related to the piece of content being featured. They are a “mini story” and never simply a dominant visual. 

FCMs can appear on any page type, though they are best suited for pages 3rd level and below in the site map. They are designed to accommodate pages with either a left-hand navigation or right-hand sidebar.

</div>

<div class="content-33 content-last"></div>

<h2 id="desktop">Style at desktop size<span class="cf-code-link"><a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/cf-layout.less#L544-L546">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div>
![Image of featured content module example at desktop size]({{ site.baseurl }}/static/img/featured-content-module/fcm-desktop02.png)
</div>

<div class="content-33 content-first">
* Module is a minimum of 320px total in height with 30px top and bottom padding. It appears 60px underneath the header/intro paragraph of the page.
* Background color of module is Gray 5 with a 1px Gray 50 stroke.
* Module bleeds to the edge of the page, right sidebar and left nav.
* Visual spans 5 columns and bleeds into right sidebar. The visual is sized at 640 x 360px (a 16:9 ratio) for optimal appearance at all screen sizes.
* Text spans 3 columns and is left and top aligned.
</div>

<div class="content-33">
* Heading: H2, appears 30px below category, 35 maximum character count (including spaces)
* Body copy: 16px, appears 15px below the headline, 160 maximum character count (including spaces)
* Call to action link: 16px, standard link colors, appears 30px below body copy, 30 maximum character count (including spaces)
* Call to action button: Blue primary button, appears 30px below the body copy
</div>

<div class="content-33 content-last">
* Category: 18px black minicon and H4 text, appears 30px from top
* The following five categories can be used.
* <h4 class="cf-icon cf-icon-date"> Featured event</h4>
* <h4 class="cf-icon cf-icon-settings"> Featured blog</h4>
* <h4 class="cf-icon cf-icon-play-round"> Featured video</h4>
* <h4 class="cf-icon cf-icon-speech-bubble"> Featured tool</h4>
* <h4 class="cf-icon cf-icon-newspaper"> Featured news</h4>
* If the content does not fit within one of the five categories, you may use this icon and prefix:
* <h4 class="cf-icon cf-icon-favorite"> Featured </h4>
</div>

<h2 id="tablet">Style at tablet size<span class="cf-code-link"><a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/cf-layout.less#L544-L546">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

Differences in style at tablet size

* Text spans 5 columns
* Visual spans 7 columns
* Visual's height is fixed, and cropping will occur on both the left and right sides until 700px, when the image will drop below the text and appear at a 16:9 ratio. 


</div>

<div class="content-67 content-last">

![Image of featured content module example at tablet size]({{ site.baseurl }}/static/img/featured-content-module/fcm-tablet02.png)

</div>


<h2 id="mobile">Style at mobile size<span class="cf-code-link"><a href="https://github.com/cfpb/capital-framework/blob/master/src/cf-layout/src/cf-layout.less#L544-L546">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-33 content-first">

Differences in style at mobile size

* Module appears 30px underneath the header/intro paragraph of the page
* Headline: H3
* Body copy: 16px
* Visual appears below text at a 16:9 ratio
* 30px space between text and top of visual


</div>

<div class="content-33">

![Image of featured content module example at mobile size]({{ site.baseurl }}/static/img/featured-content-module/fcm-mobile02.png)

</div>




