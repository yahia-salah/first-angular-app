import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user: User | undefined;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get userTasks() {
    return this.tasksService.getUsersTasks(this.user?.id || '');
  }

  onTaskComplete(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
