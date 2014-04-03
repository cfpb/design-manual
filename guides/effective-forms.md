---
layout: page
title:  Effective forms
category: Guides
---

- [Order and layout](#order-and-layout)
- [Clarity](#clarity)
- [Validation](#validation)
{: class="toc"}


## Order and layout

<div class="content-100">

<div class="content-33 content-first">
	
#### The order of the elements in a form is critical for the user understanding the form.

Think of your form as a narrative that you are walking your user through.

</div>

<div class="content-33">
	
#### The most important items in the form should be listed first.

This can include login and contact information (e.g., name and email address) if it’s important to enable the user to come back if they don’t complete the form on the first pass.

</div>

<div class="content-33 content-last">
	
#### Form elements should be grouped logically.

Similar items (e.g., all things related to identifying an individual financial institution) should be grouped together.

</div>

---

</div>

<div class="content-33 content-first">
	
#### When your form has a lot of fields, chunk the fields into separate categories.

Those categories can then be divided by either separate headers or accordion-style modules depending on the purpose of the form (external form style vs application form style)

</div>

<div class="content-33">
	
#### If the form stretches over multiple pages, indicate the user’s progress.

A left-hand list of steps/pages is included in the external form style for this purpose.

</div>

<div class="content-33 content-last">
	
#### Use progressive disclosure.

If there are sections of the form that are optional, consider using a show/hide mechanism like an accordion module. If something is a followup question (e.g., “If you answered yes to the previous question…”) don’t show it at all until the user has met the condition requiring the follow-up.

</div>

## Clarity

<div class="content-33 content-first">
	
#### Avoid jargon.

</div>

<div class="content-67 content-last">
	
Wherever possible, use clear, concise, standard English.

</div>

<div class="content-33 content-first">
	
#### Keep labels short and simple.

</div>

<div class="content-67 content-last">
	
If a longer label is needed, consider phrasing it as a question: “How many chucks did the woodchuck chuck?” rather than “Number of chucks chucked by woodchuck”

</div>

<div class="content-33 content-first">
	
#### Helper text should appear below the text entry field, and provide an example of the correct way to enter text (“e.g., 100 Main Street, Anytown, USA”).

</div>

<div class="content-67 content-last">
	
Do not hide this sort of helper text: it should always be visible, even before the user focuses on the form element (some users won’t select a field until they know their answer).

</div>

<div class="content-33 content-first">
	
#### If the most of the fields are required, leave them alone and just mark the optional fields as optional.

</div>

<div class="content-67 content-last">
	
If most of the fields are optional, leave them alone and just mark the required fields as required. If it’s close to a tie, go with whichever choice might be better for your users.

</div>

<div class="content-33 content-first">
	
#### Helper text and/or field masking should be used whenever a specific data entry format is required,

</div>

<div class="content-67 content-last">
	
as for phone numbers, dates, and social security numbers. Users should not have to guess and check this through validation.

</div>

<div class="content-33 content-first">
	
#### Where the label is placed affects how quickly the user can read the form field.

</div>

<div class="content-67 content-last">
	
Keeping labels to the left of the form field is the pattern that tends to work best for clearly indicating which label belongs to which field. 

</div>

<div class="content-33 content-first">
	
#### To help clarify the association of a label with a form field, provide ample space and visual indication between separate form fields.

</div>

<div class="content-67 content-last">
	
This will allow the user to quickly scan the text of the labels and easily associate each label with its field. Right-aligning label text can also be helpful, but it also has the negative effect of making labels harder to scan and can lead to very ragged text when translated to different languages.

</div>

## Validation

**In an ideal world, the user enters an acceptable value in all the required fields the first time around, making validation unnecessary.** That should be your goal. 

**When possible, check for errors as the user fills out the form (e.g., using javascript) and provide inline messaging with instructions for how to correct the error.** It is not necessary to provide affirmative inline validation (such as green checkmarks) for all fields, but you should consider them for places where correctness is particularly critical, such as when users create a password.

**Remember that autocomplete fields create a risk of false positives.** So don’t make it painful for users to type something out on their own. Users often have a better idea of what they’re looking for better than your autocomplete algorithm does.

##Error states

**Think about why a user might enter an invalid value, and which invalid values might be common.** This should inform how you write the label, helper text, and error text.

**Error text should be descriptive.** Tell the user what caused the error and how to correct it.

**Conditional error text (i.e., based on the invalid value that the user enters) is awesome.**

**Combine the error text with an icon for additional visual emphasis.** It’s important that the choice of this icon makes sense in the context of the icons used for success states and warning states. A recommended set is a check mark for success, an exclamation mark for warnings, and a “no” icon for errors.

**Inline error messaging should be combined with page-level error messaging.** This is important for accessibility. If someone is using a screenreader to navigate the page, a digest of errors at the top of the page will help them understand which fields need fixing. Including anchor links to the invalid fields will allow them to fix the error without re-navigating the entire page. 

**To reiterate the above, marking invalid fields with a bright red border is of no use to users with vision disabilities.**


##Success states

**Inline validation of the fields that a user is filling out will provide a sense of efficacy while filling out the form.** It’s not necessary, but you’ll probably find that users enjoy the experience more when they’re reminded that they’re doing things correctly.

**The user should know that they’ve submitted the form successfully.** So tell them with a success page. And then send a follow up email, which can be pretty much identical to your success page.

**This is your moment to provide next steps.** Direct the user to what they should do next. 


##Recommendations for specific field types and field sets

**Radio buttons or select menus should be used when the system will only permit one of the available values.** This is often necessary as a back-end or business requirement, but be careful about the plausibility that the real answer is “both” or “neither.”

**Avoid multi-selectors whenever possible.** Fewer options should be represented as checkboxes or radio buttons. If you have dozens of options, find a way to group them into a set of simpler choices through which the user can drill down to their final choice.

**Make the text-entry box the size of the expected text entry string.** If a field requires a ten-digit number, the field should be ten characters wide.

**Options within a form element should be listed in alphabetical order unless there is a strong and specific reason not to do so.**

**Consider internationalization issues.** If the form should only be completed by US residents, then it’s ok for the form to only accept ZIP codes and US phone numbers; forms that might be used by people from other countries, such as servicemembers stationed overseas, should consider a wider range of postal codes and telephone country codes.


##Considerations for mobile

**Your form fields and buttons probably need to be bigger.** The rules of thumb from the major OS UI guidelines range slightly: Nokia recommends that all tappable elements should be at a minimum of 28 x 28 pixels, Apple recommends a minimum of 44 x 44 pixels wide. Ultimately the easier things are to tap on, the easier it will be for users to fill out your form. So make them bigger.

**You need to demo your form on an actual phone in order to test how it feels.** Viewing a jpeg of the interface on your Blackberry is a good start. Demoing on less outdated devices is also important.

**Placing labels to the left of form fields is harder on mobile phones.** For this reason, our form templates respond to mobile by placing labels above the fields.

**For longer forms, include functionality to save and continue later.** And note that your users are likely to continue later on a different device, such as a desktop computer.

**Specify “url” “email” and “number” input types and your users will thank you thank you thank you.** It is so wonderful when an website asks for your PIN and the number keypad pops up instead of the alphabet. It’s also really easy to implement.

 



 



