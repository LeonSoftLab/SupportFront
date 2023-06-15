document.getElementById('searchTickets').addEventListener('input', function(e) {
    var searchTerm = e.target.value;
    // Поиск тикетов
});

document.getElementById('newTicketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var ticketTitle = document.getElementById('ticketTitle').value;
    var ticketDescription = document.getElementById('ticketDescription').value;

    // Отправка нового тикета
});

// Тестовые данные
var tickets = [
    { number: 1, created: '01.05.2023 08:15:50', title: 'Тикет 1', status: 'Закрыт' },
    { number: 2, created: '15.05.2023 12:10:35', title: 'Тикет 2', status: 'В работе' },
    { number: 3, created: '25.05.2023 15:05:25', title: 'Тикет 3', status: 'Открыт' },
];

// Вставляем тикеты в таблицу
function displayTickets() {
    var ticketsTable = document.getElementById('ticketsTable').getElementsByTagName('tbody')[0];
    ticketsTable.innerHTML = ''; // очищаем таблицу
    tickets.forEach(function(ticket) {
        var newRow = ticketsTable.insertRow();
        newRow.insertCell().innerText = ticket.number;
        newRow.insertCell().innerText = ticket.created;
        newRow.insertCell().innerText = ticket.title;
        newRow.insertCell().innerText = ticket.status;
    });
}

document.getElementById('addTicketBtn').addEventListener('click', function() {
    document.getElementById('newTicketModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('newTicketModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('newTicketModal')) {
        document.getElementById('newTicketModal').style.display = 'none';
    }
}