//Zadanie1

var Person1 = {
	imie: "Jan",
	nazwisko: "Kowalski",
	wiek: 15,
	kraj: "PL",
	miasto: "Kraków"
}

var Person1 = {
	imie: "Adam",
	nazwisko: "Kowalski",
	wiek: 17,
	kraj: "USA",
	miasto: "LA"
}

function Wypisz() {
	console.log(this.imie + " " + this.nazwisko + " " + this.wiek + " " + this.kraj + " " + this.miasto);
}

function Dodaj() {
	this.wiek++;
}

Person1.wypisz();
Person1.dodaj();
Person1.wypisz();

Person2.wypisz();
Person2.dodaj();
Person2.wypisz();


//Zadanie2

var Person1 = {
	imie: "Jan",
	nazwisko: "Kowalski",
	wiek: 15,
	kraj: "PL",
	miasto: "Kraków"
}

var Person1 = {
	imie: "Adam",
	nazwisko: "Kowalski",
	wiek: 17,
	kraj: "USA",
	miasto: "LA"
}

function Wypisz() {
	console.log(this.imie + " " + this.nazwisko + " " + this.wiek + " " + this.kraj + " " + this.miasto);
}

function Dodaj() {
	this.wiek++;
}

Person1.wypisz();
Person1.dodaj();
Person1.wypisz();

Person2.wypisz();
Person2.dodaj();
Person2.wypisz();

Person2.favoriteFood = ['sushi', 'pizza'];
Person1.favoriteFood = ['sushi', 'lasagna'];

Person1.showFavoriteFood = function () { console.log(this.favoriteFood) };
Person2.showFavoriteFood = function () { console.log(this.favoriteFood) };

Person1.showFavoriteFood();

let addNewFavFood = function (element) {
	this.favoriteFood.push(element);
}

Person1.addNewFavFood = addNewFavFood;
Person2.addNewFavFood = addNewFavFood;

person1.addNewFavFood("sushi3");

//Zadanie3

function calc(a, b) {
	this.a = a;
	this.b = b;

	this.add = function () {
		return this.a + this.b;
	}

	this.substract = function () {
		return this.a - this.b;
	}

	this.divide = function () {
		if (this.b == 0) return "Cant devide by 0";

		return this.a / this.b
	}
	this.mulitiply = function () {
		return this.a * this.b
	}
}


const calc = new calc(3, 1);
console.log(calc.add());
console.log(calc.divide());
console.log(calc.mulitiply());
console.log(calc.substract());

//Zadanie4

function Ladder(steps) {
	this.steps = steps;
	this.where = 0;
	this.climb = () => {
		if (this.where > 0) {
			console.log("Musisz najpierw zejœæ z drabiny");
		} else {
			console.log("Rozpoczynamy wchodzenie na drabinê");
			for (var i = 0; i <= this.steps; i++;) {
				console.log("Stopien " + this.where++);
			}
		}
		console.log(this.where);
	}

	this.getOff = () => {
		if (this.where == 0) {
			console.log("Musisz najpierw wejsc na drabine");
		} else {
			console.log("Rozpoczynamy schodzenie z drabiny");
			for (var i; i <= this.steps; i++;) {
				console.log("Stopien " + this.where--);
			}
		}
	}
}

const newLadder = new Ladder(10);

newLadder.climb();
newLadder.climb();

newLadder.getOff();
newLadder.getOff();
console.log("check");
