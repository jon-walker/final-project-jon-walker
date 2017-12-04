$(document).ready(function () {
    // Full Calendar
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyAxYa0npzhJwaqSlGmDL4kc2tLRnfNmjGA',
        events: {
            googleCalendarId: 'obsqr2i4s2im3eukk3o9j0enc8@group.calendar.google.com',
            className: 'gcal-event'
        },
        defaultView: 'agendaDay',
        minTime: '15:00:00',
        maxTime: '22:00:00'
    });

    // Input Masking Ensures Correct Fomat for Telephone Number
    $('.tel-helper').inputmask({'mask': '(999) 999-9999'});

    // CUSTOM JQUERY FUNCTION - PHONE INFO BUTTON
    $('#phoneIcon').on('click', function () {
        $('body').append(
            '<div id="modalWindow" class="darken"><aside class="modal"><h3>Phone</h3><p>904-555-5555</p><button id="close" class="button">Close</button></aside></div>'
        );

        // Create listener for Close button
        $('#close').on('click', function () {
            $('#modalWindow').remove();
        });
    });

    // CUSTOM JQUERY FUNCTION - LOCATION INFO BUTTON
    $('#locationIcon').on('click', function () {
        $('body').append(
            '<div id="modalWindow" class="darken"><aside class="modal"><h3>Locations</h3><p>501 Gator Way</p><button id="close" class="button">Close</button></aside></div>'
        );

        // Create listener for Close button
        $('#close').on('click', function () {
            $('#modalWindow').remove();
        });
    });

    // CUSTOM JQUERY FUNCTION - HOURS INFO BUTTON
    $('#hoursIcon').on('click', function () {
        $('body').append(
            '<div id="modalWindow" class="darken"><aside class="modal"><h3>Hours</h3><ul><li>Mon: 3&ndash;10 </li><li>Tues: 3&ndash;10 </li><li>Wed: 3&ndash;10 </li><li>Th: 3&ndash;10 </li><li>Fri: 3&ndash;10 </li></ul><button id="close" class="button">Close</button></aside></div>'
        );

        // Create listener for Close button
        $('#close').on('click', function () {
            $('#modalWindow').remove();
        });
    });
});

// CUSTOM JAVASCRIPT

// FUNCTION TO ADD/REMOVE CLASS OF DISPLAY

// Get figures
var figures = document.querySelectorAll('figure');

// Create a loop that adds event listeners to all figures on page.
for (var i = 0; i < figures.length; i++) {
    // Add event handler to listen for a click and run a function.
    figures[i].addEventListener('click', function () {
        var figcaption = this.getElementsByTagName('figcaption');
        figcaption[0].classList.toggle('display');
    });
}
