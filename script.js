document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const eventSelected = document.getElementById('event').value;
    
    if(name) {
        addParticipant(eventSelected, name);
        document.getElementById('registrationForm').reset();
    }
});

function addParticipant(event, name) {
    const eventList = document.getElementById(`${event}List`).querySelector('ul');
    const listItem = document.createElement('li');
    listItem.textContent = name;
    eventList.appendChild(listItem);
}