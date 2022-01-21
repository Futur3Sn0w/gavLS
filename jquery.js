var toggle = false;
contentB.style.opacity = "0";
// mainStatus.innerHTML = contentB.innerHTML;

setInterval(function() {
    if (toggle == false) {
        contentA.style.opacity = "0";
        contentB.style.opacity = "1";
        mainStatus.setAttribute("data-statOrTD", "To-Do:");
    } else if (toggle == true){
        contentA.style.opacity = "1";
        contentB.style.opacity = "0";
        mainStatus.setAttribute("data-statOrTD", "Status:");
    }
    toggle = !toggle;
}, 10000);