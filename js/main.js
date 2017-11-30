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
});
