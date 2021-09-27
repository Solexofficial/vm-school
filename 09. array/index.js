// =========Task 1.

// const getSumOfSequence = number => {
// 	let arrayOfNumbers = [];
// 	for (let i = 0; i <= number; i++) {
// 		arrayOfNumbers.push(i);
// 	}
// 	return arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1];
// };

// console.log(getSumOfSequence(5));

// ======================

// =========Task 2.
// const peopleWaiting = ["Кристина", "Олег", "Кирилл", "Мария", "Светлана", "Артем", "Глеб"];

// const indexLastPersonForService = peopleWaiting.indexOf("Кирилл");
// let i = 0;
// while (peopleWaiting.length > 0) {
// 	if (i <= indexLastPersonForService) {
// 		i++;
// 		giveParcel(peopleWaiting[0], peopleWaiting);
// 	} else {
// 		i++;
// 		leaveQueueWithoutParcel(peopleWaiting[0], peopleWaiting);
// 	}
// }

// function giveParcel(name, queue) {
// 	alert(`${name} получил(а) посылку. В очереди осталось ${queue.length - 1} человек.`);
// 	queue.shift(name);
// }

// function leaveQueueWithoutParcel(name, queue) {
// 	alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
// 	queue.shift(name);
// }

// ======================

// =========Task 3.
// const numbers = [10, 4, 100, -5, 54, 2];

// task 3.1 (for)
// let resultSum = 0;
// let resultArr = [];
// for (let i = 0; i < numbers.length; i++) {
// 	resultArr.push(numbers[i] ** 3);
// 	resultSum += resultArr[i];
// }
// console.log(resultSum);

// task 3.2 (for of)
// let result = 0;
// for (let num of numbers) {
// 	result += num ** 3;
// }
// console.log(result);

// task 3.3 (forEach) {
// let result = 0;
// numbers.forEach(num => {
// 	result += num ** 3;
// });
// console.log(result);

// task 3.4 (reduce)
// console.log(
// 	numbers.reduce((acc, cur) => {
// 		acc += cur ** 3;
// 		return acc;
// 	}, 0)
// );

// ======================

// =========Task 4.
// const coffees = ["Latte", "Cappuccino", "Americano"];

// let coffeeName = prompt("Поиск по названию:");
// coffeeName = coffeeName.charAt(0).toUpperCase() + coffeeName.slice(1).toLowerCase();

// const idx = coffees.findIndex(name => name === coffeeName);

// if (idx === -1) {
// 	console.log("К сожалению, такого вида кофе нет в наличии");
// } else {
// 	console.log(`Держите ваш любимый кофе ${coffeeName}. Он ${idx + 1}-й по популярности в нашей кофейне.`);
// }

// ======================

// =========Task 5.

// const coffees = ["Latte", "Cappuccino", "Americano"];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map(num => num + 0.5);

// coffees.forEach((name, idx, arr) => {
// 	console.log(`Кофе ${name} сейчас стоит ${updatedPrices[idx]} евро.`);
// });

// ======================

// =========Task 6.
// const clientsEstimations = [];

// function askClientToGiveEstimation() {
// 	let rating = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
// 	if (!isNaN(Number(rating))) {
// 		clientsEstimations.push(rating);
// 	}
// }
// for (let i = 0; i < 5; i++) {
// 	askClientToGiveEstimation();
// }

// const goodEstimations = clientsEstimations.filter(rating => rating > 5).length;
// const notGoodEstimations = clientsEstimations.filter(rating => rating <= 5).length;
// console.log(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);

// =========Task 7.
const goals = [8, 1, 1, 3, 2, -1, 5];

function showBestMatch(goals) {
	const maxGoals = Math.max(...goals);
	const numberOfBestMatch = goals.indexOf(maxGoals) + 1;
	return alert(
		`Самый результативный матч был под номером ${numberOfBestMatch}. В нем было забито ${maxGoals} гол(ов).`
	);
}

function showWorstMatches(goals) {
	const minGoals = Math.min(...goals.filter(goals => goals >= 0));
	const worstMatchesNumber = goals
		.map((goal, idx) => {
			if (goal === minGoals) {
				return idx + 1;
			}
		})
		.filter(Number)
		.join(",");
	return alert(
		`Самые не результативные матчи были под номерами ${worstMatchesNumber}. В каждом из них было забито по ${minGoals} мячу(а).`
	);
}

function showTotalGoals(goals) {
	const totalGoals = goals.filter(num => num >= 0).reduce((acc, cur) => acc + cur, 0);
	return alert(`Общее количество голов за сезон равно ${totalGoals}`);
}

function showAutoDefeat(goals) {
	const autoDefeat = goals.includes(-1) ? "да" : "нет";
	return alert(`Были автоматические поражения: ${autoDefeat}`);
}

function showAverageTotalGoals(goals) {
	const averageTotalGoals = (goals.reduce((acc, cur) => acc + cur, 0) / goals.length).toFixed(2);
	return alert(`Среднее количество голов за матч равно ${averageTotalGoals}`);
}

function showSortGoals(goals) {
	const sortedGoals = [...goals].sort((a, b) => a - b).join(", ");
	return alert(sortedGoals);
}

function showMatchesStatics(matches) {
	showBestMatch(matches);
	showWorstMatches(matches);
	showTotalGoals(matches);
	showAutoDefeat(matches);
	showAverageTotalGoals(matches);
	showSortGoals(matches);
}

showMatchesStatics(goals);
console.log("### arr goals not mutation: ", goals);

// ======================

// ======================

// let matrix = [];
// for (let i = 0; i < 3; i++) {
// 	matrix[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		matrix[i].push(j);
// 	}
// }
// console.log(matrix);

// function getMathResult(expression) {
// 	const validOp = ['>', '<', '=', '+', '-', '*', '/'];
// 	expression = expression.filter(value => !isNaN(Number(value)) || validOp.includes(value));
// 	console.log(expression)
// 	let [num1, op, num2] = expression;
// 	num1 = Number(num1);
// 	num2 = Number(num2);
// 	switch(op) {
// 		case '+': return num1 + num2;
// 		case '-': return num1 - num2;
// 		case '*': return num1 * num2;
// 		case '/': return num1 / num2;
// 		case '>': return num1 > num2;
// 		case '<': return num1 < num2;
// 		case '=': return num1 === num2;
// 		default: console.error('Ошибка, введите операцию');
// 	}
// }

// console.log(getMathResult(['100', 'hello', 'javascript', , 'help200', '+', 4]))
