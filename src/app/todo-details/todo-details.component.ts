import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from '../service/todoService.service';
import { ModelTodo } from '../service/todoService.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {
  todo: any | undefined; // Asegúrate de tener el tipo correcto aquí


  
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!; // El operador ! indica que estás seguro de que no es null
      this.todo = this.todoService.editToDo(id);
      console.log(this.todo)
    });
  }


  toggleComplete(todo: ModelTodo) {
    todo.status= !todo.status; // Cambia el estado
    this.todoService.toggleComplete(todo); // Llama al método en el servicio
  }
  
}