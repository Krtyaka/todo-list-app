document.querySelector(".js-add-task").addEventListener("click", () => {
  addTodo3();
});

const todoList3 = JSON.parse(localStorage.getItem("task-list")) || [
  {
    task: "make dinner",
    dueDate: "2022-12-22",
  },
];

function renderTodo3() {
  let todoListHTML = "";

  todoList3.forEach((todoObject, index) => {
    const { task, dueDate } = todoObject;
    todoListHTML += `
        <div> ${task} </div>
        <div> ${dueDate} </div>
        <button class="delete-button js-delete-button"> Delete </button>`;
  });

  document.querySelector(".js-display-task").innerHTML = todoListHTML;

  //querySelectorAll will give us all the elements that have the specified class, instead of just the first element, this method returns a list(array) of all the elements so we have to loop through the list.
  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList3.splice(index, 1);
        localStorage.setItem("task-list", JSON.stringify(todoList3));
        renderTodo3();
      });
    });
}
function addTodo3() {
  const inputTask = document.querySelector(".js-input-todo3");
  const dueDate = document.querySelector(".js-due-date").value;
  const task = inputTask.value.trim();

  if (task !== "")
    todoList3.push({
      task,
      dueDate,
    });

  localStorage.setItem("task-list", JSON.stringify(todoList3));

  inputTask.value = "";

  renderTodo3();
}
