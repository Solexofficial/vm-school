const template = `<div class="select-dropdown select-dropdown--${this.id}">
<button class="select-dropdown__button select-dropdown__button--${this.id}">
    <span class="select-dropdown select-dropdown--${this.id}">Выберите Элемент</span>
</button>
<ul class="select-dropdown__list select-dropdown__list--${this.id}">
    <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
    <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
    <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
    <li class="select-dropdown__list-item" data-value="4">HTML</li>
    <li class="select-dropdown__list-item" data-value="5">CSS</li>
</ul>
</div>`;

class CustomSelect {
	#id;
	#options;
	#currentSelectedOption;

	constructor(id, options) {
		this.#id = id;
		this.#options = options;
	}

	render(container) {
		container.innerHTML = `<div class="select-dropdown select-dropdown--${this.#id}">
    <button class="select-dropdown__button select-dropdown__button--${this.#id}">
        <span class="select-dropdown select-dropdown--${this.#id}">Выберите Элемент</span>
    </button>
    <ul class="select-dropdown__list select-dropdown__list--${this.#id}">
        <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
        <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
        <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
        <li class="select-dropdown__list-item" data-value="4">HTML</li>
        <li class="select-dropdown__list-item" data-value="5">CSS</li>
    </ul>
    </div>`;
	}

	get selectedValue() {
		return this.#currentSelectedOption;
	}

	set setSelectedOption(value) {
		for (const key in this.#options) {
			if (this.#options[key].value === value) {
				this.#currentSelectedOption = this.#options[key];
			}
		}
	}
}

const options = [
	{ value: 1, text: "JavaScript" },
	{ value: 2, text: "NodeJS" },
	{ value: 3, text: "ReactJS" },
	{ value: 4, text: "HTML" },
	{ value: 5, text: "CSS" },
];
const customSelect = new CustomSelect("123", options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);

const selectButton = document.querySelector(".select-dropdown__button");
const dropList = document.querySelector(".select-dropdown__list");

selectButton.addEventListener("click", () => {
	dropList.classList.toggle("active");
});

dropList.addEventListener("click", event => {
	const { target } = event;
	const dataValue = +target.dataset.value;
	const $li = document.querySelector(`.select-dropdown__list-item[data-value="${dataValue}"]`);
	const $listItems = document.querySelectorAll(".select-dropdown__list-item");

	$listItems.forEach(item => item.classList.remove("selected"));
	$li.classList.add("selected");
	customSelect.setSelectedOption = dataValue;
	console.log("#selectedValue", customSelect.selectedValue);
});
