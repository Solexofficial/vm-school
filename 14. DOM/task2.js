// IIFE - clean global object

(function () {
	document.addEventListener("DOMContentLoaded", () => {
		let tasks = [
			{
				id: 1,
				completed: false,
				text: "Посмотреть новый урок по JavaScript",
			},
			{
				id: 2,
				completed: false,
				text: "Выполнить тест после урока",
			},
			{
				id: 3,
				completed: false,
				text: "Выполнить ДЗ после урока",
			},
		];

		const $body = document.querySelector("body");
		const $taskList = document.querySelector(".tasks-list");
		const $createTaskBlock = document.querySelector(".create-task-block");

		function renderTasks() {
			$taskList.innerHTML = "";
			tasks.forEach(task => {
				const { id, text } = task;

				const taskContent = renderTaskContent(id, text);
				$taskList.innerHTML += taskContent;
			});
		}

		function renderTaskContent(id, text) {
			return `<div class="task-item" data-task-id="${id}">
  <div class="task-item__main-container">
    <div class="task-item__main-content">
      <form class="checkbox-form">
        <input class="checkbox-form__checkbox" type="checkbox" id="task-${id}">
        <label for="task-${id}"></label>
      </form>
      <span class="task-item__text">${text}</span>
    </div>
    <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${id}">
      Удалить
    </button>
  </div>
</div>`;
		}

		function removeErrorMessage() {
			const $errorBlockEl = document.querySelector(".error-message-block");
			if ($errorBlockEl) $errorBlockEl.remove();
		}

		function showErrorMessage(message) {
			removeErrorMessage();
			const $errorBlock = document.createElement("span");
			$errorBlock.classList.add("error-message-block");
			$createTaskBlock.append($errorBlock);
			$errorBlock.textContent = message;
		}

		function validateForm(input) {
			const $errorBlock = document.createElement("span");
			$errorBlock.classList.add("error-message-block");
			const tasksText = Object.values(tasks).map(task => task.text);

			if (input.value === "") {
				showErrorMessage("Название задачи не должно быть пустым");
			} else if (tasksText.includes(input.value)) {
				showErrorMessage("Задача с таким названием уже существует.");
			} else {
				return true;
			}
		}

		function createConfirmModal(parent) {
			const modal = document.createElement("div");
			modal.classList.add("modal-overlay");
			modal.classList.add("modal-overlay_hidden");

			const htmlContent = `
  <div class="delete-modal">
    <h3 class="delete-modal__question">
      Вы действительно хотите удалить эту задачу?
    </h3>
    <div class="delete-modal__buttons">
      <button class="delete-modal__button delete-modal__cancel-button">
        Отмена
      </button>
      <button class="delete-modal__button delete-modal__confirm-button">
        Удалить
      </button>
    </div>
  </div>`;
			modal.innerHTML = htmlContent;
			parent.append(modal);
		}

		function taskRemove(idTaskDelete) {
			const newTasks = tasks.filter(task => task.id !== idTaskDelete);
			tasks = [...newTasks];
			renderTasks();
		}

		function toggleTheme() {
			const $body = document.querySelector("body");
			$body.classList.toggle("dark-theme");

			const $taskItems = document.querySelectorAll(".task-item");
			const $buttons = document.querySelectorAll("button");

			if ($body.classList.contains("dark-theme")) {
				$body.style.backgroundColor = "#24292E";
				$taskItems.forEach(task => (task.style.color = "#fff"));
				$buttons.forEach(button => (button.style.border = "1px solid #fff"));
			} else {
				$body.style.backgroundColor = "initial";
				$taskItems.forEach(task => (task.style.color = "initial"));
				$buttons.forEach(button => (button.style.border = "none"));
			}
		}

		//==== Listeners
		function initRemoveTasksListener() {
			const $modal = document.querySelector(".modal-overlay");
			const $cancel = document.querySelector(".delete-modal__cancel-button");
			const $delete = document.querySelector(".delete-modal__confirm-button");

			let idDelete = 0;

			$taskList.addEventListener("click", event => {
				event.stopPropagation();
				const deleteBtn = event.target.closest(".task-item__delete-button");

				if (deleteBtn) {
					idDelete = +deleteBtn.dataset.deleteTaskId;
					$modal.classList.remove("modal-overlay_hidden");
				}
			});

			$cancel.addEventListener("click", event => {
				event.preventDefault();
				$modal.classList.add("modal-overlay_hidden");
			});

			$delete.addEventListener("click", event => {
				event.preventDefault();
				taskRemove(idDelete);
				$modal.classList.add("modal-overlay_hidden");
			});
		}

		$createTaskBlock.addEventListener("submit", event => {
			event.preventDefault();
			const $taskText = document.querySelector(".create-task-block__input");
			const validate = validateForm($taskText);

			if (validate) {
				let uniqID = 1;
				uniqID = tasks[tasks.length - 1]?.id + 1 || 1;
				tasks.push({
					id: uniqID,
					completed: false,
					text: $taskText.value,
				});
				const taskContent = renderTaskContent(uniqID, $taskText.value);
				removeErrorMessage();

				$taskList.innerHTML += taskContent;
				$taskText.value = "";
				renderTasks();
			}
		});

		document.addEventListener("keydown", e => {
			console.log("####: e", e);

			if (e.code === "Tab") toggleTheme();
		});
		//====

		// init project
		renderTasks();
		createConfirmModal($body);
		initRemoveTasksListener();
	});
})();
