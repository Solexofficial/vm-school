// Task 1.

// const student = {
// 	stack: ["HTML"],
// 	level: 1,
// 	improveLevel() {
// 		this.level += 1;
// 		if (this.level > 5) {
// 			console.log("Студент выучил все технологии!");
// 		}
// 		switch (this.level) {
// 			case 2:
// 				this.stack.push("CSS");
// 				break;
// 			case 3:
// 				this.stack.push("JavaScript");
// 				break;
// 			case 4:
// 				this.stack.push("React");
// 				break;
// 			case 5:
// 				this.stack.push("NodeJS");
// 				break;
// 		}
// 		return this;
// 	},
// };

// student.improveLevel().improveLevel().improveLevel().improveLevel().improveLevel();
// console.log(student.stack);

// ========

// // Task 2.
// const dog = {
// 	name: "Чарли",
// 	type: "Собака",
// 	makeSound() {
// 		return "Гав-Гав";
// 	},
// };

// const bird = {
// 	name: "Петя",
// 	type: "Воробей",
// 	makeSound() {
// 		return "Чик-чирик";
// 	},
// };

// function makeDomestic(isDomestic) {
// 	console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
// 	return Object.assign(this, {
// 		isDomestic: isDomestic,
// 	});
// }
// console.log(makeDomestic.bind(dog, true)());
// console.log(makeDomestic.call(bird, false));
// console.log(makeDomestic.apply(bird, [false]));
// // =========

// Task 3.
// const footballer = {
// 	fullName: "Cristiano Ronaldo",
// 	attack: () => {
// 		console.log("####: this attack", this);

// 		() => {
// 			console.log("####: this", this);

// 			console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
// 		};
// 	},
// 	scoreGoal(sound) {
// 		console.log(`${this.fullName} забил гол! Вот это да!`);
// 		this.celebrate(sound);
// 	},
// 	celebrate(sound) {
// 		console.log(sound);
// 	},
// 	goToSubstitution: function (newPlayer) {
// 		console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
// 	},
// };

// class Footballer {
// 	constructor(fullName) {
// 		this.fullName = fullName;
// 	}

// 	attack() {
// 		console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
// 	}

// 	scoreGoal(sound) {
// 		console.log(`${this.fullName} забил гол! Вот это да!`);
// 		this.celebrate(sound);
// 	}
// 	celebrate(sound) {
// 		console.log(sound);
// 	}
// 	goToSubstitution(newPlayer) {
// 		console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
// 	}
// }
// const footballer = new Footballer("Cristiano Ronaldo");
// const attack = footballer.attack;
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;

// // console.log("####: attack", attack);
// // console.log("####: score", score);
// // console.log("####: substitute", substitute);

// // attack.bind(footballer)();
// attack();

// score.call(footballer, "Сиииии");
// substitute.apply(footballer, ["Paulo Dibala"]);

// =========

// dop task

// const attacker = {
// 	archer: 30,
// 	footSoldier: 55,
// 	cavalry: 10,
// 	artillery: 3,
// 	checkChancesToWin(defender) {
// 		let chance = 0;
// 		for (const key in this) {
// 			if (defender.hasOwnProperty(key)) {
// 				this[key] > defender[key] ? chance++ : false;
// 			}
// 		}
// 		return [chance, Object.values(defender).length];
// 	},
// 	improveArmy() {
// 		for (const key in this) {
// 			if (typeof this[key] === "number") {
// 				this[key] += 5;
// 			}
// 		}
// 	},
// 	attack(defender) {
// 		const [ourArmyChances, maximumChances] = this.checkChancesToWin(defender);
// 		if ((maximumChances / 100) * 70 > ourArmyChances) {
// 			this.improveArmy();
// 			console.log(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`);
// 		} else {
// 			console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
// 		}
// 	},
// };

// const defender = {
// 	archer: 33,
// 	footSoldier: 50,
// 	cavalry: 40,
// 	artillery: 10,
// };

// attacker.attack(defender);
// attacker.attack(defender);
// attacker.attack(defender);
// attacker.attack(defender);

// ========
