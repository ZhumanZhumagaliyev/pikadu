let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');


menuToggle.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('visible');
});



let searchToggle = document.querySelector('#search-toggle');
let inputGroup = document.querySelector('.input-group');


searchToggle.addEventListener('click', function (event) {
    event.preventDefault();
    inputGroup.classList.toggle('visible');
})
