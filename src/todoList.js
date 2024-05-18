export default class Todolist {
  constructor() {
    this.tasks = [];
  }

  addTodo(todo) {
    this.tasks.push(todo);
  }
  
  getTasksList() {
    console.log(this.tasks);
  }

  deleteTodo(todo) {
    return this.tasks.filter((task) => task.title !== todo.title);
  }
}
