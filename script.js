const screen = document.getElementById("screen");
const subScreen = document.getElementById("sub-screen");

//variables
var number;
var operateSign;
var ready;

function clearAllData() {
    operateSign = null;
    number = null;
    ready = false;
}

function classModify(className, type) {
    if (type === "add") {
        screen.classList.add(className);
        subScreen.classList.add(className);
    } else if (type === "remove") {
        screen.classList.remove(className);
        subScreen.classList.remove(className);
    }
}

//print numbers
function button(number) {
    if (screen.value == 0) screen.value = "";
    screen.value += number;
    ready = true;
}

//operations
function operate(sign) {
    if (!ready) return;
    if (!operateSign) {
        number = screen.value;
        operateSign = sign;
    } else {
        var result = eval(number + operateSign + screen.value);
        number = result;
        operateSign = sign;
    }
    subScreen.classList.add("sub-screen-animation");
    if (sign === "/") {
        subScreen.value = number+"÷";
    } else if (sign === "*") {
        subScreen.value = number+"x";
    } else {
        subScreen.value = number+sign;
    }
    setTimeout(() => {
        subScreen.classList.remove("sub-screen-animation");
    }, 400);
    screen.value = 0;
}

function equal() {
    if (!number) return;
    var final = eval(number + operateSign + screen.value);
    classModify("result-animation", "add");
    subScreen.classList.add("sub-screen-animation");
    screen.value = final;
    setTimeout(() => {
        classModify("result-animation", "remove");
        subScreen.classList.remove("sub-screen-animation");
    }, 500);
    subScreen.value = final;
    clearAllData();
}

function clearBtn() {
    screen.value = 0;
    subScreen.value = "";
    clearAllData();
    classModify("clear-animation", "add");
    setTimeout(() => {
        classModify("clear-animation", "remove");
    }, 500);
}