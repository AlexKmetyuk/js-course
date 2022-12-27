// Написати скрипт, для створення списку справ
// Справи можна видаляти та відмічати виконано/не виконано

// Для кнопки видалення - ╳

const todosList = document.querySelector(".todos");
const btn = document.querySelector(".add-btn");
const input = document.querySelector(".input");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!input.value) return;

  createTodo(input.value);
  input.value = "";
});

function createTodo(text) {
  const item = document.createElement("li");
  item.classList.add("todo");

  const textEl = document.createElement("p");
  textEl.textContent = text;

  item.append(textEl);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "╳";
  item.append(deleteBtn);

  todosList.append(item);
}

todosList.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    console.log(true);
    return;
  }
  console.log(e.target);

  if (e.target.classList.contains("delete-btn")) {
    e.target.parentNode.remove();
  }

  if (e.target.classList.contains("todo")) {
    if (e.target.classList.contains("checked")) {
      e.target.classList.remove("checked");
    } else {
      e.target.classList.add("checked");
    }
  }
});
