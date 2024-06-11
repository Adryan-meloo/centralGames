addEventListener('scroll',function(){
    let cabecalho = document.querySelector('.navigation');
    cabecalho.classList.toggle('scrollando',window.scrollY > 0);
});

let iconMobile = document.querySelector('.mobile-menu-icon');
let menuMobile = document.querySelector('.mobile-menu');
let imgMobile = document.querySelector('.icon');



iconMobile.addEventListener('click',function(){
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'block';
        imgMobile.src = 'img/x.png'
        console.log('oi')
    }else{
        menuMobile.style.display = 'none';
        imgMobile.src = 'img/menu-mobile.png'
    }
});

let gta = document.querySelector('#goGta');
let cs = document.querySelector('#goCs');
let lol = document.querySelector('#goLol');



gta.addEventListener('click',function(){

    window.location.href = 'https://www.rockstargames.com/br/games/sanandreas';
});

cs.addEventListener('click',function(){
    window.location.href = 'https://store.steampowered.com/app/730/CounterStrike_2/?l=portuguese';
});

lol.addEventListener('click',function(){
    window.location.href = 'https://signup.leagueoflegends.com/pt-br/signup/redownload';
});