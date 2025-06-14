/*
El script usa querySelector, lo que implica que tengo que agregar una 
class, en este caso .header para que se guarde en la const header
intento cambiar por getElementById para no tener el duplicado
header
    .header {
    }
en el css

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});

funcionó, great!

*/

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});