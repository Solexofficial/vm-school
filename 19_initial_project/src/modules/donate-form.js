import { Settings as money } from "../core/constants/settings";

class DonateForm {
	constructor(totalAmount, createNewDonate) {
		this.totalAmount = totalAmount;
		this.createNewDonate = createNewDonate;
	}

	render() {
		const $form = document.createElement("form");
		$form.className = "donate-form";
		$form.innerHTML = `
       <h1 id="total-amount">${this.totalAmount}${money.currency}</h1>
       <label class="donate-form__input-label">
           Введите сумму в ${money.currency}
           <input
               class="donate-form__donate-input"
               name="amount"
               type="number"
               max="100"
               min="0"
               required=""
           >
       </label>
       <button class="donate-form__submit-button" type="submit">
           Задонатить
       </button>`;
		document.body.append($form);
	}

	updateTotalAmount(newAmount) {
		this.totalAmount += Number(newAmount);
		const $totalAmount = document.querySelector("#total-amount");
		$totalAmount.innerHTML = `<b>${this.totalAmount}${money.currency}</b>`;
	}
}

export default DonateForm;
