const offerType = document.querySelectorAll('[data-offer]');
const divTraining = document.querySelector('.offer__description-training');
const divDiet = document.querySelector('.offer__description-diet');
const divPersonal = document.querySelector('.offer__description-personal');
const btnTraining = document.querySelector('.offer__close-training');
const btnDiet = document.querySelector('.offer__close-diet');
const btnPersonal = document.querySelector('.offer__close-personal');
const offerTypeTitle = document.querySelector('.offer__type');

function hiddenElement() {
    offerTypeTitle.classList.add('offer__type--hidden');
}
function removeClass() {
    offerTypeTitle.classList.remove('offer__type--hidden');
}

offerType.forEach(element => element.addEventListener('click', function () {
    if (element.classList.contains('offer__training')) {
        divTraining.classList.toggle('offer__description-training--hidden');
        hiddenElement();

    } else if (element.classList.contains('offer__diet')) {
        divDiet.classList.toggle('offer__description-diet--hidden');
        hiddenElement();
    } else {
        divPersonal.classList.toggle('offer__description-personal--hidden');
        hiddenElement();
    }
}));

btnTraining.addEventListener('click', () => {
    divTraining.classList.add('offer__description-training--hidden');
    removeClass();
})
btnDiet.addEventListener('click', () => {
    divDiet.classList.add('offer__description-diet--hidden');
    removeClass();
})
btnPersonal.addEventListener('click', () => {
    divPersonal.classList.add('offer__description-personal--hidden');
    removeClass();
})


