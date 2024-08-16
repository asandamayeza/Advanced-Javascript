// Get form elements
const form = document.getElementById('add-event-form');
const eventNameInput = document.getElementById('event-name');
const eventDateInput = document.getElementById('event-date');
const eventDescriptionInput = document.getElementById('event-description');
const addEventBtn = document.getElementById('add-event-btn');
const eventsContainer = document.getElementById('events-container');

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
    const event = { name: eventName, date: eventDate, description: eventDescription };
    addEventToContainer(event);
    addEventToLocalStorage(event);
    form.reset();
});

// Add event to container

function addEventToContainer(event) {
    const eventElement = document.createElement('div');
    eventElement.className = 'event';
    eventElement.innerHTML = `
		<span>Name:</span> <span>${event.name}</span> <br></br>
		<span>Date:</span> <span>${event.date}</span><br></br>
        <span>Description:</span> <span>${event.description}</span>

		<button>Delete</button>
        <button class = "edit-btn" data-id= "${event.id}">Edit</button>
		<input type="checkbox">
	`;
    eventsContainer.appendChild(eventElement);
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

// Add event listener to delete button
eventsContainer.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const eventElement = e.target.parentNode;
		const eventName = eventElement.querySelector('span:nth-child(2)').textContent;
		removeEventFromLocalStorage(eventName);
		eventElement.remove();
	}
});
function handleEditButton (event){
    const eventId = e.target.getAttributes('data-id')
    const eventEdit = event.find(e=> e.id== eventId)
    if (eventEdit){
      eventNameInput.value = eventEdit.title;
      eventDateInput.value = eventEdit.date;
      addEventBtn.setAttribute('data-id',eventEdit.id)

    }
}





// Remove event from local storage
function removeEventFromLocalStorage(eventName) {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
        const events = JSON.parse(storedEvents);
        const index = events.findIndex((event) => event.name === eventName);
        if (index !== -1) {
            events.splice(index, 1);
            localStorage.setItem('events', JSON.stringify(events));
        }
    }
}