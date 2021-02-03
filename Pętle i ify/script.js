//Zadanie1:

var num1 = 10;
var num2 = 23;

if (num1 > num2) {
    console.log(num2);
}
else {
    console.log(num2);
}

//Zadanie2:

var nextValue1 = 145;
var nextValue2 = 68;
var nextValue3 = 44444;

if (nextValue1 > nextValue2 && nextValue1 > nextValue3) {
    console.log(nextValue1);
} else if (nextValue2 > nextValue3) {
    console.log(nextValue2);
} else {
    console.log(nextValue3);
}

//Zadanie3:

for (var num1 = 10; num1 <= 0; num1--) {
    console.log("Lubiê JS");
}

//Zadanie4:

for (var i = 0; i <= 10; i++) {
    consolse.log(result = result + i);
}
console.log(result);


//Zadanie5:

var n = 5;

for (var i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        console.log("liczba parzysta" + i);
    }
    else {
        console.log("liczba nieparzysta" + i);
    }
}

//zadanie 6

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 6; i++) {
        console.log("i =" + i + j)
    }
}

//Zadanie 7

console.log(0);
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}

//Zadanie 8

//a)
var x = "*";


for (var i = 0; i <= 5; i++) {
    console.log(x += "*");
}

//b)
var x = ' *';
var z = 5;

for (var i = 0; i < z; i++) {
    var space = '';
    for (var k = 0; k < z - i; k++) {
        space += ' ';
    }
    console.log(space + x);
    x += ' *';
}

//c)
for (let i = 1; i <= 5; i++) {
    let printString = "";
    for (let j = 5 - i; j > 0; j--) {
        printString += " ";
    }

    for (let j = i * 2 - 1; j > 0; j--) {
        printString += "*";
    }
    console.log(printString);
}



//d)
let c = 5;
let star = 1;

for (let i = 0; i < c; i++) {
    let str = "";

    for (let j = 0; j < c; j++) {
        if (j < star) {
            str += "*";
        }
        else {
            str += j;
        }
    }

    star++;
    console.log(str);
}
console.log("-----");
star = c;
for (let i = 0; i < c; i++) {
    let str = "";

    for (let j = 0; j < c; j++) {
        if (j >= star) {
            str += j;
        }
        else {
            str += "*";
        }
    }

    star--;
    console.log(str)
}


//e)
for (let i = 1; i <= 5; i++) {
    let printString = "";
    for (let j = 5 - i; j > 0; j--) {
        printString += " ";
    }

    for (let j = i * 2 - 1; j > 0; j--) {
        if (j % 2)
            printString += "*";
        else printString += " ";
    }
    console.log(printString);
}

let printString = "";
for (let k = 0; k < 5; k++) {
    if (k < 4)
        printString += " ";
    if (k == 4) {
        printString += "*";
    }
}
console.log(printString)

