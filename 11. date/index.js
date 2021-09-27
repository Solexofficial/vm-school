function getDateFormat(date, separator = ".") {
	let day = date.getDate();
	let months = date.getMonth() + 1;
	let year = date.getFullYear();
	day = day < 10 ? "0" + day : day;
	months = months < 10 ? "0" + months : months;

	return `${day}${separator}${months}${separator}${year}`;
}

const date = new Date();
// console.log(getDateFormat(date));

// // utils
// function convertMsToDays(ms) {
// 	return Math.floor(ms / 86_400_000);
// }
// //

// function getDaysBeforeBirthday(nextBirthDayDate) {
// 	const date = new Date();
// 	const countDays = convertMsToDays(nextBirthDayDate.getTime()) - convertMsToDays(date.getTime());
// 	return `Осталось ${countDays} дней до дня рождения.`;
// }

// const nextBirthDay = new Date("January 11, 2022");

// console.log(getDaysBeforeBirthday(nextBirthDay));

// function convertMsToDays(ms) {
// 	return Math.floor(ms / 86_400_000);
// }

// const date = new Date("July 15, 2021");

// function addDays(date, days = 1) {
// 	const ms = days * 86400000;
// 	return new Date(date.getTime() + ms);
// }

// console.log(addDays(date, 2));

function allowVisa(clients) {
	const dateNow = new Date();

	return clients.filter(person => {
		if (!person.criminalRecord) {
			const correctPassportExpirationDate = person.passportExpiration.split(".").reverse().join("-");
			const passportExpiration = new Date(correctPassportExpirationDate);

			if (dateNow.getTime() < passportExpiration.getTime()) {
				return person;
			}
		}
	});
}

const peopleWithVisa = [
	{
		firstName: "Stasia",
		lastName: "Ward",
		criminalRecord: true,
		passportExpiration: "19.06.2023",
	},
	{
		firstName: "Elliot",
		lastName: "Baker",
		criminalRecord: false,
		passportExpiration: "04.06.2021",
	},
	{
		firstName: "Leighann",
		lastName: "Scott",
		criminalRecord: true,
		passportExpiration: "31.07.2022",
	},
	{
		firstName: "Nick",
		lastName: "Pop",
		criminalRecord: false,
		passportExpiration: "31.12.2021",
	},
];

const result = allowVisa(peopleWithVisa);
console.log("result", result);
