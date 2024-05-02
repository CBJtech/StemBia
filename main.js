// HAMBURGER MENU
const show = document.getElementById('show');
const hide = document.getElementById('hide');
const nav = document.querySelector('nav');
let logo1 = document.getElementById('logo1')
hide.style.display = 'none';
show.addEventListener('click', function(){
    nav.style.display = 'block';
    logo1.style.display = 'none'
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.width = '100%'
    hide.style.display = 'block';
    show.style.display = 'none';

})

hide.addEventListener('click', function(){
    nav.style.display = 'none';
    hide.style.display = 'none';
    show.style.display = 'block';

})