// Get form elements
const form = document.getElementById('add-event-form');
const eventNameInput = document.getElementById('event-name');
const eventDateInput = document.getElementById('event-date');
const eventDescriptionInput = document.getElementById('event-description');
const addEventBtn = document.getElementById('add-event-btn');
const eventsContainer = document.getElementById('events-container');

let currentEditId = null;

// Load events from local storage
const storedEvents = localStorage.getItem('events');
if (storedEvents) {
    const events = JSON.parse(storedEvents);
    events.forEach((event) => {
        addEventToContainer(event);
    });
}

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = eventNameInput.value;
    const eventDate = eventDateInput.value;
    const eventDescription = eventDescriptionInput.value;
    const event = { id: currentEditId || new Date().getTime(), name: eventName, date: eventDate, description: eventDescription };

    if (currentEditId) {
        updateEventInLocalStorage(event);
    } else {
        addEventToLocalStorage(event);
    }

    addEventToContainer(event, true);
    form.reset();
    currentEditId = null;
});

// Add event to container
function addEventToContainer(event, isNew = false) {
    let eventElement = document.querySelector(`[data-id="${event.id}"]`);

    if (!eventElement) {
        eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.setAttribute('data-id', event.id);
        eventsContainer.appendChild(eventElement);
    }

    eventElement.innerHTML = `
        <span>Name:</span> <span>${event.name}</span> <br>
        <span>Date:</span> <span>${event.date}</span><br>
        <span>Description:</span> <span>${event.description}</span><br>
        <button class="delete-btn">Delete</button>
        <button class="edit-btn">Edit</button>
        <input type="checkbox">
    `;

    if (isNew) {
        eventElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event to local storage
function addEventToLocalStorage(event) {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
        const events = JSON.parse(storedEvents);
        events.push(event);
        localStorage.setItem('events', JSON.stringify(events));
    } else {
        localStorage.setItem('events', JSON.stringify([event]));
    }
}

// Update event in local storage
function updateEventInLocalStorage(updatedEvent) {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
        let events = JSON.parse(storedEvents);
        events = events.map(event => event.id === updatedEvent.id ? updatedEvent : event);
        localStorage.setItem('events', JSON.stringify(events));
    }
}

// Add event listener to container for delete and edit buttons
eventsContainer.addEventListener('click', (e) => {
    const eventElement = e.target.closest('.event');
    const eventId = eventElement.getAttribute('data-id');

    if (e.target.classList.contains('delete-btn')) {
        removeEventFromLocalStorage(eventId);
        eventElement.remove();
    } else if (e.target.classList.contains('edit-btn')) {
        const storedEvents = localStorage.getItem('events');
        if (storedEvents) {
            const events = JSON.parse(storedEvents);
            const eventToEdit = events.find(event => event.id == eventId);
            if (eventToEdit) {
                eventNameInput.value = eventToEdit.name;
                eventDateInput.value = eventToEdit.date;
                eventDescriptionInput.value = eventToEdit.description;
                currentEditId = eventToEdit.id;
            }
        }
    }
});

// Remove event from local storage
function removeEventFromLocalStorage(eventId) {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
        const events = JSON.parse(storedEvents);
        const updatedEvents = events.filter(event => event.id != eventId);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    }
}
