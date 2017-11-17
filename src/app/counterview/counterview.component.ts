import { State } from '../state-management/main.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterview',
  templateUrl: './counterview.component.html',
  styleUrls: ['./counterview.component.css']
})
export class CounterviewComponent implements OnInit {
  counter: number;
  constructor(private store: Store<State>) { 
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter['counter'];
    });
  }

  ngOnInit() {
  }

}
