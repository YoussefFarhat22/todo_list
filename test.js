class Todos{
  constructor(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

}

const todos1 = new Todos('test',"test","today",'urgent');

console.log(todos1);