import { Injectable, signal } from '@angular/core';
import { Todo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  
  todoList = signal<Todo[]>([]);

    addToDo(todo:string) {
      console.log('TO DO', todo)
      this.todoList.set([...this.todoList(), 
        {
          id: Date.now(),
          todo: todo,
          status: false
        }
        ]);
  }
  
  markAsDone(id: number) {
    this.todoList.set(this.todoList().map(todo => todo.id === id ? { ...todo, status: true } : todo));
  }

  removeToDo(id:number) {
    this.todoList.set(this.todoList().filter(item => item.id !== id));
  }
  
    clearAll() {
      this.todoList.set([]);
    }
}
