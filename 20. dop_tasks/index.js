// //? Task 1

// // utils
// function getRandomNumberInRange(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const mathTest = createMathTest(-100, +100);

// function createMathTest(minNum = 0, maxNum = 10) {
// 	const operations = ["+", "-", "*", "/"];
// 	const num1 = getRandomNumberInRange(minNum, maxNum);
// 	const num2 = getRandomNumberInRange(minNum, maxNum);
// 	const operation = operations[getRandomNumberInRange(0, operations.length - 1)];
// 	const expression = `${num1} ${operation} ${num2}`;
// 	const obj = {
// 		expression: expression,
// 		result: 0,
// 	};

// 	switch (operation) {
// 		case "+":
// 			obj.result = num1 + num2;
// 			break;
// 		case "-":
// 			obj.result = num1 - num2;
// 			break;
// 		case "*":
// 			obj.result = num1 * num2;
// 			break;
// 		case "/":
// 			obj.warning = "Введите результат выражения с двумя знаками после запятой, Например: 9.83";
// 			obj.result = +(num1 / num2).toFixed(2);
// 			break;
// 		default:
// 			console.error("Something wrong!");
// 	}

// 	return obj;
// }
// console.log(mathTest);

// const { expression, result, warning } = mathTest;
// alert(`Решите выражение ${expression}`);
// let userAnswer = "";
// if (warning) {
// 	userAnswer = Number(prompt(`${warning}`));
// } else {
// 	userAnswer = Number(prompt("Введите результат выражения"));
// }

// result === userAnswer
// 	? alert(`Отлично, вы справились! Ваш ответ: ${userAnswer}`)
// 	: alert(`Мимо! Ваш ответ: ${userAnswer}, Правильный ответ: ${result}`);

//? Task 2.
// const range = [1016, 1937];

// const getWinNumber = ([min, max]) => {
// 	let winNumber = 0;
// 	for (let i = min; i < max; i++) {
// 		const condition = i % 3 === 0 && i % 7 === 0 && i % 2 !== 0 && i % 5 !== 0;
// 		if (condition) {
// 			if (i > winNumber) {
// 				winNumber = i;
// 			}
// 		}
// 	}
// 	return winNumber;
// };

// console.log(getWinNumber(range));

//? Task 3*.

// function groupBy(arr, fn) {
// 	const result = arr.reduce((acc, cur) => {
// 		acc[fn(cur)] = [...new Set(arr.filter(el => fn(el) === fn(cur)).sort((a, b) => a - b))];
// 		return acc;
// 	}, {});
// 	return result;
// }

// console.log(groupBy([2.3, 2.2, 3.4, 3.5, 3.6, 6.7, 1.2, 2.4, 2.4], Math.floor));
// result
// {
//  2: [2.3, 2.2],
//  3: [3.4]
// }

// ? Task 4

// console.log(isEqualSymbols("адрес", "среда")); // true
// console.log(isEqualSymbols("ноутбук", "программист")); // false

// function isEqualSymbols(str1, str2) {
// 	if (str1.length !== str2.length) return false;
// 	return str1.split("").filter(letter => str2.split("").includes(letter)).length === str1.length;
// }

// // ? Task 5
// function convertMsToDays(ms) {
// 	return Math.floor(ms / 86_400_000);
// }

// const event = prompt("Введите дату в формате dd.mm.yyyy");
// const eventDate = new Date(event.split(".").reverse().join(" "));
// const eventName = prompt("Введите название события");
// const dateNow = new Date();
// const daysLeft = convertMsToDays(eventDate.getTime() - dateNow.getTime());
// let timerId = null;

// const countDownTimer = () => {
// 	const diff = eventDate - new Date();
// 	if (diff <= 0) {
// 		clearInterval(timerId);
// 	}
// 	const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
// 	const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
// 	const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
// 	const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
// 	console.log(
// 		`Осталось до события: "${eventName}" Дней: ${days}, часов: ${hours}, минут: ${minutes}, секунд: ${seconds}`
// 	);
// };

// timerId = setInterval(countDownTimer, 1000);

//? Task 6.

// const oddSort = arr => {
// 	const oddNumbers = [];
// 	arr
// 		.filter((v, i) => v % 2 && oddNumbers.push(i))
// 		.sort((a, b) => a - b)
// 		.forEach((v, i) => (arr[oddNumbers[i]] = v));

// 	return arr;
// };

// console.log(oddSort([7, 3, 4, 9, 5, 2, 17]));
// // [3, 5, 4, 7, 9, 2, 17]

// // ? Task 7.

// const unique = arr => {
// 	return [...new Set(arr)];
// };

// console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]

//? Dop-tasks 1

// //utils
// const getRandomNumber = (min, max) => {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const randomHEX = () => {
// 	const colors = ["r", "g", "b"];
// 	return "#" + colors.map(color => getRandomNumber(0, 255).toString(16).padStart(2, 0)).join("");
// };

// console.log(randomHEX());

// document.body.style.backgroundColor = randomHEX();

// ? Dop-tasks 2

// function sleep(ms) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log(`after ${ms}ms`);
// 			resolve();
// 		}, ms);
// 	});
// }
// async function start() {
// 	console.log("start");
// 	await sleep(3000);
// 	console.log("end");
// }
// start();

// ? Dop-tasks 3
// const first = [1, 2, 3, 4];
// const second = [3, 4, 5, 6];
// function intersection(a, b) {
// 	return a.filter(value => b.includes(value));
// }
// console.log(intersection(first, second)); // -> [3, 4]

// ? Dop-task 4
const urlParams = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=green&a=1";
function toObjectParams(str) {
	return str.split("&").reduce((acc, pair) => {
		let [key, value] = pair.split("=");
		value = decodeURIComponent(value);
		acc[key] = value.includes(".") ? toObjectParams(value) : value;
		return acc;
	}, {});
}
console.log(toObjectParams(urlParams));
// Результат
// {
// 	a: "1",
// 	user: {
// 		favoritecolor: "green",
// 		name: {
// 			firstname: "Bob",
// 			lastname: "Smith",
// 		},
// 	},
// };

// // ? Dop-task 5
// function addBase(base) {
// 	return function (num) {
// 		return base + num;
// 	};
// }
// const addTen = addBase(10);
// console.log(addTen(5)); //15
// console.log(addTen(80)); //90
// console.log(addTen(-5)); //5
