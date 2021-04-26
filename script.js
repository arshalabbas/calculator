const screen = document.getElementById("screen");
const container = document.querySelector(".calculator");

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
    } else if (type === "remove") {
        screen.classList.remove(className);
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
    screen.value = 0;
}

function equal() {
    if (!number) return;
    var final = eval(number + operateSign + screen.value);
    classModify("result-animation", "add");
    screen.value = final;
    setTimeout(() => {
        classModify("result-animation", "remove");
    }, 500);
    clearAllData();
}

function clearBtn() {
    screen.value = 0;
    clearAllData();
    classModify("clear-animation", "add");
    setTimeout(() => {
        classModify("clear-animation", "remove");
    }, 500);
}