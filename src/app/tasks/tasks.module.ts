import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [TasksComponent, NewTaskComponent, TaskComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [TasksComponent],
  providers: [],
})
export class TasksModule {}
