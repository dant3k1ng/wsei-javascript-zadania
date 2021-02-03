//Zadanie 1

window.onload = function () {
    console.log("uda³o siê");
}

//Zadanie 2

var nr1 = 5
function number(nr) {
    console.log(nr);
}

number(nr1);

//Zadanie 3

var tab1 = [1, 2, 3, 4, 5, 6];

function table(tab) {
    return tab;
}

console.log(table(tab1));

//Zadanie 4

function printString(str) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < 5) {
            console.log(str);
            i++;
        }
        else {
            console.log("koniec");
            clearInterval(timer);
        }
    }, 3000);
}
printString("czekaj");