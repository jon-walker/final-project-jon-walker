# Final Project Part 3 Submission

## Active URL

[Site available here.](http://walkerportfolio.com/project_final3_walker_jon/)

## Custom JavaScript Feature

The programs page is set up to display information about the programs when users click an image. The code essentially listens for a click on a figure. When the click happens it will run a function that gets the figcaption that is the child of the figure and toggles the class name "display" on and off. The "this" keyword is used to ensure that the only the presently clicked figure is changed. The CSS is set to hide or show the figcaption with a few transition styles to make for a better user experience. I also changed the default cursor to a pointer for all figures to subtly indicate that this is an interactive feature of the site. See the effect in action [here](http://walkerportfolio.com/project_final3_walker_jon/programs.html).

## Custom jQuery feature

Each page displays a contact bar to make it easy to access essential information about the business. When users click the icons different information is displayed in a modal window. Each icon has its own code that allows it to work, but the process is similar for all buttons.

For example, to display the phone number. jQuery is used to select elements with a class of ID. Then an event listener is added that listens for click. When clicked a function will append a div to the body with the info. CSS and the natural stacking order make the modal window appear similar to a lightbox effect.

This also adds a close button to the page. It has an event handler tied to it that will remove the elements with the id of "modelWindow" (i.e. - the div that was just added).

## jQuery Plugin Functionality

* Full Calendar - This plugin is used to access and display the schedule of classes on each page. It is integrated with Google Calendar so that it can be updated easily by updating the Google Calendar. I modified it to display just the daily view although the plugin can be used to display the whole month of week.

* Input Masking - This plugin is used on the sign-up form. It ensures that users provide an actual phone number and provides a guide to make sure they use a consistent format that includes area code.

## Validation

* HTML Validation

    * [Home](https://validator.w3.org/nu/?doc=http%3A%2F%2Fwalkerportfolio.com%2Fproject_final_walker_jon%2F)

    * [Programs](https://validator.w3.org/nu/?doc=http%3A%2F%2Fwalkerportfolio.com%2Fproject_final_walker_jon%2Fprograms.html)

    * [Sign Up Page](https://validator.w3.org/nu/?doc=http%3A%2F%2Fwalkerportfolio.com%2Fproject_final_walker_jon%2Fsignup.html)

* [CSS Validation](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fwalkerportfolio.com%2Fproject_final_walker_jon%2Fsignup.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en) Errors come from plugin CSS.

* [HTML Outline](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fwalkerportfolio.com%2Fproject_final_walker_jon%2F)

## Resource Links

* [Full Calendar](https://fullcalendar.io/) - I used this plugin to create the daily schedule on the front page of the site. I also used their documentation to help me with setting up the API key that allowed me to sync a Google Calendar to my site.

* [Designmodo Article](https://designmodo.com/free-jquery-plugins-2016/) - I used this research plugins that might be useful on the site, and it ultimately helped find a good input masking plugin for the contact form.

* [CSS Tricks Article: Input Masking](https://css-tricks.com/input-masking/) - Used to evaluate the quality of the input masking plugin.

* [Input Masking Repo](https://github.com/RobinHerbots/Inputmask) - This is the repository for the input masking jQuery plugin I used.

* [Icomoon](https://icomoon.io/#preview-free) - This is where I got the icons used on the site.

* [W3 Schools CSS Filter Property](https://www.w3schools.com/cssref/css3_pr_filter.asp)

* [jQuery API Reference - empty()](https://api.jquery.com/empty/) - Used for close button on modal window.

* [W3 Schools How To Remove a Class](https://www.w3schools.com/howto/howto_js_remove_class.asp) - I used this to help me build the function that adds and removes the class of display to the figures on the programs page.

* [MDN this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) - Referenced when creating Javascript function to display and hide program info.

* [MDN addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) - Used to create program information pop-ups.

* [MDN classList()](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) - This article led me to use the toggle method when adding and removing a class on the figcaptions.

## Deductions

I reviewed the list of deductions for this project and in the syllabus.

## Comments

Thanks for a great class!
