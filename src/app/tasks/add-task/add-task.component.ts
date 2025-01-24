import { type NewTask } from '../task/task.model';
import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  inputTitle = '';
  inputDescription = '';
  inputDate = '';
  private tasksService = inject(TasksService);

  onCancel = () => {
    this.close.emit();
  };

  onSubmit = () => {
    this.tasksService.addTask(
      {
        name: this.inputTitle,
        description: this.inputDescription,
        date: this.inputDate,
      },
      this.userId
    );
    this.close.emit();
  };
}
