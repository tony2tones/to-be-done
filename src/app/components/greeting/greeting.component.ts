import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  name = signal('Anthony');

}
