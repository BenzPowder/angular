import { Component, OnInit } from '@angular/core';
import { MyAppService } from 'src/app/services/my-app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: string[];

  constructor(private MyAppService: MyAppService) { }

  ngOnInit() {
    this.todoList = this.MyAppService.getTodoList();
  }

}
