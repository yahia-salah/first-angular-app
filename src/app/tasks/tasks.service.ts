import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUsersTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  addTask(task: Task, userId: string) {
    task.id = 't' + Math.floor(Math.random() * new Date().getTime());
    task.userId = userId;
    this.tasks.unshift(task);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
