export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getProjectName() {
    return this.name;
  }

  setProjectName(newName) {
    this.name = newName;
  }

  addTodos(todo) {
    this.tasks.push(todo);
  }
}
