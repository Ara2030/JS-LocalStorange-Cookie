// Получаю данные которые пользователь ввел в пустом массиве
let = user_input = {};
const form = document.querySelector("form");
const LS = localStorage;
let searchForm = document.forms["search"];

// получаем данные из input
form.addEventListener("input", function (event) {
  user_input[event.target.name] = event.target.value;
  LS.setItem("user_input", JSON.stringify(user_input));
});

// Восстановление данных из формы после перезагрузки
if (LS.getItem("user_input")) {
  user_input = JSON.parse(LS.getItem("user_input"));
  console.log(user_input);

  for (let key in user_input) {
    form.elements[key].value = user_input[key];
    //form.elements[name].
  }
}
