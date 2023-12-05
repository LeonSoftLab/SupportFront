let sections = document.getElementsByClassName('section');

// Функция для скрытия всех секций
function hideAllSections() {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
}

function showSection(id) {
    let sections = document.querySelectorAll('.section');
    for(let i=0; i<sections.length; i++) {
        if(sections[i].id === id) {
            sections[i].style.display = 'block';
        } else {
            sections[i].style.display = 'none';
        }
    }
}

function navItemClick(idSection) {
    let navElement = this.event.target.parentElement;
    let NavbarNavElement = navElement.parentElement;
    if (NavbarNavElement) {
        let liElements = NavbarNavElement.querySelectorAll('li');
        liElements.forEach(function(liElement) {
            liElement.classList.remove('active');
            });
    }
    navElement.classList.add('active');
    showSection(idSection)
}

// Добавляем обработчики событий для элементов меню
let menuItems = document.querySelectorAll('.navbar li a');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(event) {
        event.preventDefault();
        let id = this.getAttribute('href').substring(1);
        hideAllSections();
        showSection(id);
        if (id === 'tickets') {
            showAllTicketsHandler();
        }
    });
}

// Отображаем секцию тикетов по умолчанию при загрузке страницы
hideAllSections();
showSection("news");