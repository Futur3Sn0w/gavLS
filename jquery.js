var toggle = false;
mainStatus.innerHTML = contentA.innerHTML;

setInterval(function() {
    if (toggle == false) {
        mainStatus.innerHTML = contentA.innerHTML;
        mainStatus.setAttribute("data-statOrTD", "Status:");
    } else if (toggle == true){
        mainStatus.innerHTML = contentB.innerHTML;
        mainStatus.setAttribute("data-statOrTD", "To-do:");
    }
    toggle = !toggle;
}, 5000);