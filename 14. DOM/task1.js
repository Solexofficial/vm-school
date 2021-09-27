// Task 1.1

// const $body = document.querySelector("body");

// const $form = document.createElement("form");
// $form.classList.add("create-user-form");

// const $labelName = document.createElement("label");
// $labelName.innerText = "Имя";

// const $labelPassword = document.createElement("label");
// $labelPassword.innerText = "Пароль";

// const $button = document.createElement("button");
// $button.setAttribute("type", "submit");
// $button.innerText = "Подтвердить";

// const $inputName = document.createElement("input");
// $inputName.setAttribute("type", "text");
// $inputName.setAttribute("name", "UserName");
// $inputName.setAttribute("placeholder", "Введите ваше имя");

// const $inputPassword = document.createElement("input");
// $inputPassword.setAttribute("type", "password");
// $inputPassword.setAttribute("name", "password");
// $inputPassword.setAttribute("placeholder", "Придумайте Пароль");

// $body.insertAdjacentElement("afterbegin", $form);
// $form.append($labelName);
// $labelName.append($inputName);
// $form.append($labelPassword);
// $labelPassword.append($inputPassword);
// $form.append($button);

// ============================

// Task 1.2
const $body = document.querySelector("body");
$body.innerHTML = `<form class="create-user-form">
<label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя" />
</label>
<label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль" />
</label>
<button type="submit">
    Подтвердить
</button>
</form>`;
