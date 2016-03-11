// #1

var plainBox = {
	color: 'green',
	size: 4,
	contents: []
};

// #2

var stockCar = {
	model: 'Ford',
	year: 2004,
	automaticTransmission: true,
	driver: null,
	passengers: [],
};

// #3

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