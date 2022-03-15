const BACK = document.getElementById('backProject');
const MODAL = document.getElementById('modal');
const OVERLAYMODAL = document.getElementById('overlayModal');
const CLOSE = document.getElementById('modalClose');
const MODALITEM = document.getElementsByClassName('modal__item');
const CIRCLE = document.getElementsByClassName('modal__itemTopTitleCircleInner');
const HR = document.getElementsByClassName('modalHr');
const BOTTOM = document.getElementsByClassName('modal__itemBottom');
const REWARD25 = document.getElementById('reward25');
const REWARD75 = document.getElementById('reward75');
const GATHEREDAMOUNT = document.getElementById('gathered');
let GATHAM = 89914;
const BACKERS = document.getElementById('backers');
let BACKAM = 5007;
const SLIDER = document.getElementById('slider');
const MODALCOMPLETE = document.getElementById('modalComplete');
const MODALCOMPLETEBTN = document.getElementById('modalCompleteBtn');



setAmounts(GATHAM, BACKAM);


document.querySelectorAll('.modal__item')
.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.pledgeBorder').classList.remove('pledgeBorder');
        element.classList.toggle('pledgeBorder');   
        document.querySelector('.showCircle').classList.remove('showCircle');
        checkedModal();
    })
})


BACK.addEventListener('click', () => {
    toggleModal();
});

CLOSE.addEventListener('click', () => {
    toggleModal();
})

REWARD25.addEventListener('click', () => {
    toggleModal25();
})

REWARD75.addEventListener('click', () => {
    toggleModal75();
})

MODALCOMPLETEBTN.addEventListener('click', () => {
    toggleModalComplete();
})


document.querySelectorAll('.modal__itemBottomBtnsInput')
.forEach(element => {
    element.addEventListener('blur', () => {
        let VALUE = Number(element.value);

        document.querySelectorAll('.modal__itemBottomBtnsContinue')
        .forEach(item => {
            item.addEventListener('click', () => {
                calculate(VALUE);
                toggleModal();
                toggleModalComplete();
            })
        })
    })
})


// Functions

function setAmounts (GATHAM, BACKAM) {
    GATHEREDAMOUNT.innerHTML = "$" + `${GATHAM.toLocaleString('en-US')}`;
    BACKERS.innerHTML = `${BACKAM.toLocaleString('en-US')}`;
    SLIDER.style.width = (GATHAM/1000).toFixed(2) + "%";
}

function calculate(VALUE) {
    if(VALUE > 0) {
        GATHAM = GATHAM + VALUE;
        BACKAM ++;

        setAmounts(GATHAM, BACKAM);

    }
}

function checkedModal () {
    if (MODALITEM[0].classList.contains('pledgeBorder')) {
        CIRCLE[0].classList.add('showCircle');
        HR[0].classList.add('showHr');
        BOTTOM[0].classList.add('showBottom');
        CIRCLE[1].classList.remove('showCircle');
        HR[1].classList.remove('showHr');
        BOTTOM[1].classList.remove('showBottom');
        CIRCLE[2].classList.remove('showCircle');
        HR[2].classList.remove('showHr');
        BOTTOM[2].classList.remove('showBottom');
    }
    else if(MODALITEM[1].classList.contains('pledgeBorder')) {
        CIRCLE[0].classList.remove('showCircle');
        HR[0].classList.remove('showHr');
        BOTTOM[0].classList.remove('showBottom');
        CIRCLE[1].classList.add('showCircle');
        HR[1].classList.add('showHr');
        BOTTOM[1].classList.add('showBottom');
        CIRCLE[2].classList.remove('showCircle');
        HR[2].classList.remove('showHr');
        BOTTOM[2].classList.remove('showBottom');
    }
    
    else if(MODALITEM[2].classList.contains('pledgeBorder')) {
        CIRCLE[0].classList.remove('showCircle');
        HR[0].classList.remove('showHr');
        BOTTOM[0].classList.remove('showBottom');
        CIRCLE[1].classList.remove('showCircle');
        HR[1].classList.remove('showHr');
        BOTTOM[1].classList.remove('showBottom');
        CIRCLE[2].classList.add('showCircle');
        HR[2].classList.add('showHr');
        BOTTOM[2].classList.add('showBottom');
    }
}

function toggleModal() {
    MODAL.classList.toggle('showModal');
    OVERLAYMODAL.classList.toggle('showOverlay');
    document.body.classList.toggle('overflowHide');
}

function toggleModal25() {
    MODAL.classList.toggle('showModal');
    OVERLAYMODAL.classList.toggle('showOverlay');
    MODALITEM[0].classList.remove('pledgeBorder');
    CIRCLE[0].classList.remove('showCircle');
    HR[0].classList.remove('showHr');
    BOTTOM[0].classList.remove('showBottom');
    MODALITEM[1].classList.add('pledgeBorder');
    CIRCLE[1].classList.add('showCircle');
    HR[1].classList.add('showHr');
    BOTTOM[1].classList.add('showBottom');
    MODALITEM[2].classList.remove('pledgeBorder');
    CIRCLE[2].classList.remove('showCircle');
    HR[2].classList.remove('showHr');
    BOTTOM[2].classList.remove('showBottom');
    document.body.classList.toggle('overflowHide');
}

function toggleModal75() {
    MODAL.classList.toggle('showModal');
    OVERLAYMODAL.classList.toggle('showOverlay');
    MODALITEM[0].classList.remove('pledgeBorder');
    CIRCLE[0].classList.remove('showCircle');
    HR[0].classList.remove('showHr');
    BOTTOM[0].classList.remove('showBottom');
    MODALITEM[1].classList.remove('pledgeBorder');
    CIRCLE[1].classList.remove('showCircle');
    HR[1].classList.remove('showHr');
    BOTTOM[1].classList.remove('showBottom');
    MODALITEM[2].classList.add('pledgeBorder');
    CIRCLE[2].classList.add('showCircle');
    HR[2].classList.add('showHr');
    BOTTOM[2].classList.add('showBottom');
    document.body.classList.toggle('overflowHide');
}

function toggleModalComplete() {
    MODALCOMPLETE.classList.toggle('showModalComplete');
    OVERLAYMODAL.classList.toggle('showOverlay');
    document.body.classList.toggle('overflowHide');
}