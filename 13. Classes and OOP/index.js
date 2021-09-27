// Task 1.

// function Student(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.technologies = [];
// 	this.status = "Junior";

// 	this.setTechnologies = function (technologies) {
// 		this.technologies = [...this.technologies, ...technologies];
// 	};

// 	this.setNewStatus = function (newStatus) {
// 		this.status = newStatus;
// 	};
// }

// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);

// class Student {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		this.technologies = [];
// 		this.status = "Junior";
// 	}

// 	setTechnologies(technologies) {
// 		this.technologies = [...this.technologies, ...technologies];
// 	}

// 	setNewStatus(newStatus) {
// 		this.status = newStatus;
// 	}
// }

// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);

// Task 2.

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	compareAge(obj) {
// 		return this.age > obj.age
// 			? console.log(`${this.name} старше, чем ${obj.name}`)
// 			: console.log(`${this.name} младше, чем ${obj.name}`);
// 	}
// }

// const person1 = new Person("Максим", 24);
// const person2 = new Person("Светлана", 36);
// const person3 = new Person("Ирина", 23);

// person1.compareAge(person2); // Максим младше, чем Светлана
// person2.compareAge(person3); // Светлана старше, чем Ирина
// person3.compareAge(person1); // Ирина младше, чем Максим

// Task 3.

// class CarService {
// 	static DefaultWorkingHours = {
// 		from: "9:00",
// 		till: "20:00",
// 	};

// constructor(name, workingHours) {
// 	this.name = name;
// 	this.workingHours = workingHours || CarService.DefaultWorkingHours;
// }

// 	repairCar(carName) {
// 		if (!carName) return console.error("Вам необходимо указать название машины, чтобы ее отремонтировать");
// 		const hourNow = new Date().toLocaleTimeString().slice(0, -3);
// 		const { from, till } = this.workingHours;

// 		const isWorkTime = [from, hourNow, till].map(time => +time.split(":").shift());

// 		if (isWorkTime[0] <= isWorkTime[1] && isWorkTime[1] < isWorkTime[2]) {
// 			console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста.`);
// 		} else {
// 			console.log("К сожалению, мы сейчас закрыты. Приходите завтра.");
// 		}
// 	}
// }

// const carService = new CarService("RepairCarNow", { from: "8:00", till: "20:00" });
// carService.repairCar("BMW");

// Task 4.

// class Dictionary {
// 	constructor(name) {
// 		this.name = name;
// 		this.words = {};
// 	}

// 	add(word, description) {
// 		if (this.words[word]) return;
// 		this.words[word] = {
// 			word: word,
// 			description: description,
// 		};
// 	}

// 	remove(key) {
// 		delete this.words[key];
// 	}

// 	get(key) {
// 		return this.words[key];
// 	}

// 	showAllWords() {
// 		for (const key in this.words) {
// 			let { word, description } = this.words[key];
// 			console.log(`${word} - ${description}`);
// 		}
// 	}
// }

// const dictionary = new Dictionary("Толковый словарь");
// dictionary.add("JavaScript", "популярный язык программирования");
// dictionary.add(
// 	"Веб-разработчик",
// 	"Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
// );

// dictionary.remove("JavaScript");
// dictionary.showAllWords();
// // Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие

// Task 5.

// class Dictionary {
// 	constructor(name) {
// 		this.name = name;
// 		this.words = {};
// 	}

// 	add(word, description) {
// 		if (this.words[word]) return;
// 		this.words[word] = {
// 			word: word,
// 			description: description,
// 		};
// 	}

// 	remove(key) {
// 		delete this.words[key];
// 	}

// 	get(key) {
// 		return this.words[key];
// 	}

// 	showAllWords() {
// 		for (const key in this.words) {
// 			let { word, description } = this.words[key];
// 			console.log(`${word} - ${description}`);
// 		}
// 	}
// }

// const dictionary = new Dictionary("Толковый словарь");
// // dictionary.add("JavaScript", "популярный язык программирования");
// // dictionary.add(
// // 	"Веб-разработчик",
// // 	"Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
// // );

// // dictionary.remove("JavaScript");
// // dictionary.showAllWords();

// class HardWordsDictionary extends Dictionary {
// 	constructor(name) {
// 		super(name);
// 		this.words = {};
// 	}

// 	add(word, description) {
// 		if (this.words[word]) return;
// 		this.words[word] = {
// 			word: word,
// 			description: description,
// 			isDiffucult: true,
// 		};
// 	}
// }

// const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
// hardWordsDictionary.add(
// 	"дилетант",
// 	"Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
// );
// hardWordsDictionary.add("неологизм", "Новое слово или выражение, а также новое значение старого слова.");
// hardWordsDictionary.add("квант", "Неделимая часть какой-либо величины в физике.");

// hardWordsDictionary.remove("неологизм");
// hardWordsDictionary.showAllWords();

// // дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// // квант - Неделимая часть какой-либо величины в физике.

// Task 6.
class Dictionary {
	#name;
	#words;
	constructor(name) {
		this.#name = name;
		this.#words = {};
	}

	add(word, description) {
		if (this.#words[word]) return;
		this.#words[word] = {
			word: word,
			description: description,
		};
	}

	remove(key) {
		delete this.#words[key];
	}

	get(key) {
		return this.#words[key];
	}

	showAllWords() {
		for (const key in this.#words) {
			let { word, description } = this.#words[key];
			console.log(`${word} - ${description}`);
		}
	}

	addNewWord(word, description) {
		this.#words[word] = {
			word: word,
			description: description,
		};
	}

	get mainName() {
		return this.#name;
	}

	set setMainName(name) {
		this.#name = name;
	}

	get allWords() {
		return this.#words;
	}
}

