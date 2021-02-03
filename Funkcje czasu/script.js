//Zadanie1:

var x = 0;

var interval = setInterval(() => {
	if (x == 15) {
		clearInterval(interval);
	}
	else {
		console.log("czesc po raz " + x++);
	}
}, 3000);

//Zadanie2

let tab = ["Maciek", "Jakub", "Aleksandra"];

setTimeout(function () {
	for (let i = 0; i < tab.length; i++) {
		console.log(tab[i]);
	}
	i = 0;
	var x = setInterval(function () {

		if (tab.length > i) {
			console.log(tab[i++]);
		}
	}, 3000);
	clearInterval(x);
}, 2000);