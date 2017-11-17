import { mainReducer } from './state-management/main.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';
import { CounterviewComponent } from './counterview/counterview.component';

const reducer = {counter: mainReducer};

@NgModule({ 
  declarations: [
    AppComponent,
    CounterviewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
