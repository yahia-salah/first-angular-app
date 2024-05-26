import { Task } from './../../models/task.model';
import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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
