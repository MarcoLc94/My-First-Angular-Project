import { Component, OnInit } from '@angular/core';
import { ModelTodo } from '../service/todoService.service';
import { TodoServiceService } from '../service/todoService.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TodoDetailsComponent } from "../todo-details/todo-details.component";


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, RouterOutlet, TodoDetailsComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})

export class TodosComponent {



  arrayNotes: ModelTodo[] = [{id: 1, name: "test", status: true}];
  newTodo: string = '';
  check: boolean = false;
  datoPadre = "Saludos"

  constructor(private todoService: TodoServiceService, private router: Router) {

  }

  ngOnInit() {

    this.todoService.getTodos().subscribe(todos => {
      this.arrayNotes = todos;
    });
  }


  viewTodoDetails(toDoId: number) {
    console.log("is working well")
    console.log(toDoId)
    this.router.navigate([`todo/${toDoId}`]); 
  }

  addToDoItem() {
    console.log("working")
    if (!this.newTodo.trim()) return;
    this.todoService.addToDoItem(this.newTodo, this.check)

    this.newTodo = '';
    this.check = false;
    console.log(this.arrayNotes);
  }

  deleteToDOItem(toDoId: number) {
    this.todoService.deleteToDOItem(toDoId)
  }

  toggleComplete(toDo: ModelTodo) {
    this.todoService.toggleComplete(toDo)
  }

  deleteAll() {
    this.todoService.deleteAll()
  }

  completeAll() {
    this.todoService.completeAll()
  }

  editToDo(toDoId: number) {
    return this.todoService.editToDo(toDoId)

  }


}