class HardWordsDictionary extends Dictionary {
	constructor(name) {
		super(name);
	}

	add(word, description) {
		const words = this.allWords;
		words[word] = {
			word: word,
			description: description,
			isDiffucult: true,
		};
	}
}

const dictionary = new Dictionary("Толковый словарь");
const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
	"дилетант",
	"Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);
hardWordsDictionary.add("неологизм", "Новое слово или выражение, а также новое значение старого слова.");
hardWordsDictionary.add("квант", "Неделимая часть какой-либо величины в физике.");

hardWordsDictionary.remove("неологизм");
hardWordsDictionary.showAllWords();
console.log("####: hardWordsDictionary", hardWordsDictionary);

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.setMainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант
// Task 7.

// class Developer {
// 	constructor(fullName, age, position) {
// 		this.fullName = fullName;
// 		this.age = age;
// 		this.position = position;
// 		this.technologies = [];
// 	}

// 	code() {}

// 	learnNewTechnology(technology) {
// 		this.technologies.push(technology);
// 	}
// }

// class JuniorDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, "Junior");
// 		this.technologies = ["HTML", "CSS", "JavaScript"];
// 	}

// 	code() {
// 		console.log(`${this.position} разработчик пишет код...`);
// 	}
// }

// class MiddleDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, "Middle");
// 		this.technologies = ["HTML", "CSS", "JavaScript", "React"];
// 	}

// 	code() {
// 		console.log(`${this.position} разработчик пишет код...`);
// 	}
// }

// class SeniorDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, "Senior");
// 		this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
// 	}

// 	code() {
// 		console.log(`${this.position} разработчик пишет код...`);
// 	}
// }

// const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);
// const middleDeveloper = new MiddleDeveloper("Игорь", 25);
// const seniorDeveloper = new SeniorDeveloper("Максим", 30);

// juniorDeveloper.code(); // Junior разработчик пишет код...
// middleDeveloper.code(); // Middle разработчик пишет код...
// seniorDeveloper.code(); // Senior разработчик пишет код...

// console.log(
// 	juniorDeveloper.fullName,
// 	juniorDeveloper.age,

// 	juniorDeveloper.position
// ); // 'Анастасия', 20, 'Junior'
// console.log(
// 	middleDeveloper.fullName,
// 	middleDeveloper.age,

// 	middleDeveloper.position
// ); // 'Игорь', 25, 'Middle'
// console.log(
// 	seniorDeveloper.fullName,
// 	seniorDeveloper.age,

// 	seniorDeveloper.position
// ); // 'Максим', 30, 'Senior'

//====================
class Developer {
	#salary;

	constructor(name, programmingLanguage) {
		this.name = name;
		this.programmingLanguage = programmingLanguage;
		this.#salary = 3000;
	}

	get devSalary() {
		return this.#salary;
	}

	set setSalary(salary) {
		this.#salary = salary;
	}

	startCoding() {
		console.log("private salary", this.#salary);
		this.#printProgrammingLanguage();
		console.log(`${this.name} начинает писать код!`);
	}

	#printProgrammingLanguage() {
		console.log(`Язык программирования ${this.programmingLanguage}`);
	}
}

class JuniorDeveloper extends Developer {
	constructor(name, programmingLanguage) {
		super(name, programmingLanguage);
	}
}

const juniorDeveloper = new JuniorDeveloper("Игорь", "JavaScript");
