---
layout: page
title:  Alerts, Validations, and Error Messaging
category: UI toolkit
---

- [Use](#use)
- [Placement](#placement)
- [Types](#Types)
- [Accessibility](#accessibility)
{: class="toc"}

<div class="content-50 content-first">

Alerts, error, and validation messages provide important information to users and guide or validate user action.
{: class="lead-in"}

</div>

<div class="content-50 content-last">
  <h5 class="repo-list-header">Repository</h5>
  <ul class="repo-list">
    <li>
      <span class="cf-icon cf-icon-github"></span>
    </li>
    <li>
      <a href="https://github.com/cfpb/cf-notifications"><h4>cf-notifications</h4></a>
      <p>Notifications in the Capital Framework</p>
    </li>
  </ul>
</div>

<h2 id="use">Use<span class="cf-code-link"><a href="https://cfpb.github.io/cf-notifications/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-67 content-first">

<p>**Alert notifications** communicate information that should be read before the rest of the content on the page.</p>

<p>When the user is required to do something in response to an alert, let them know what they need to do and make that task as easy as possible. Think about how much context to provide with your message. For example, a notification of a system change may require more contextual information than a validation message. Write the message in concise, human readable language; avoid jargon and computer code.</p>

<p>Be careful not to overdo it: too many notifications will either overwhelm or annoy the user, and are likely to be ignored.</p>

<p>**Error notifications** communicate an issue that was caused by the user’s action.</p>

<p>Be polite in error messages—don’t place blame on the user. Make it clear something went wrong, and help them get back on track. Be specific about what to do next for each type of error.</p>

<p>**Validation notifications** communicate success that was caused by the user’s action, such as the successful completion of a form.</p>



###Adding Hyperlinks

<p>Hyperlinks can be used within alerts to take the user to a page or field where they can take further action.</p>

<p>In an error message, a hyperlink can be used to direct the user to a location where they can correct the error.</p>

<p>In an alert message, a hyperlink can direct the user to content that the alert is referencing.</p>

<p>In a validation message, a hyperlink can be used to direct the user to another step in a process, or related information about the process.</p>

</div>

<h2 id="placement">Placement<span class="cf-code-link"><a href="https://cfpb.github.io/cf-buttons/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-67 content-first">
###Above Content

<p>By default, alert, validation, and error messages should be displayed at the top of a page or form, spanning the full width of the page or section.</p>

###Covering Content

<p>Alert and error messages can be displayed on top of a tool when something has happened that prevents the tool from functioning correctly (e.g., a broken data connection or null results).</p>

<p>There is no “dismiss” or “close” button for these messages; they will continue to display as long as the tool is not functional.</p>

</div>

<h2 id="style">Style<span class="cf-code-link"><a href="https://cfpb.github.io/cf-notifications/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-67 content-first">

<p>Content should be written in two parts. The first part should articulate the alert, error or validation, and the second part should articulate what action the user needs to take.</p>

![Alert notification]({{ site.baseurl }}/static/img/notifications/cfpb_alert_messsage.png "Alert notification")

####Alert
* __Background:__ fff0dd
* __Border:__ 1px, ff9e1b
* __Minicon (E103):__ 18px, ff9e1b
* __Text:__ 8px space between minicon and text. Alert message is 18px Avenir Next medium. Needed action appears 15px below alert message and is 16px Avenir Next regular.
* __Margins:__ 15px margins on top, left and bottom. At least 15px on right. 

![Alert notification]({{ site.baseurl }}/static/img/notifications/cfpb_alert_messsage.png "Alert notification")

####Error
* __Background:__ f7e0d9
* __Border:__ 1px, d14124
* __Minicon (E107):__ 18px, d14124
* __Text:__ 8px space between minicon and text. Alert message is 18px Avenir Next medium. Needed action appears 15px below alert message and is 16px Avenir Next regular.
* __Margins:__ 15px margins on top, left and bottom. At least 15px on right. 

![Error notification]({{ site.baseurl }}/static/img/notifications/cfpb_error_messsage.png "Error notification")

####Validation
* __Background:__ e2efd8
* __Border:__ 1px 20aa3f
* __Minicon (E101):__ 18px, 20aa3f
* __Text:__ 8px space between minicon and text. Validation message is 18px Avenir Next medium. If needed, an action or explanation appears 15px below validation message and is 16px Avenir Next regular.
* __Margins:__ 15px margins on top, left and bottom. At least 15px on right.

![Validation notification]({{ site.baseurl }}/static/img/notifications/cfpb_validation_message.png "Validation notification")

</div>

<h2 id="accessibility">Accessibility<span class="cf-code-link"><a href="https://cfpb.github.io/cf-notifications/docs/">View code <span class="cf-icon cf-icon-external-link"></span></a></span></h2>

<div class="content-67 content-first">

<p>Use distinct icons, contrasting colors, prominent placement and text to indicate errors. Don’t rely on just one method, as users can have many different accessibility needs (color blind users, visually impaired users, users with motor control issues).</p>

</div>