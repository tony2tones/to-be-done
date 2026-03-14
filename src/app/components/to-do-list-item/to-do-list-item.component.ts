import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Todo } from '../../models';

@Component({
  selector: 'app-to-do-list-item',
  imports: [],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListItemComponent {
   todo = input.required<Todo>();
   deletedToDoId = output<number>();

   deleteTodo(id: number) {
     console.log('THE ID', id)
    this.deletedToDoId.emit(id);
    
   }

   markAsDone(id: number) {
    console.log('mark as done', id);
   }
}
