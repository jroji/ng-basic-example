import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from './state-management/main.state';

@Component({
  selector: 'app-root',
  template: `
    <h1>father {{counter}}</h1>
    <app-counterview></app-counterview>
    <button (click)="updateCounter()">INCREMENT</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  counter: number;

  constructor(private store: Store<State>){
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter['counter'];
    });
  }

  updateCounter() {
    this.store.dispatch({ type: 'INCREMENT', payload: 2});
  }
}
