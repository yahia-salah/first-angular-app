import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from '../../models/user.model';
import { CardComponent } from "../shared/card/card.component";

const randomUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  @Input({required:true}) user: User|undefined;
  @Input({required:true}) isSelected:boolean|undefined;
  imageAlt=computed(()=>`Avatar of ${this.user?.name}`); // Computed Signal
  @Output() select=new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user?.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}
