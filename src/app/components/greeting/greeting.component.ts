import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ToDoListItemComponent } from '../to-do-list-item/to-do-list-item.component';
 import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models';

@Component({
  selector: 'app-greeting',
  imports: [ToDoListItemComponent, ReactiveFormsModule, TextInputComponent],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingComponent {
  todoService = inject(TodoService);
  name = signal('Anthony');
  todoList = this.todoService.todoList;
  protected readonly todoForm = new FormGroup({
    text: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
 
 addToDo() {
    if(this.todoForm.invalid) return;
      let todo = this.todoForm.value.text!;
      this.todoService.addToDo(todo);
    this.todoForm.controls.text.reset();
  }

  clearAll() {
    this.todoService.clearAll();
  }

  removeToDo(id:number) {
    this.todoService.removeToDo(id);
  }

}
