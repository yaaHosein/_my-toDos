export class App {
  constructor() {
    this.toDos = [];
    this.toDoDescription = "";
  }

  addToDo() {
    this.toDos.push({ description: this.toDoDescription });
    this.toDoDescription = "";
  }

  removeToDo(index) {
    this.toDos.splice(index, 1);
    console.log(index);

  }
}

