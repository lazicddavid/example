let dotos = [];

const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
  const text = input.value;

  if (text === "") return;
  todos.push({ id: Date.now(), text });
  input.value = " ";
  draw();
});

function draw() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `${todo.text} <button data-id="${todo.id}">X</button>`;
    list.appendChild(li);
  });
}
list.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const id = Number(e.target.dataset.id);
    todos = todos.filter((t) => t.id !== id);
    draw();
  }
});
