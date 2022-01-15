let tb = document.getElementById('testBtn');

let cont = document.getElementById('container');
let swiper = document.getElementById('swiper');

let sett = document.getElementById('settingsPanel');
let settBack = document.getElementById('spBack');

let mainEmoji = document.getElementById('mainEmoji');
let mainTitle = document.getElementById('mainTitle');
let mainStatus = document.getElementById('mainStatus');

let overviewTB = document.getElementById('overviewCTB');
let statusTB = document.getElementById('statusCTB');

let emojiPicker = document.getElementById('emojiRadio');

let body = document.body;

function showSettings(obj) {
    if (cont.classList.contains('unfocused')){
    cont.classList.remove('unfocused');
    sett.style.display = "none";
    settBack.style.display = "none";
    } else {
        cont.classList.add('unfocused');
        sett.style.display = "flex";
        settBack.style.display = "flex";
    }
}

settBack.onclick = function() {
    showSettings();
}

function emojiPickerFn(obj) {
    localStorage.setItem('emojiLS', obj.getAttribute('data-emName'));
}

function finishBtn(obj) {
    mainEmoji.innerHTML = localStorage.getItem('emojiLS');
    mainTitle.innerHTML = overviewTB.value;
    mainStatus.innerHTML = statusTB.value;
    cont.style.backgroundColor = localStorage.getItem('colorMainLS');
    swiper.style.background = "linear-gradient(90deg, " + localStorage.getItem('colorSwiperLS') + ", transparent)";

    localStorage.setItem('titleLS', overviewTB.value);
    localStorage.setItem('statusLS', statusTB.value);

    showSettings();
}

window.onload = function () {
    mainEmoji.innerHTML = localStorage.getItem('emojiLS');
    mainTitle.innerHTML = localStorage.getItem('titleLS');
    mainStatus.innerHTML = localStorage.getItem('statusLS');
    cont.style.backgroundColor = localStorage.getItem('colorMainLS');
    swiper.style.background = "linear-gradient(90deg, " + localStorage.getItem('colorSwiperLS') + ", transparent)";
}

function globalColor(obj2) {
    localStorage.setItem("colorMainLS", "var(--" + obj2.getAttribute('data-colorName') + ")")
    localStorage.setItem("colorSwiperLS", obj2.getAttribute('data-colorName'))
}