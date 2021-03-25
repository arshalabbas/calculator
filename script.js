const screen = document.getElementById("screen");

//variables
var number;
var operateSign;
var ready;

function clearAllData() {
    operateSign = null;
    number = null;
    ready = false;
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
    screen.value = final;
    clearAllData();
}

function clearBtn() {
    screen.value = 0;
    clearAllData();
}