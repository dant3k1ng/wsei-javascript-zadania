//Zadanie1

var parent = document.getElementById("buz").parentElement;
console.log(parent);

var brother = document.getElementById("baz").nextElementSibling;
consoile.log(brother);


var children = document.getElementById("foo").children;
consoile.log(children);


var rodzic = document.getElementById("foo").parentNode;
consoile.log(rodzic);


var firstChild = document.getElementById("foo").children[0];
consoile.log(firstChildren);



var midChild = document.getElementById("foo").children[1];
consoile.log(midChild);

//Zadanie2

const listenEvent = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0].children[0].children[0].children[1].
            children[0].children[0].textContent);
    })
}
ex2Element = document.querySelector("#ex2");
listenEvent(ex2Element);

//Zadanie3

var isBlock = false;

if (isBlock = false) {
    const add = (elements) => {
        for (var i = 0; i < elements.length; i++) {

            elements[i].addEventListener("click", function () {
                this.nextElementSibling.style.display = "block";
                isBlock = true;
            })
        }
    }
}
else if (isBlock = true) {
    const add = (elements) => {
        for (var i = 0; i < elements.length; i++) {

            elements[i].addEventListener("click", function () {
                this.nextElementSibling.style.display = "none";
                isBlock = false;
            })
        }
    }

    add(document.querySelectorAll('#ex3 button'));


    //Zadanie4

    function changeColor() {
        let buttons = document.querySelectorAll('#ex3 button');
        buttons.forEach(element => {
            element.addEventListener('click', () => {
                let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                element.parentElement.style.backgroundColor = randomColor;
            })
        })
    }

    changeColor();


    //Zadanie 5

    function changeColor() {
        var element = document.getElementById('ex5');
        element.querySelectorAll('div').forEach((div) => {
            div.onmouseover = () => {
                //var elem = element.querySelectorAll('ul li:first-child');
                //var elem = element.querySelectorAll('ul li:last-child');
                //var elem = element.querySelectorAll('ul li:nth-of-type(2n)')
                //var elem = element.querySelectorAll('ul li');
                var elem = element.querySelectorAll('ul');

                elem.forEach(el => el.style.backgroundColor = div.style.backgroundColor);
            };

        });
    }
    changeColor();

    //Zadanie 6

    const ex6 = document.getElementById('ex6');

    let first = ex6.firstElementChild.firstElementChild.firstElementChild;

    let second = ex6.firstElementChild.parrentNode.firstElementChild.firstElementChild.nextElementSibling.parentNode;

    let third = ex6.parentNode.firstElementChild.parentNode.children[1].firstElementChild.firstElementChild.firstElementChild;