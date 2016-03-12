// # 1 ////////////////////////////////////////////////////////////

var plainBox = {
	color: 'green',
	size: 4,
	contents: []
};

// # 2 ////////////////////////////////////////////////////////////

var stockCar = {
	model: 'Ford',
	year: 2004,
	automaticTransmission: true,
	driver: null,
	passengers: [],
};

// # 3 ////////////////////////////////////////////////////////////

var plainPerson = {};

function buildPerson(person,nameString,age) {
	person.name = nameString;
	person.age = age;
	return person;
}

var builtPerson = buildPerson(plainPerson,'matt',22);
console.log(builtPerson);

console.log(plainPerson.name);
console.log(plainPerson.age);

// # 4 ////////////////////////////////////////////////////////////

var arrayOfObjects = [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrders(orders) {
	for (var i = 0; i <= 2; i++) {
		console.log(arrayOfObjects[i]);
	}
}
printProcessedOrders(arrayOfObjects);

// # 5 ////////////////////////////////////////////////////////////

var newObject = {
	a: 4,
	b: 7,
	result: 0
};

function newFunc(object){
	object.result = object.a + object.b;
	return object;
}

var supahResult = newFunc(newObject);
console.log(supahResult);

// # 6 ////////////////////////////////////////////////////////////

function sumFunc(object){
	newObject.output = object.a +' + '+ object.b + ' = ' + object.result;
}
var updatedObject = sumFunc(newObject);
console.log(newObject.output);

// # 7 ////////////////////////////////////////////////////////////

function puttingStuff(object){
		for (var i = 0; i < 10; i++) {
			var randomArray = Math.floor(Math.random() * 10);
			plainBox.contents.push(randomArray);
		}
}
puttingStuff(plainBox.contents);
var puttingStuffResults = plainBox.contents;
console.log(puttingStuffResults);

// # 8 /////////////////////////////////////////////////////////////

var transmissionResult = stockCar.automaticTransmission;

function detectingTransmission(object) {
	
	if ( object === true ) {
		console.log('Yes I know. I cannot drive stick....');
	}else{
		console.log('So you tokyo drift often?');
	}
}

detectingTransmission(transmissionResult);

// # 9 //////////////////////////////////////////////////////////////

function newDriver(car, person) {
	car.driver = person;
}

newDriver(stockCar, builtPerson);
console.log(stockCar.driver);

// #10 //////////////////////////////////////////////////////////////

var passengerList = ['Jon', 'Jason', 'Tony', 'Joe', 'Jesse', 'Nigel', 'Kelli', 'Marifel', 'Victor'];
var passengerAges = [19, 12, 21, 22, 16, 9, 19, 20, 15];

function ridinDirty (car, name, age){
	for (var i = 0; i < passengerAges.length; i++){
		car.passengers.push(name[i], age[i]);
	}
	return car;
}

ridinDirty(stockCar, passengerList, passengerAges);
console.log(stockCar);




