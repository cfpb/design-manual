---
published: true
layout: document
document_label: expandables
stage: draft
css: "expandables-example"
js: "expandables"
sponsor: "Jen Ehlers, Adam Scott, John Yuda"
title: Expandables
subtitle: Expandables styling and usage

---
## When to use

- When a page has large amounts of supplementary/secondary information that a user may be interested in but doesn't need to see to have a general understanding of the content
- To bring organization and order to long forms
- To reduce the footprint of long, hierarchical lists

Remember that ctrl-F will not find information that is hidden by a collapsed expandable, so use good judgement in deciding which information is appropriate to hide.

## Default state

The default state (expanded vs. collapsed) will depend on the circumstance.

Non-javascript users should default to an expanded state. Depending on the specific situation, that expanded state may be presented as footnotes.

## When using expandables

- The header should be a logical, clear indication of what the user will see when the expandable is expanded, but should not be a call to action in most cases
- The whole row must be actionable OR an icon must be accompanied by show/hide label (both is ideal)
- The header should be addressable by the keyboard to ensure keyboard users can open the expandable
- If space does not allow label should be shown via tool tip
- Expand icon should always be inside the circle.

## Visual style options:

1. Blue link + expand icon
2. Colored bar (default light gray) + expand icon and label (if space allows)

## Example

<div class="expandable expandable">
    <header class="expandable-header">
        <h4>Expandable Header</h4>
        <a href="#" class="expandable-button"><span class="expandable-text">Show</span></a>
    </header>

    <div class="expandable-content expandable-hidden">
        <p>Climb leg chase mice so missing until dinner time and hate dog stand in front of the computer screen mark territory intently stare at the same spot. Why must they do that find something else more interesting or behind the couch. Destroy couch burrow under covers and run in circles for leave dead animals as gifts. Under the bed climb leg so attack feet yet burrow under covers chew foot. Under the bed hunt anything that moves so play time rub face on everything for claw drapes yet hide when guests come over. Behind the couch under the bed. Chase imaginary bugs play time hide when guests come over all of a sudden go crazy or make muffins, for stretch. Leave hair everywhere cat snacks behind the couch so rub face on everything for hopped up on goofballs. Stare at ceiling inspect anything brought into the house and nap all day so under the bed yet why must they do that swat at dog. Claw drapes throwup on your pillow play time. Give attitude under the bed make muffins stick butt in face rub face on everything chew iPad power cord, yet sleep on keyboard. Chew foot under the bed yet hide when guests come over. Why must they do that flop over intrigued by the shower inspect anything brought into the house throwup on your pillow. Intrigued by the shower lick butt. Chase mice throwup on your pillow and inspect anything brought into the house stick butt in face. Swat at dog. Under the bed run in circles, and shake treat bag so all of a sudden go crazy for hunt anything that moves stare at ceiling. Swat at dog. All of a sudden go crazy inspect anything brought into the house for use lap as chair or why must they do that. Throwup on your pillow behind the couch so sleep on keyboard. Claw drapes chase mice chase mice hopped up on goofballs behind the couch for sweet beast. Attack feet. </p>
    </div>
</div>




## Related elements 
[Buttons](https://github.cfpb.gov/pages/nicholasw/digital-product-guide/guide/common-web-elements/buttons.html)

[Tabs](https://github.cfpb.gov/pages/nicholasw/digital-product-guide/guide/common-web-elements/tabs.html)
