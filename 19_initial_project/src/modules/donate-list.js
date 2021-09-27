import { Settings } from "../core/constants/settings";
import { getFormattedTime as formatDate } from "../core/utils";

class DonateList {
	constructor(donates) {
		this.donates = donates;
	}

	render() {
		const $donatesContainer = document.createElement("div");
		$donatesContainer.className = "donates-container";

		const $title = document.createElement("h2");
		$title.className = "donates-container__title";
		$title.textContent = "Список донатов";

		const $donates = document.createElement("div");
		$donates.className = "donates-container__donates";

		$donatesContainer.append($title);
		$donatesContainer.append($donates);
		document.body.append($donatesContainer);
		this.renderDonates();
	}

	renderDonates() {
		const $donates = document.querySelector(".donates-container__donates");
		for (const donate of this.donates) {
			let { amount, date } = donate;
			date = formatDate(date);
			const $el = document.createElement("div");
			$el.className = "donate-item";
			$el.innerHTML = `${date} - <b>${amount}${Settings.currency}</b>`;
			$donates.append($el);
		}
	}

	updateDonates(updatedDonates) {
		const $donatesContainer = document.querySelector(".donates-container__donates");
		$donatesContainer.innerHTML = "";
		this.donates = updatedDonates;
		this.renderDonates();
	}
}

export default DonateList;
