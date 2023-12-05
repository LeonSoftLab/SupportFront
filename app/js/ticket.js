function $(x) {return document.getElementById(x);}

class Task {
    constructor(id, createDate, name, status) {
        this.id = id;
        this.createDate = createDate;
        this.name = name;
        this.status = status;
    }
}

let dataService = {
    url: "http://127.0.0.1:8000/testdata",

    get allTasks() {
        return fetch(this.url)
            .then(response => response.json())
            .then(json => this.mapArray(json))
    },

    add(task) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify({ id: task.id, createDate: task.createDate, name: task.name, status: task.status})
        })
        .then(response => response.json());
    },

    mapArray(array) {
        return array.map(element => {
            return {
                id: element.id,
                createDate: element.createDate,
                name: element.name,
                status: element.status
            }
        })
    }
}

class TasksListView {
    element;
    dataService;

    constructor(element) {
        this.element = element;
        dataService = dataService;
    }

    #drawList(tasksElements) {
        this.element.innerHTML = "";

        tasksElements.forEach(taskElement => {
            taskElement.createIn(this.element);
        });
    }

    drawAll() {
        let taskElements = [];
        dataService.allTasks.then(tasks => {
            if (tasks.length == 0) return;

            tasks.forEach(task => {
                taskElements.push(new TaskView(task))
            });
            this.#drawList(taskElements);
        });
    }
}

class TaskView {
    constructor(task) {
        this.task = task;
        this.row = null;
    }

    createIn(body) {
        this.row = body.insertRow();
        this.row.insertCell().innerText = this.task.id;
        this.row.insertCell().innerText = this.task.createDate;
        this.row.insertCell().innerText = this.task.name;
        this.row.insertCell().innerText = this.task.status;
    }
}

// let addTaskButton = document.querySelector("#add-ticket-btn");
// определяем элементы на странице и привязываем функции на события
let showAllButton = $('show-alltickets-btn');
let tasksTable = $('tickets-table').getElementsByTagName('tbody')[0];
let newTicketFormModal = $('newTicketModal');

let tasksListView = new TasksListView(tasksTable);

showAllButton.addEventListener("click", showAllTicketsHandler);

window.addEventListener("load", function () {
    showAllTicketsHandler();
});

function showAllTicketsHandler() {
    tasksListView.drawAll();
}

$('searchTickets').addEventListener('input', function(e) {
    let searchTerm = e.target.value;
    console.log(searchTerm)
});

$('newTicketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let ticketTitle = $('ticketTitle').value;
    let ticketDescription = $('ticketDescription').value;
    // Отправка нового тикета
});

$('add-ticket-btn').addEventListener('click', function() {
    $('newTicketModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    $('newTicketModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == newTicketFormModal) {
        newTicketFormModal.style.display = 'none';
    }
});