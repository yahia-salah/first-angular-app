import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from '../models/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User | undefined; // = this.users[0];

  onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
