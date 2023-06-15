var authModal = document.getElementById('authModal');
var authButton = document.getElementById('authButton');
var closeButton = document.getElementsByClassName('close')[1];

authButton.addEventListener('click', function() {
    authModal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    authModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == authModal) {
        authModal.style.display = 'none';
    }
});

document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Авторизация
});