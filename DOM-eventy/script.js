//Zadanie1

let el = document.getElementById('test-event');

el.addEventListener("click", function (event) {
    console.log(event);
});

document.addEventLIstener("mousemove", function (event) {
    console, log(event);
})

el.addEventListener("mouseover", function (event1) {
    console.log(event1);
});

document.addEventListener("keypress", function (event2) {
    cosnole.log(event2);
});

document.addEventListener("scroll", function (event3) {
    console.log(event3);
});

let text = document.getElementById("imput-test");
text.addEventListener("change", function (event4) {
    console.log(event4);
});

//Zadanie2

let button = document.getElementById('ex2');

button.addEventListener('click', function () {
    let attribute = document.getElementById('ex2').getAttribute('data-text');

    document.getElementById('span-ex2').innerHTML = attribute;
});

//Zadanie3

var square = document.getElementById("ex3");

square.addEventListener('mouseover', function () {
    square.style.backgroundColor = 'blue';
})

square.addEventListener('mouseout', function () {
    square.style.backgroundColor = 'red';
})

//Zadanie4

var button = document.getElementById('test-event');

button.addEventListener('click', function () {
    var inputValue = document.getElementById('input-test').value;

    if (isNaN(inputValue)) {
        document.getElementById('ex3-err').innerHTML = " ";
    }
    else if (inputValue == null) {
        document.getElementById('ex3-err').innerHTML = " ";
    }
    else {
        document.getElementById('ex3-err').innerHTML = "Nie             mo¿na wpisywaæ cyfr!";
    }
});

//Zadanie5

var cnt = 0;

var button = document.getElementById('ex5-button');

button.addEventListener('click', function counter() {
    cnt++;
    if (cnt <= 10) {
        document.getElementById('ex5-span').innerHTML = cnt;
    }
    else {
        button.removeEventListener('click', counter);
    }
})

//Zadanie6

document.addEventListener('scroll', function () {
    var body = document.body;

    if (window.scrollY >= 200) {
        body.style.backgroundColor = 'red';
    }
    else {
        body.style.backgroundColor = 'white';
    }
});

//Zadanie7

function Calculator() {
    this.memory = [];
    this.result = 0;
    this.currentActionKey = null;

    this.div = function (number) {
        this.memory.push("Dzielnie");
        this.result /= Number.parseFloat(number);
    }

    this.multi = function (number) {
        this.memory.push("Mno¿enie");
        this.result *= Number.parseFloat(number);
    }

    this.add = function (number) {
        this.memory.push("Dodawanie");
        this.result += Number.parseFloat(number);
    }

    this.sub = function (number) {
        this.memory.push("Odejmowanie");
        this.result -= Number.parseFloat(number);
    }

    this.clear = function () {
        this.memory = [];
        this.result = 0;
    }

    this.makeAction = function (value, defaultActionKey = null) {
        let currentActionKey = defaultActionKey == null ? this.currentActionKey : defaultActionKey;

        switch (currentActionKey) {
            case "+":
                this.add(value);
                break;
            case "-":
                this.sub(value);
                break;
            case "/":
                this.div(value);
                break;
            case "*":
                this.multi(value);
                break;
        }
    }
}

let calc = new Calculator();
let calculatorElement = document.getElementById("calculator");
let screen = calculatorElement.querySelector("input");
let btns = calculatorElement.querySelectorAll("button");


let clearScreen = () => screen.value = "";
let showCalcValue = () => screen.placeholder = calc.result;
let getValue = () => Number.parseFloat(screen.value);

let isSomeValueOnScreen = () => screen.value != "" && screen.value != null;
let isSomeAcionKey = () => calc.currentActionKey !== null;


showCalcValue();


btns.forEach(btn => {
    btn.addEventListener("click", function (event) {
        let elem = event.target;
        let value = elem.innerHTML;

        let screenValue = getValue();

        if (["+", "-", "*", "/", "="].includes(value)) {
            if (value === "=") {
                if (isSomeAcionKey()) {
                    if (!isNaN(screenValue)) {
                        calc.makeAction(screenValue);
                    }

                } else {
                    if (!isNaN(screenValue)) {
                        calc.clear();
                        calc.makeAction(screenValue, "+")
                    }
                }

                clearScreen();
            }
            else {
                if (isSomeAcionKey()) {
                    if (!isNaN(screenValue)) {
                        calc.makeAction(screenValue);
                    }

                } else {

                    if (!isNaN(screenValue)) {
                        calc.makeAction(screenValue, "+");
                    }

                }

                calc.currentActionKey = value;
                clearScreen();
            }
        }
        else {
            screen.value = screen.value + `${value}`;
        }

        showCalcValue();
    });
});

