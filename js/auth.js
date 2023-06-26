let authModal = document.getElementById('authModal');
let authButton = document.getElementById('authButton');
let closeButton = document.getElementsByClassName('close')[1];

authButton.addEventListener('click', function() {
    authModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    authModal.style.display = 'none';
});

document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Авторизация
});

window.addEventListener('click', function(event) {
    if (event.target == authModal) {
        authModal.style.display = 'none';
    }
});