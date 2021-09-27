// const users = [
// 	{
// 		username: "David",

// 		status: "online",

// 		lastActivity: 10,
// 	},
// 	{
// 		username: "Lucy",

// 		status: "offline",

// 		lastActivity: 22,
// 	},
// 	{
// 		username: "Bob",

// 		status: "online",

// 		lastActivity: 104,
// 	},
// ];

// const onlineUsers = users.filter(user => user.status === "online");
// const usersOnlineNames = onlineUsers.map(user => user.username).join(", ");
// console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

// const student = {
// 	fullName: "Максим",
// 	experienceInMonths: 12,
// 	stack: ["HTML", "CSS", "JavaScript", "React"],
// };

// function giveJobToStudent(student, jobName) {
// 	console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
// 	// return {
// 	//   ...student,
// 	//   job: jobName,
// 	// }
// 	return Object.assign(student, {
// 		job: jobName,
// 	});
// }

// const updatedStudent = giveJobToStudent(student, "веб-разработчик");
// console.log(updatedStudent);

// const student = {
// 	name: "Maxim",
// 	programmingLanguage: "JavaScript",
// };

// function handleObjects(obj, key, action) {
// 	switch (action) {
// 		case "get":
// 			return obj[key];
// 		case "add": {
// 			obj[key] = "";
// 			return obj;
// 		}
// 		case "delete": {
// 			delete obj[key];
// 			return obj;
// 		}
// 		default:
// 			return obj;
// 	}
// }

// const result = handleObjects(student, "programmingLanguage", "delete");
// console.log("result", result);
// const result2 = handleObjects(student, "name", "get");
// console.log("result2", result2);
// const result3 = handleObjects(student, "job", "add");
// console.log("result3", result3);

// function getKiller(suspectinfo, deadPeople) {
// 	for (const name in suspectinfo) {
// 		const suspectInfoNames = suspectinfo[name]
// 			.filter(name => deadPeople.includes(name))
// 			.sort()
// 			.join("");
// 		const deadPeoples = deadPeople.sort().join("");

// 		if (suspectInfoNames === deadPeoples) return `Убийца ${name}`;
// 	}
// }

// console.log(
// 	getKiller(
// 		{
// 			James: ["Jacob", "Bill", "Lucas"],
// 			Johnny: ["David", "Kyle", "Lucas"],
// 			Peter: ["Lucy", "Kyle"],
// 		},
// 		["Lucas", "Bill"]
// 	)
// ); // Убийца James

// console.log(
// 	getKiller(
// 		{
// 			Brad: [],
// 			Megan: ["Ben", "Kevin"],
// 			Finn: [],
// 		},
// 		["Ben"]
// 	)
// ); // Убийца Megan

//==== utils
// function getRandomNumberInRange(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }
// ====

// const getWinner = (applicants, winnerObject) => {
// 	const lotteryTicketsNumbers = Object.keys(applicants);
// 	const randomWinner = getRandomNumberInRange(0, lotteryTicketsNumbers.length);

// 	return Object.assign(applicants[lotteryTicketsNumbers[randomWinner]], winnerObject);
// };

// const todaysWinner = {
// 	prize: "10 000$",
// };

// const winnerApplicants = {
// 	"001": {
// 		name: "Максим",
// 		age: 25,
// 	},
// 	201: {
// 		name: "Светлана",
// 		age: 20,
// 	},
// 	304: {
// 		name: "Екатерина",
// 		age: 35,
// 	},
// };

// const resultWinner = getWinner(winnerApplicants, todaysWinner);
// console.log("resultWinner", resultWinner); // { prize: '10 000$', name: 'Максим', age: 25 }

// const giveTalonsInOrder = (patients, orders) => {
// 	patients.sort((a, b) => a["id"] - b["id"]);

// 	return orders.reduce((acc, cur, idx) => {
// 		acc.push(patients[cur - 1]);
// 		return acc;
// 	}, []);
// };

// const ordersArr = [4, 2, 1, 3];
// const people = [
// 	{ id: 1, name: "Максим" },
// 	{ id: 3, name: "Николай" },
// 	{ id: 2, name: "Ангелина" },
// 	{ id: 4, name: "Виталий" },
// ];

// const result = giveTalonsInOrder(people, ordersArr);
// console.log("result", result);
// /* Возвращает массив
// [
//    { id: 4, name: 'Виталий' },
//    { id: 2, name: 'Николай' },
//    { id: 1, name: 'Максим' },
//    { id: 3, name: 'Ангелина' }
// ]
// */

// Global object
// const groceries = {
// 	"Orange Juice": {
// 		price: 1.5,
// 		discount: 10,
// 	},
// 	Chocolate: {
// 		price: 2,
// 		discount: 0,
// 	},
// more items...
// };
// ========

// const getTotalPriceOfShoppingBag = shoppingBag => {
// 	for (const obj of shoppingBag) {
// 		if (groceries.hasOwnProperty(obj.product)) {
// 			const priceWithDiscount =
// 				groceries[obj.product].price - (groceries[obj.product].price * groceries[obj.product].discount) / 100;
// 			obj.price = priceWithDiscount * obj.quantity;
// 		}
// 	}
// 	const totalShoppingBagPrice = shoppingBag.reduce((acc, cur) => acc + cur.price, 0).toFixed(2);
// 	return totalShoppingBagPrice;
// };

// const shoppingBag = [
// 	{ product: "Chocolate", quantity: 3 },
// 	{ product: "Orange Juice", quantity: 23 },
// ];

// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
// console.log("totalPrice", totalPrice); // Возвращает 37.05

// utils
function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
// =====

function startGame(heroPlayer, enemyPlayer) {
	while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
		getRandomNumberInRange(0, 2) === 0 ? heroPlayer.heatHero() : enemyPlayer.heatHero();

		if (enemyPlayer.health <= 0) {
			return `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`;
		} else if (heroPlayer.health <= 0) {
			return `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`;
		}
	}
}

const hero = {
	name: "Batman",
	health: 100,
	heatHero() {
		return (this.health -= 10);
	},
};

const enemy = {
	name: "Joker",
	health: 100,
	heatHero() {
		return (this.health -= 10);
	},
};

console.log(startGame(hero, enemy));

const obj = {
	1: "hello",
};

console.log(obj.name);
