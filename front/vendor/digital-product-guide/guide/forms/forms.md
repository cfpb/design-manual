---
published: true
layout: document
document_label: forms
stage: comment
sponsor: "Ben Guhin, Eduardo Ortiz, Misha Tepper, Mehgan Iulo, David Kennedy"
title: General form guidelines
subtitle: Global considerations when working with forms

---

## Form types

### Embedded short
Embedded short is used for requesting a small amount of information within a page that is primarily non-form content. Examples of a embedded short are a newsletter sign-up module or form elements used to browse available job listings.

### Embedded long
Embedded long is used for requesting a larger number of fields within a page or application, such as Public Data or the Supervision & Examination System (SES). 

### Standalone short
Probably exists 

### Standalone long
Standalone long is used for longer forms that exist on separate pages specific to the form, such as the complaint forms from Consumer Response (CR).

## Individual Form Field Guidelines

* [Checkboxes](checkboxes.html)
* [Radio buttons](radio-buttons.html)
* [Select](select.html)
* [Textfield](textfield.html)
* [Textarea](textarea.html)


## Order and Layout

**The order of the elements in a form is critical for the user understanding the form.** Think of your form as a narrative that you are walking your user through.

**The most important items in any given form should typically be listed first.** This often includes login and contact information like name and email address that can allow the user to come back if they don’t complete the form on the first pass.

**Form elements should be grouped logically.** Similar items (e.g., all things related to identifying an individual financial institution) should be grouped together.

**When your form has a lot of fields, chunk the fields into separate categories.** Those categories can then be divided by either separate headers or accordion-style modules depending on the purpose of the form (non-embedded long vs embedded long)

**If the form stretches over multiple pages, indicate the user’s progress.** A left-hand list of steps/pages is included in the non-embedded long style for this purpose.

**Use progressive disclosure.** If there are sections of the form that are optional, consider using a show/hide mechanism like an accordion module. If something is a followup question (e.g., “If you answered yes to the previous question...”) don’t show it at all until the user has met the condition requiring the follow-up.


## Clarity

**Wherever possible, use clear, concise, standard English.** Avoid jargon.

**Keep labels short and simple.** If a longer label is needed, consider phrasing it as a  question: “How many chucks did the woodchuck chuck?” rather than “Number of chucks chucked by woodchuck”

**Helper text should appear below the text entry field, and provide an example of the correct way to enter text** (“e.g., 100 Main Street, Anytown, USA”). Do not hide this sort of helper text - it should always be visible, even before the user focuses on the form element (some users won’t select a field until they know their answer).

**If the most of the fields are required, leave them alone and just mark the optional fields as optional.** If most of the fields are optional, leave them alone and just mark the required fields as required. If it’s close to a tie, go with whichever choice might be better for your conversion rate.

**Field masking should be used whenever a specific data entry format is required**, as for phone numbers, dates, and social security numbers. Users should not have to guess and check this through validation.

**Where the label goes affects how quickly the user can read the form field.** Keeping labels to the left of the form field is the pattern that tends to work best for clearly indicating which label belongs to which field. To help clarify the association of a label with a form field, provide ample space and visual indication between separate form fields. This will allow the user to quickly scan the text of the labels and easily associate each label with its field. Right-aligning label text can also be helpful, but it also has the negative effect of making labels harder to scan and can lead to very ragged text when translated to different languages.


## Validation

**In an ideal world, the user enters a valid value in all the required fields the first time around.** That should be your goal. (It will require a lot of usability testing to get there.) 

**When possible, check for errors as the user fills out the form** (i.e., using javascript) and provide inline messaging with instructions for how to correct the error. It is not necessary to provide affirmative inline validation (such as green checkmarks) for all fields, but you might consider them for places where correctness is especially critical, such as password creation.

**Remember that autocomplete fields create a risk of false positives.** So don’t make it painful for users to type something out on their own. Oftentimes they have a better idea of what they’re looking for better than your autocomplete algorithm does.


## Error states

**Think about why a user might enter an invalid value, and which invalid values might be common.** This should inform how you write the label, helper text, and error text.

**Error text should be descriptive.** Tell the user what caused the error and how to correct it.

**Conditional error text (i.e., based on the invalid value that the user enters) is awesome.** 

**Combine the error text with an icon for additional visual emphasis.** It’s important that the choice of this icon makes sense in the context of the icons used for success states and warning states. A recommended set is a check mark for success, an exclamation mark for warnings, and a no icon for errors.

**Inline error messaging should be combined with page-level error messaging.** This is for accessibility (i.e., this is really important). If someone is using a screenreader to navigate the page, a digest of errors at the top of the page will help them understand which fields need fixing. Including anchor links to the invalid fields is a nice plus. Overall, marking the invalid fields with a bright red border is of no use to people who can’t see, so it’s your job to make sure that you’re clearly communicating where the errors are and how to fix them.


## Success states

**Inline validation of completed fields gives the user a sense of efficacy while filling out the form.** It’s not necessary, but you’ll probably find that users enjoy the experience more when they’re reminded that they’re doing things correctly.

**The user should know that they’ve submitted the form successfully.** So tell them. And then send a follow up email. It can be pretty much identical to your success page.

**This is your moment to provide next steps.** No one wants to sit their browser on a “Form submitted!” page for more than it takes to read those two words. You need to direct the user to what they should do next. Otherwise it will be Facebook.


## Recommendations for specific field types and field sets

**Radio buttons should be used when the system will only permit one of the available values.** This is often necessary as a back-end requirement, but be careful about the plausibility that the real answer is “both” or “neither.”

**Limit use of multi-selectors to large option sets.** Fewer options should be represented as checkboxes or radio buttons. If you have dozens of options, try to find a way to group them into a set of simpler choices through which the user can drill down to their final choice.

**Make the text-entry box the size of the expected text entry string.**  If a field expects a ten-digit number, the field should be only ten characters wide. 

**Options within a form element should be listed in alphabetical order** unless there is a strong specific reason not to do so. 

**Consider internationalization issues.** If the form should only be completed by US residents, then it’s OK for the form to only accept ZIP codes and US phone numbers; forms that might be used by people from other countries should consider a wider range of postal codes and telephone country codes. 


## Considerations for mobile

**Your form fields and buttons probably need to be bigger.** The rules of thumb from the major OS UI guidelines range slightly: Nokia recommends that all tappable elements should be at a minimum of 28 x 28 pixels, Apple recommends a minimum of 44 x 44 pixels wide. Ultimately the easier things are to select, the easier it’ll be for users to fill out your form. So make them bigger.

**You need to demo your form on an actual phone in order to test how it feels.** Viewing a jpeg of the interface on your Blackberry is a good start. Demoing on less outdated devices is also important.

**The label probably can’t go on the left on mobile phones.** We’ll need to update the style templates accordingly.

**For longer forms, include functionality to save and continue later.** And note that your users are very likely to continue later on a different device, such as a desktop computer.

**Specify “url” “email” and “number” input types and your users will thank you thank you thank you.** It is so wonderful when an website asks for your PIN and that number pad pops to make things easier. It’s also really easy to implement.







