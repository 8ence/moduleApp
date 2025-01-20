import { type NewTask } from '../task/task.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  inputTitle = '';
  inputDescription = '';
  inputDate = '';

  onCancel = () => {
    this.cancel.emit();
  }

  onSubmit = () => {
    this.add.emit({
      name: this.inputTitle,
      description: this.inputDescription,
      date: this.inputDate,
    });
  }
}
