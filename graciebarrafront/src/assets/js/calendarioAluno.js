document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [], 
        eventClick: function(info) {
            alert('Evento: ' + info.event.title + '\nInício: ' + info.event.start.toLocaleString() + '\nFim: ' + (info.event.end ? info.event.end.toLocaleString() : 'Não especificado'));
        }
    });
    calendar.render();

    fetch('eventos.json')
        .then(response => response.json())
        .then(data => {
            calendar.addEventSource(data);
        })
        .catch(error => console.error('Error loading event data:', error));
});