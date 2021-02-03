//Zadanie1 

var car = {
	color: 'Red',
	model: 'Audi',
	year: 2019

console.log(car.color, car.model, car.year);

	//Zadanie2

	var car = {
		color: 'Red',
		model: 'Audi',
		year: 2019
	changeModel: function newModel(newModel) {
			this.make = newModel
		}
	};

	car.changeModel("BMW");
	console.log(car.model);

	//Zadanie3

	lete obj = {
		sum: 0;
		calculateSum(testArray) {
			this.sum = testArray.reduce((a, b) => { return a + b });
		}
	}

obj.calculateSum([20, 50, 30]);
	console.log(obj.sum);

	//Zadanie4

	var car = {
		name: 'BMW',
		year: 2020,
		driver_name: 'Steven'
	}

for(let key in car)
{
	console.log(key + ' : ' + car[key]);
}


//Zadanie5

var car = {
	name: 'BMW',
	year: 2020,
	driver_name: 'Steven'
}

car.newColors = {
	color1: 'Brown',
	color2: 'Green'
};

console.log(car.newColors.color1);


//Zadanie6


var car = {
	name: 'BMW',
	year: 2020,
	driver_name: 'Steven'
}

car.wheels = "super";

car.sayHello = () => console.log('Hello');

car.sayHello();
caonsole.log(car.wheels);

















