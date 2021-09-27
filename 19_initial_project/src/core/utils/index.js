var moment = require("moment");

export function calculateSumOfNumbers(donates) {
	return donates.map(donate => Number(donate.amount)).reduce((acc, cur) => acc + cur, 0);
}

export function getFormattedTime(date) {
	return moment(date).format("MMMM Do YYYY, h:mm:ss a");
}
