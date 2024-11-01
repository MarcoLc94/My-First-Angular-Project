import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ModelTodo {
  id: number;
  name: string;
  status: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
  private todos: ModelTodo[] = [];
  private todosSubject = new BehaviorSubject<ModelTodo[]>(this.todos);

  constructor() { }
  
  getTodos () {
    return this.todosSubject.asObservable()
  }

  addToDoItem(name: string, status: boolean) {
    console.log("working")
    if (!name.trim()) return;
    const newTodo: ModelTodo = {
      id: Date.now(),
      name: name,
      status: status,
    };
    this.todos.push(newTodo);

   this.todosSubject.next(this.todos)
  }

  deleteToDOItem(toDoId: number) {
    this.todos = this.todos.filter(note => 
      note.id !== toDoId);
      this.todosSubject.next(this.todos)
  }

  toggleComplete(toDo: ModelTodo) {
  toDo.status = !toDo.status
  this.todosSubject.next(this.todos)
  }

  deleteAll(){
    this.todos = []
    this.todosSubject.next(this.todos)
  }

  completeAll(){
    this.todos.forEach((todo) => (
      todo.status = true
    ))
    this.todosSubject.next(this.todos)
  }

  editToDo(toDoId: number){
    const todo = this.todos = this.todos.filter(note => note.id === toDoId)
    this.todosSubject.next(todo)
    return todo[0]
  }
  
  move = false
  moveTrough () {
  this.move = !this.move
  }


}
