let toDoList = document.getElementById("toDoList");

let cb1 = document.getElementById('tdlCB1');
let tb1 = document.getElementById('tdlTB1');
let tdl1 = document.getElementById('tdl1');

let cb2 = document.getElementById('tdlCB2');
let tb2 = document.getElementById('tdlTB2');
let tdl2 = document.getElementById('tdl2');

let cb3 = document.getElementById('tdlCB3');
let tb3 = document.getElementById('tdlTB3');
let tdl3 = document.getElementById('tdl3');

let cb4 = document.getElementById('tdlCB4');
let tb4 = document.getElementById('tdlTB4');
let tdl4 = document.getElementById('tdl4');

function checkChecks() {
    if (cb1.checked) {
        tdl1.style.display = "flex";
        tdl1.innerHTML = tb1.value;

        localStorage.setItem("tdl1", tb1.value);
    } else if (!cb1.checked) {
        tdl1.style.display = "none";
        localStorage.setItem("tdl1", "");
    }

    if (cb2.checked) {
        tdl2.style.display = "flex";
        tdl2.innerHTML = tb2.value;

        localStorage.setItem("tdl2", tb2.value);
    } else if (!cb2.checked) {
        tdl2.style.display = "none";
        localStorage.setItem("tdl2", "");
    }

    if (cb3.checked) {
        tdl3.style.display = "flex";
        tdl3.innerHTML = tb3.value;

        localStorage.setItem("tdl3", tb3.value);
    } else if (!cb3.checked) {
        tdl3.style.display = "none";
        localStorage.setItem("tdl3", "");
    }

    if (cb4.checked) {
        tdl4.style.display = "flex";
        tdl4.innerHTML = tb4.value;

        localStorage.setItem("tdl4", tb4.value);
    } else if (!cb4.checked) {
        tdl4.style.display = "none";
        localStorage.setItem("tdl4", "");
    }
}

function setChecks() {
    if (!localStorage.getItem("tdl1") == ""){
        tdl1.style.display = "flex";
        tdl1.innerHTML = localStorage.getItem("tdl1");

        cb1.checked = true;
        tb1.value = localStorage.getItem("tdl1");
    } else {
        tdl1.style.display = "none";
        cb1.checked = false;
        tb1.value = "";
    }

    if (!localStorage.getItem("tdl2") == ""){
        tdl2.style.display = "flex";
        tdl2.innerHTML = localStorage.getItem("tdl2");

        cb2.checked = true;
        tb2.value = localStorage.getItem("tdl2");
    } else {
        tdl2.style.display = "none";
        cb2.checked = false;
        tb2.value = "";
    }

    if (!localStorage.getItem("tdl3") == ""){
        tdl3.style.display = "flex";
        tdl3.innerHTML = localStorage.getItem("tdl3");

        cb3.checked = true;
        tb3.value = localStorage.getItem("tdl3");
    } else {
        tdl3.style.display = "none";
        cb3.checked = false;
        tb3.value = "";
    }

    if (!localStorage.getItem("tdl4") == ""){
        tdl4.style.display = "flex";
        tdl4.innerHTML = localStorage.getItem("tdl4");

        cb4.checked = true;
        tb4.value = localStorage.getItem("tdl4");
    } else {
        tdl4.style.display = "none";
        cb4.checked = false;
        tb4.value = "";
    }
}

tb1.onkeyup = function () {
    if (tb1.value == ""){
        cb1.checked = false;
    } else {
        cb1.checked = true;
    }
}

tb2.onkeyup = function () {
    if (tb2.value == ""){
        cb2.checked = false;
    } else {
        cb2.checked = true;
    }
}

tb3.onkeyup = function () {
    if (tb3.value == ""){
        cb3.checked = false;
    } else {
        cb3.checked = true;
    }
}

tb4.onkeyup = function () {
    if (tb4.value == ""){
        cb4.checked = false;
    } else {
        cb4.checked = true;
    }
}