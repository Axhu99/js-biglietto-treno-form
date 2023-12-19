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

const button = document.getElementById('button');
const inputName = document.getElementById('user-name');
const inputKms = document.querySelector('.kms');
const inputAge = document.getElementById('selectage');
const priceForKms = 0.21;
let userName;
let userKms;

button.addEventListener('click', function () {
    
    // prendiamo i dati inseriti dall'utente
    userName = inputName.value;
    userKms = parseInt(inputKms.value);
    const userAge = inputAge.value

    // il prezzo del biglietto
    let realprice = userKms * priceForKms;
    
    if (userAge === 'minorenne'){
        realprice *= 0.8;
    } else if (userAge === 'over'){
        realprice *= 0.6
    }

})