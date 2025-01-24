import { Injectable } from '@angular/core';
import { type NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: '1',
      userId: 'u1',
      dueDate: '2021-12-31',
      name: 'Lakcmíkeresés hiba javítása',
      description: 'JIRA 4410 - Lakcímkeresési hiba javítása',
    },
    {
      id: '2',
      userId: 'u2',
      dueDate: '2021-12-31',
      name: 'Örököskeresés hiba javítása',
      description: 'JIRA 4411 - Örököskeresési hiba javítása',
    },
    {
      id: '3',
      userId: 'u5',
      dueDate: '2021-12-31',
      name: 'Folyamatdefiníció hiba javítása',
      description: 'JIRA 4412 - Folyamatdefiníció hiba javítása',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: Math.random().toString(),
      userId: userId,
      dueDate: taskData.date,
      name: taskData.name,
      description: taskData.description,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
