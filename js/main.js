let sections = document.getElementsByClassName('section');

// Функция для скрытия всех секций
function hideAllSections() {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }
}

function showSection(id) {
    // Проходимся по всем секциям
    const sections = document.querySelectorAll('.section');
    for(let i=0; i<sections.length; i++) {
        // Если id секции совпадает с переданным id, то показываем секцию, иначе скрываем
        if(sections[i].id === id) {
            sections[i].style.display = 'block';
        } else {
            sections[i].style.display = 'none';
        }
    }
}

// Добавляем обработчики событий для элементов меню
let menuItems = document.querySelectorAll('.menu a');
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