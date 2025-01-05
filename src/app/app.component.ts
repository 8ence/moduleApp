import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  users = DUMMY_USERS;
  selectedUser?: string;

  get selectedUserDetails() {
    return this.users.find(user => user.id === this.selectedUser)!;
  }

  onSelect(id: string) {
    console.log('selected user id:', id);
    this.selectedUser = id;
  }
}
