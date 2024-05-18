import Todos from "./todos";
import Todolist from "./TodoList";

export default class UI {
  constructor() {
    this.todoList = new Todolist();
    this.dialog = document.querySelector("dialog");
    this.form = document.querySelector("form");
    this.close = document.querySelector(".close");
    this.addBtn = document.getElementById("add-task");

    this.addBtn.addEventListener("click", () => {
      this.handleForm();
    });

    this.close.addEventListener("click", (e) => {
      e.preventDefault();
      this.dialog.close();
    });

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
  }

  handleForm() {
    this.dialog.showModal();
  }

  addTodo() {
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const todo = new Todos(title, "lorem", dueDate, "urgent");

    this.todoList.addTodo(todo);
    this.todoList.getTasksList();
    this.createTaskCards(todo.title, todo.dueDate);
    this.dialog.close();
  }

  createTaskCards(title, dueDate) {
    const taskContainer = document.createElement("div");

    taskContainer.style.display = "flex";
    taskContainer.style.gap = "30px";

    taskContainer.innerHTML = `
      <p>${title}</p>
      <p>${dueDate}</p>
    `;

    document.querySelector(".tasks-content").appendChild(taskContainer);
  }
}
