import { Component, signal } from '@angular/core';
import { Todo } from '../../models';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';
 import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TextInputComponent } from '../ui/text-input/text-input.component';

@Component({
  selector: 'app-greeting',
  imports: [ToDoListItemComponent, ReactiveFormsModule, TextInputComponent],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  name = signal('Anthony');
  todoList = signal<Todo[]>([]);
  protected readonly todoForm = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
 
  addToDo() {
    if(this.todoForm.invalid) return;
      let todo = this.todoForm.value.text!;
      this.todoList.set([...this.todoList(), 
        {
          id: Date.now(),
          todo: todo,
          status: false
        }
        ]);
    this.todoForm.controls['text'].setValue('');
  }

  clearAll() {
    this.todoList.set([]);
  }

  removeToDo(id:number) {
    console.log(id);
    this.todoList.set(this.todoList().filter(item => item.id !== id));
  }

}
