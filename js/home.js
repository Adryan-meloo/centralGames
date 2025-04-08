// Variáveis
let indexCard = 0;
handlerCards(indexCard);
let iconMobile = document.querySelector('.mobile-menu-icon');
let menuMobile = document.querySelector('.mobile-menu');
let imgMobile = document.querySelector('.icon');


//listCards[indexCard].style.display = "flex";

function handlerCards(value) {
    indexCard += value;
    let listCards = document.getElementsByClassName("card-item");
    if (indexCard < 0) {
        indexCard = listCards.length-1;
    }
    if (indexCard > listCards.length) {
        indexCard = 0;
    }
    for (i = 0; i < listCards.length; i++) {
        listCards[i].style.display = "none";
    }

    listCards[indexCard].style.display = 'flex';
    console.log(indexCard);
}



//funções



//Escutadores

addEventListener('scroll', function () {
    let cabecalho = document.querySelector('.navigation');
    cabecalho.classList.toggle('scrollando', window.scrollY > 0);
});

iconMobile.addEventListener('click', function () {
    if (menuMobile.style.display == 'none') {
        menuMobile.style.display = 'block';
        imgMobile.src = 'img/x.png'
    } else {
        menuMobile.style.display = 'none';
        imgMobile.src = 'img/menu-mobile.png'
    }
});








