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
});
