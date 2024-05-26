import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,CommonModule],
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser: User | undefined;// = this.users[0];

  onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
