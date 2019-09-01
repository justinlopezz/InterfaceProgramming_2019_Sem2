import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTodoListComponent } from './my-todo-list/my-todo-list.component';
import { ProfileComponent } from './profile/profile.component';
import { CompletionDateComponent } from './completion-date/completion-date.component';



@NgModule({
  declarations: [
    AppComponent,
    MyTodoListComponent,
    ProfileComponent,
    CompletionDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
