import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  newTaskIsVisible = false;

  tasks = [
    {
      id: "1",
      userId: "u1",
      dueDate: '2021-12-31',
      name: 'Lakcmíkeresés hiba javítása',
      description: 'JIRA 4410 - Lakcímkeresési hiba javítása',
      isCompleted: false
    },
    {
      id: "2",
      userId: "u2",
      dueDate: '2021-12-31',
      name: 'Örököskeresés hiba javítása',
      description: 'JIRA 4411 - Örököskeresési hiba javítása',
      isCompleted: false
    },
    {
      id: "3",
      userId: "u5",
      dueDate: '2021-12-31',
      name: 'Folyamatdefiníció hiba javítása',
      description: 'JIRA 4412 - Folyamatdefiníció hiba javítása',
      isCompleted: false
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  completeTask = (id: string) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  createNewTask = () => {
    this.newTaskIsVisible = true;
  }

  cancelTaskCreation = () => {
    this.newTaskIsVisible = false;
  }
}
