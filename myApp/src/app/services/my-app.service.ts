import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAppService {

  constructor() { }

  getTodoList(): string[] {
    return ['Item A', 'Item B', 'Item C'];
  }
}