//Zadanie1
window.addEventListener('load', function () {
	var listElement = document.querySelectorAll(".list");
	console.log(listElement);
});
//Zadanie2
window.addEventListener('load', function () {
	var listElement = document.querySelectorAll(".list");
	console.log(listElements);

	let returnElements = (tag) => {
		return document.querySelectorAll(tag);
	}

	console.log(returnElements("body"));
});
//Zadanie3
window.addEventListener('load', function () {
	const elem = document.getElementById("list");
	console.log(elem);
});

//Zadanie4
window.addEventListener('load', function () {
	const getElements = (selector) => {
		return document.querySelectorAll(selector);
	}

	const elementLi = getElements('li');
	const elementUl = getElements('ul');
	const elementSpan = getElements('span');
	const elementSpan2 = getElements('div.list span');
	const elementSpan3 = getElements('div#spans span');

	console.log(elementLi, elementUl, elementSpan, elementSpan2, elementSpan3);
});