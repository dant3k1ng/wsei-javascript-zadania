//Zadanie1

document.querySelectorAll('.more_divs');

function myFunc(paramArray) {

    let newArray = [];
    for (var i = 0; i < paramArray.length; i++) {
        newArray.push(paramArray[i].tagName);
    }
    return newArray;
}

console.log(myFunc(moreDivs));

//Zadanie2

var sList = document.querySelector('ul.short-list');

function zadanie2(element) {
    console.log(element.innerHTML);
    console.log(element.outerHTML);
    console.log(element.classList);
    console.log(element.dataset);
    console.log(element.className);
}

zadanie2(sList);

//Zadanie3

var sumAdnSub = (element) => {
    var num1 = parseInt(element.dataset.numerone);
    var num2 = parseInt(element.dataset.numertwo);
    var num3 = parseInt(element.dataset.numerThree);

    var sum = num1 + num2 + num3;
    var sub = num1 = num2 - num3;

    return [sum, sub];
};

console.log(SumAndSub(document.querySelector('#datasetCheck')));

//Zadanie4

const span = document.getElementById('spanText');
span.innerText('zmienioinyTekst');

//Zadanie5

document.querySelector('#spanText').className = 'aaaa';

//Zadanie6

var tab = document.getElementById("classes");

function takeClass(classList) {
    console.log(classList);
    let newArray = [];

    for (int i = 0; i <= classList.length; i++)
    {
        console.log(classList[i]);
        newArray.push(classList[i]);
    }

    console.log(newArray.join(" + "));

    tab.className = "";

    console.log("Usuniêto wszytskie klasy");
}

takeClass(tab.classList);

//Zadanie7
window.addEventListener('load', function () {
    var listUL = document.getElementById("longList");
    var listLI = listUL.querySelector("li");

    //console.log(listLI);

    listUL.children[0].setAttribute("data-text", "text");
    listUL.children[1].setAttribute("data-text", "text");
    listUL.children[2].setAttribute("data-text", "text");
    listUL.children[3].setAttribute("data-text", "text");
    listUL.children[4].setAttribute("data-text", "text");
    listUL.children[5].setAttribute("data-text", "text");
    listUL.children[6].setAttribute("data-text", "text");
    listUL.children[7].setAttribute("data-text", "text");
});

//Zadanie8*

window.addEventListener('load', function () {
    function makeObject(string) {
        let obj = {
            newClass: string
        };

        return obj;
    }
});

function readAndAssign(obj) {
    let div = document.getElementById("myDiv");
    let newClass = obj.newClass;
    div.classList.add(newClass);
}

let myObj = makeObject("string_z_parametru");
readAndAssign(myObj);


//Zadanie9

var param = Math.floor(Math.random() * 10 + 1);

window.addEventListener('load', function (sth) {
    if (param % 2 != 0) {
        document.querySelector('#numbers').classList.add('odd');
    }
    else {
        document.querySelector('#numbers').classList.add('even');
    }
});


//Zadanie10

let longList = document.getElementById("longList");

function getValues(list) {
    let values = [];
    let elements = list.querySelectorAll("li");
    elements.forEach(element => {
        values.push(element.innerHTML);
    });

    return values;
}

console.log(getValues(longList));


//Zadanie11

let longList = document.getElementById("longList");
let children = longList.children;
let randomNumber = () => Math.floor(Math.random() * 11);


function setChildrenData(elements) {
    for (element of elements) {
        let currentValue = element.innerHTML;
        element.setAttribute("data-old-value", currentValue);
        element.innerHTML = randomNumber();
    }
}

setChildrenData(children);
