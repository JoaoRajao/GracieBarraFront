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
        editable: true,
        selectable: true,
        select: function(info) {
            openEventModal('add', info);
        },
        eventClick: function(info) {
            openEventModal('edit', info.event);
        }
    });
    calendar.render();

    var modal = document.getElementById('eventModal');
    var form = document.getElementById('eventForm');
    var addEventBtn = document.getElementById('addEvent');
    var cancelEventBtn = document.getElementById('cancelEvent');
    var deleteEventBtn = document.getElementById('deleteEvent');

    addEventBtn.addEventListener('click', function() {
        openEventModal('add');
    });

    cancelEventBtn.addEventListener('click', closeEventModal);

    deleteEventBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja excluir este treino?')) {
            var eventId = form.dataset.eventId;
            var event = calendar.getEventById(eventId);
            if (event) {
                event.remove();
            }
            closeEventModal();
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var title = document.getElementById('eventTitle').value;
        var start = document.getElementById('eventStart').value;
        var end = document.getElementById('eventEnd').value;
        var color = document.getElementById('eventColor').value;

        if (form.dataset.mode === 'add') {
            calendar.addEvent({
                title: title,
                start: start,
                end: end,
                color: color
            });
        } else if (form.dataset.mode === 'edit') {
            var eventId = form.dataset.eventId;
            var event = calendar.getEventById(eventId);
            if (event) {
                event.remove();
                calendar.addEvent({
                    id: eventId,
                    title: title,
                    start: start,
                    end: end,
                    color: color
                });
            }
        }

        closeEventModal();
    });

    function openEventModal(mode, info) {
        modal.style.display = 'block';
        form.dataset.mode = mode;

        if (mode === 'add') {
            document.getElementById('modalTitle').textContent = 'Adicionar Treino';
            form.reset();
            deleteEventBtn.style.display = 'none';
            if (info) {
                document.getElementById('eventStart').value = info.startStr;
                document.getElementById('eventEnd').value = info.endStr;
            }
        } else if (mode === 'edit') {
            document.getElementById('modalTitle').textContent = 'Editar Treino';
            form.dataset.eventId = info.id;
            document.getElementById('eventTitle').value = info.title;
            document.getElementById('eventStart').value = info.start.toISOString().slice(0, 16);
            document.getElementById('eventEnd').value = info.end ? info.end.toISOString().slice(0, 16) : '';
            document.getElementById('eventColor').value = info.backgroundColor;
            deleteEventBtn.style.display = 'inline-block';
        }
    }

    function closeEventModal() {
        modal.style.display = 'none';
    }
});