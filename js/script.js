/* 
    1- chiedere il nome
    2- chiedere i km da fare 
    3- selezionare una fascia di eta'
    4- generare un biglietto con:
        a- il nome
        b- l'offerta(che ci sia o meno)
        c- dati generati casualmente (tipo numero del biglietto)
        d- costo del biglietto
    BONUS
    - fare un tasto annulla 
*/

// Calcola il prezzo del tuo biglietto
const buttonGo = document.getElementById('button-go');
const buttonReturn = document.getElementById('button-return');
const inputName = document.getElementById('user-name');
const inputKms = document.querySelector('.kms');
const inputAge = document.getElementById('select-age');

// Il tuo biglietto
const botMenu = document.querySelector('.bot');
const ticketUserame = document.querySelector('.ticket-username');
const ticketDiscount = document.querySelector('.ticket-discount');
const ticketCart = document.querySelector('.ticket-cart');
const ticketNumber = document.querySelector('.ticket-number');
const ticketPrice = document.querySelector('.ticket-price');
const priceForKms = 0.21;
let userName;
let userKms;
let randomCart;
let randomNumber;

//Utils
const max = 999999;
const min = 100000;
let discount = 'Biglietto Standard'


buttonGo.addEventListener('click', function () {
    
    // prendiamo i dati inseriti dall'utente
    userName = inputName.value;
    userKms = parseInt(inputKms.value);
    const userAge = inputAge.value

    //! Validazione

    if (isNaN(userKms)){
        alert('Devi il numero di KM!');
        return;
    }else if (userAge === 'no-select' || userAge === ''){
        alert('Devi selezionare un eta\'!')
        return;
    }

    // mostriamo il biglietto
    botMenu.classList.remove('d-none');

    // numero carrozza
    randomCart = Math.floor(Math.random() * 15) + 1;

    // numero biglietto
    randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;

    // il prezzo del biglietto
    let realprice = userKms * priceForKms;
    
    if (userAge === 'minorenne'){
        realprice *= 0.8;
        discount = 'Biglietto per minorenni'
    } else if (userAge === 'over'){
        realprice *= 0.6
        discount = 'Biglietto per over 65'
    }

    ticketUserame.innerText = userName;
    ticketDiscount.innerText = discount;
    ticketCart.innerText = randomCart;
    ticketNumber.innerText = randomNumber;
    ticketPrice.innerText = realprice;
})

buttonReturn.addEventListener('click', function (){
    inputName.value = '';
    inputKms.value = '';
    inputAge.value = '';
    botMenu.classList.add('d-none');
})