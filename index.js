const navToggler = document.getElementById('btn');
const nav = document.querySelector('.nav');

navToggler.addEventListener('click',function(){
    navToggler.classList.toggle('open')
    nav.classList.toggle('active');
})

