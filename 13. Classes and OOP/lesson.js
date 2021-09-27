// OOP functions and Class

// function Animal(name) {
// 	this.name = name;

// 	this.getName = function () {
// 		return this.name;
// 	};
// }

// // new
// const cat = new Animal("кот");
// console.log("cat", cat);
// console.log(cat.name);
// console.log(cat.getName());

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	getName = () => {
// 		return this.name;
// 	};
// }

// const dog = new Animal("dog");

// console.log("dog", dog);
// console.log(dog.name);
// console.log(dog.getName());
// console.log(Object.keys(dog));
// for (key in dog) {
// 	console.log("key:", key);
// }

// class Counter {
// 	constructor() {
// 		this.handleClick = this.handleClick.bind(this);
// 	}
// 	counter = 0;

// 	handleClick() {
// 		this.counter++;
// 	}
// }

// const test = new Counter();
// console.log(test);
// test.handleClick();
// console.log(test);

// OOП

// 1. Наследование / inheritance
// =============================
// class Plane {
// 	constructor(type, numberOfPassengers) {
// 		this.type = type;
// 		this.numberOfPassengers = numberOfPassengers;
// 	}

// 	startFlight() {
// 		console.log("Полетели");
// 	}
// }

// class MilitaryPlane extends Plane {
// 	constructor(type, numberOfGuns) {
// 		super(type, 0);
// 		this.numberOfGuns = numberOfGuns;
// 	}

// 	getNumberOfGuns() {
// 		return this.numberOfGuns;
// 	}
// }

// const plane = new Plane("Пассажирский", 100);
// const military = new MilitaryPlane("Военный", 3);
// plane.startFlight();
// console.log(military.getNumberOfGuns());

// console.log(military instanceof Plane);

// =====================================

// 2. Инкапсуляция // incapsulation

//public
//private - #

// class Developer {
// 	#salary;

// 	constructor(name, programmingLanguage) {
// 		this.name = name;
// 		this.programmingLanguage = programmingLanguage;
// 		this.#salary = 3000;
// 	}

// 	get devSalary() {
// 		return this.#salary;
// 	}

// 	set setSalary(salary) {
// 		this.#salary = salary;
// 	}

// 	startCoding() {
// 		console.log("private salary", this.#salary);
// 		this.#printProgrammingLanguage();
// 		console.log(`${this.name} начинает писать код!`);
// 	}

// 	#printProgrammingLanguage() {
// 		console.log(`Язык программирования ${this.programmingLanguage}`);
// 	}
// }

// class JuniorDeveloper extends Developer {
// 	constructor(name, programmingLanguage) {
// 		super(name, programmingLanguage);
// 	}
// }

// const juniorDeveloper = new JuniorDeveloper("Игорь", "JavaScript");
// // juniorDeveloper.printProgrammingLanguage();
// // juniorDeveloper.startCoding();

// const developer = new Developer("Mark", "JavaScript");
// // console.log(developer);
// // console.log(developer.name);
// // console.log(developer.#printProgrammingLanguage());
// console.log(developer.devSalary);
// console.log(developer);
// developer.setSalary = 5000;
// console.log(developer.devSalary);
// console.log(developer);
// // developer.startCoding();

// 3. Полиморфизм
// !одно действие - несколько реализаций

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	makeSound() {}
// }

// class Dog extends Animal {
// 	constructor(name) {
// 		super(name);
// 	}

// 	makeSound() {
// 		console.log(`${this.name} говорит Гав-Гав`);
// 	}
// }

// class Horse extends Animal {
// 	constructor(name) {
// 		super(name);
// 	}

// 	makeSound() {
// 		console.log(`${this.name} говорит "Иго-го"`);
// 	}
// }

// const dog = new Dog("dog");
// const horse = new Horse("horse");

// dog.makeSound();
// horse.makeSound();

// // 4. Абстракция

// // Абстрактный класс, обобщенные параметры - нужно создавать дочерние классы.

// class Footballer {
// 	constructor(name, club) {
// 		this.name = name;
// 		this.club = club;
// 	}

// 	shoot() {}
// 	celebrateGoal() {}
// 	pass() {}
// }

// class Forward extends Footballer {
// 	constructor(name, club) {
// 		super(name, club);
// 	}

// 	shoot() {
// 		console.log("очень сильный удар");
// 	}

// 	celebrateGoal() {
// 		console.log("Да! Я забил гол!");
// 	}

// 	pass() {
// 		console.log("Средненький пасс");
// 	}
// }

// Статические поля и методы!
// class Car {
// 	static isCar(car) {
// 		return car instanceof Car;
// 	}

// 	static #initialParams = {
// 		name: "Audi",
// 		maxSpeed: 150,
// 	};

// 	constructor(name, maxSpeed) {
// 		this.name = name || Car.#initialParams.name;
// 		this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
// 	}

// 	drive() {
// 		console.log(`Машина ${this.name} сейчас в пути.`);
// 	}
// }

// const car = new Car();
// const animal = {};
// console.log(car);
