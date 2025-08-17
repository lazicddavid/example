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
}
