import "./index.css";
import App from "./src/modules/app";

const app = new App();
app.run();

const $donateForm = document.querySelector(".donate-form");
$donateForm.addEventListener("submit", e => {
	e.preventDefault();
	const $donateInput = document.querySelector(".donate-form__donate-input");
	const value = $donateInput.value;
	const date = new Date();

	app.form.createNewDonate({
		amount: value,
		date: date,
	});
	$donateInput.value = "";
});
