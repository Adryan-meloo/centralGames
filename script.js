addEventListener('scroll',function(){
    let cabecalho = document.querySelector('.navigation');
    cabecalho.classList.toggle('scrollando',window.scrollY > 0);
});
