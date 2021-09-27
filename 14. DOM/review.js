const tasks = [
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

const createTaskItem = (taskId, taskText) => {
	const taskItem = document.createElement("div");
	taskItem.className = "task-item";
	taskItem.dataset.taskId = taskId;

	const taskItemMainContainer = document.createElement("div");
	taskItemMainContainer.className = "task-item__main-container";

	const taskItemMainContent = document.createElement("div");
	taskItemMainContent.className = "task-item__main-content";

	taskItem.append(taskItemMainContainer);
	taskItemMainContainer.append(taskItemMainContent);

	const taskCheckBoxForm = document.createElement("form");
	taskCheckBoxForm.className = "checkbox-form";

	const inputCheckbox = document.createElement("input");
	inputCheckbox.className = "checkbox-form__checkbox";
	inputCheckbox.type = "checkbox";
	inputCheckbox.id = `id="task-${taskId}"`;

	const labelCheckbox = document.createElement("label");
	labelCheckbox.htmlFor = taskId;

	const taskItemText = document.createElement("span");
	taskItemText.className = "task-item__text";
	taskItemText.textContent = taskText;

	const taskItemDelButton = document.createElement("button");
	taskItemDelButton.className = "task-item__delete-button default-button delete-button";
	taskItemDelButton.textContent = "Удалить";
	taskItemDelButton.dataset.deleteTaskId = taskId;

	taskItemMainContent.append(taskCheckBoxForm, taskItemText);
	taskCheckBoxForm.append(inputCheckbox, labelCheckbox);
	taskItemMainContainer.append(taskItemDelButton);

	return taskItem;
};

const createTaskForm = document.querySelector(".create-task-block");

const createErrorBlock = errorMessage => {
	const errorBlock = document.createElement("span");
	errorBlock.className = "error-message-block";
	errorBlock.innerText = errorMessage;
	return errorBlock;
};

createTaskForm.addEventListener("submit", e => {
	e.preventDefault();
	const newTaskText = (e.target.taskName.value || "").trim();

	const isTaskExists = tasks.some(task => task.text === newTaskText);

	if (!newTaskText) {
		const errorBlock = createErrorBlock("Название задачи не должно быть пустым");
		createTaskForm.append(errorBlock);
	} else if (isTaskExists) {
		const errorBlock = createErrorBlock("Задача с таким названием уже существует.");
		createTaskForm.append(errorBlock);
	} else if (newTaskText && !isTaskExists) {
		const newTask = {
			id: tasks.length + 1,
			text: newTaskText,
		};
		tasks.push(newTask);

		const taskItem = createTaskItem(newTask.id, newTask.text);
		tasksListContainer.append(taskItem);

		const errorBlock = createTaskForm.querySelector(".error-message-block");

		if (errorBlock) {
			errorBlock.remove();
		}
	}
});

const tasksListContainer = document.querySelector(".tasks-list");
tasks.forEach(task => {
	const taskItem = createTaskItem(task.id, task.text);
	tasksListContainer.append(taskItem);
});

const createDeleteModal = () => {
	const modal = document.createElement("div");
	modal.className = "modal-overlay modal-overlay_hidden";

	const deleteModal = document.createElement("div");
	deleteModal.className = "delete-modal";

	modal.append(deleteModal);

	const deleteQuestion = document.createElement("h3");
	deleteQuestion.className = "delete-modal__question";
	deleteQuestion.textContent = "Вы действительно хотите удалить эту задачу?";

	const deleteModalButtons = document.createElement("div");
	deleteModalButtons.className = "delete-modal__buttons";

	deleteModal.append(deleteQuestion, deleteModalButtons);

	const cancelButton = document.createElement("button"),
		confirmButton = document.createElement("button");

	cancelButton.className = "delete-modal__button delete-modal__cancel-button";
	cancelButton.textContent = "Отмена";
	confirmButton.className = "delete-modal__button delete-modal__confirm-button";
	confirmButton.textContent = "Удалить";

	deleteModalButtons.append(cancelButton, confirmButton);
	document.querySelector("body").append(modal);

	return {
		modal,
		cancelButton,
		confirmButton,
		deleteModal,
	};
};

let targetId = null;
const { deleteModal, cancelButton, confirmButton, modal } = createDeleteModal();

cancelButton.addEventListener("click", () => {
	modal.classList.add("modal-overlay_hidden");
});

tasksListContainer.addEventListener("click", e => {
	const deleteButton = e.target.classList.contains("task-item__delete-button");
	if (deleteButton) {
		targetId = +e.target.dataset.deleteTaskId;
		modal.classList.remove("modal-overlay_hidden");
	}
});

confirmButton.addEventListener("click", e => {
	const deleteIndex = tasks.findIndex(index => index.id === +targetId);
	if (deleteIndex >= 0) {
		tasks.splice(deleteIndex, 1);
		const taskItemHTML = document.querySelector(`[data-task-id="${targetId}"]`);
		taskItemHTML.remove();
		modal.classList.add("modal-overlay_hidden");
	}
	console.log(tasks);
});

let theme = false;

const changeTheme = (bgc, taskColor, btnBorder) => {
	document.body.style.backgroundColor = bgc;
	document.querySelectorAll(".tasks.item").forEach(task => {
		task.style.color = taskColor;
	});
	document.querySelectorAll("button").forEach(btn => {
		btn.style.border = btnBorder;
	});
};

window.addEventListener("keydown", e => {
	const { code } = e;
	if (code === "Tab") {
		e.preventDefault();
		theme = !theme;
		if (theme) {
			changeTheme("#24282E", "#ffffff", "1px solid #ffffff");
		} else {
			changeTheme("initial", "#ffffff", "1px solid #ffffff");
		}
	}
});
