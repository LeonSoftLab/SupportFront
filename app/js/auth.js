function $(x) {return document.getElementById(x);}

let authModal = $('authModal');
let authButton = $('authButton');
let closeButton = authModal.querySelector('span.close');

authButton.addEventListener('click', function() {
    authModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    authModal.style.display = 'none';
});

$('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Авторизация
});

window.addEventListener('click', function(event) {
    if (event.target == authModal) {
        authModal.style.display = 'none';
    }
});