import DonateForm from "./donate-form";
import DonateList from "./donate-list";

import { calculateSumOfNumbers } from "../core/utils";

class App {
	#mockDonates = [
		{ amount: 4, date: new Date() },
		{ amount: 20, date: new Date() },
		{ amount: 3, date: new Date() },
		{ amount: 1, date: new Date() },
	];
	constructor(state) {
		this.state = {
			totalAmount: calculateSumOfNumbers(this.#mockDonates),
			donates: this.#mockDonates,
		};
		this.form = this.createForm();
		this.donateList = this.createDonateList();
	}
	run() {
		this.form.render();
		this.donateList.render();
	}

	createForm() {
		return new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this));
	}

	createDonateList() {
		return new DonateList(this.state.donates);
	}

	createNewDonate(newDonate) {
		this.state.donates.push(newDonate);
		this.form.updateTotalAmount(newDonate.amount);
		this.donateList.updateDonates(this.state.donates);
	}
}

export default App;
