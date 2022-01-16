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
    swiper.style.background = "linear-gradient(90deg, transparent, " + localStorage.getItem('colorSwiperLS') + ")";
    document.documentElement.style.setProperty('--textClr', localStorage.getItem("textColor"));

    localStorage.setItem('titleLS', overviewTB.value);
    localStorage.setItem('statusLS', statusTB.value);

    function showTime2() {
        let time2 = new Date();
        let hour2 = time2.getHours();
        let min2 = time2.getMinutes();
        am_pm2 = "AM";
      
        if (hour2 > 12) {
            hour2 -= 12;
            am_pm2 = " PM";
        }
        if (hour2 == 0) {
            hr2 = 12;
            am_pm2 = " AM";
        }
      
        hour2 = hour2 < 10 ? "0" + hour2 : hour2;
        min2 = min2 < 10 ? "0" + min2 : min2;
      
        let currentTime2 = hour2 + ":" + min2 + am_pm2;
      
        mainTitle.setAttribute("data-lastUpdate", "Last updated: " + currentTime2);
    }
    showTime2();

    showSettings();
}

window.onload = function () {
    mainEmoji.innerHTML = localStorage.getItem('emojiLS');
    mainTitle.innerHTML = localStorage.getItem('titleLS');
    mainStatus.innerHTML = localStorage.getItem('statusLS');
    cont.style.backgroundColor = localStorage.getItem('colorMainLS');
    swiper.style.background = "linear-gradient(90deg, transparent, " + localStorage.getItem('colorSwiperLS') + ")";
    document.documentElement.style.setProperty('--textClr', localStorage.getItem("textColor"));
}

function globalColor(obj2) {
    localStorage.setItem("colorMainLS", "var(--" + obj2.getAttribute('data-colorName') + ")")
    localStorage.setItem("colorSwiperLS", obj2.getAttribute('data-colorName'))

    if (obj2.getAttribute('data-colorName') === "orange"){
        localStorage.setItem("textColor", "black");
    } else if (obj2.getAttribute('data-colorName') === "yellow") {
        localStorage.setItem("textColor", "black");
    } else if (obj2.getAttribute('data-colorName') === "green") {
        localStorage.setItem("textColor", "black");
    } else {
        localStorage.setItem("textColor", "white");
    }
}

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";
  
    if (hour > 12) {
        hour -= 12;
        am_pm = " PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
  
    let currentTime = hour + ":" + min + am_pm;
  
    document.getElementById("time").innerHTML = currentTime;
}
showTime();

var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = todayDate + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()];
var todayDate = dayOfWeek + ", " + curMonth + " " + dayOfMonth;

document.getElementById('date').innerHTML = todayDate;

function weatherBalloon( cityID ) {
	var key = '984b3d6c3b801e60a2eaf094da08b866';
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		drawWeather(data);
	})
}

function drawWeather( d ) {
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('weather').innerHTML = fahrenheit + '&deg | ' + d.weather[0].description;
}

setInterval(function(){ 
    weatherBalloon( 4791259 );
}, 5000);