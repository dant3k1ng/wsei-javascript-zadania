//Zadanie1

const tab = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < tab.Length; i++) {
    consoel.log(tab[i]);
}

//Zadanie2

const table = ['jeden', 2, 3, 4]

console.log(table[0])
console.log(table[table.length - 1])
console.log(table)

for (i = 0; i < table.length; i++) {

    if (i % 2 === 0) {
        console.log(table[i])
    }

}

for (i = 0; i < table.length; i++) {
    if (typeof table[i] == "string")
        console.log(table[i])
}

for (i = 0; i < table.length; i++) {
    if (typeof table[i] == "number")
        console.log(table[i])
}

//Zadanie3

var table = new Array(1, 2, 3, 4, 5);
var sum = 0;


table.forEach(item => {
    sum += item;
})

var average;
average = sum / table.length;

sum = 0;
table.forEach(item => {
    sum -= item;
})

table.forEach(item => {
    if (item % 2 == 0) {
        console.log(item);
    }
})

table.forEach(item => {
    if (item % 2 != 0) {
        console.log(item);
    }
});

var max = table[0];
table.forEach(item => {
    if (item > max) max = item;
});
console.log(max);

var min = table[0];
table.forEach(item => {
    if (item < min) min = item;
});
console.log(min);

for (var i = table.length; i < 0; i--) {
    console.log(table[i]);
}

//Zadanie 4

function sum(t) {
    var x = 0;
    for (var i = 0; i < t.length; i++) {
        x += t[i];
    }

    return x;
}

var table = [1, 2, 3, 4, 5, 6];

console.log(sum(table));

//Zadanie5

function funct(tab) {
    var avg = tab[0];

    for (var i = 0; i < tab.length; i++) {
        avg += tab[i];
    }
    avg = avg / tab.length;

    for (var k = 0; k < tab.length; k++) {
        console.log(tab[k] * avg);
    }
}

const table = [1, 2, 6, 8, 9];

funct(table);

//Zadanie6

function average(table) {
    var sum = 0;
    var length = 0
    table.forEach(item => {
        if (item % 2 == 0) {
            sum += item;
            length++;
        }
    })
    return sum / length;
}

console.log(average(new Array(1, 2, 3, 4, 5, 6)));


//Zadanie7

var table = [1, 45, 22, 2, 8, 54, 5, 99, 88];

function sort(table) {
    return table.sort((a, b) => a - b);
}

console.log(sort(table));


//Zadanie8

var table1 = [1, 2, 3];
var table2 = [4, 5, 6];

function func(tab1, tab2) {

    var resultTab = [];
    for (var i = 0; i < tab1.length; i++) {
        resultTab.push(tab1[i] + tab2[i]);
    }

    return resultTab;
}

console.log(func(table1, table2));

//Zadanie9

let myNumericTable = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reserveTable(table) {
    let newTable = [];

    table.forEach(number => newTable.push(-number));

    return newTable;
}

console.log(reserveTable(myNumericTable));



//Zadanie10

let numberTable = [1, 2, -3, 4, 5, 6]

function reverseSign(table) {
    let newTab = [];
    table.forEach(number => newTab.push("-" + number));

    return newTab;
}

console.log(reverseSign(numberTable));