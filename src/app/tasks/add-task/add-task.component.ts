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
  inputTitle = '';
  inputDescription = '';
  inputDate = '';

  onCancel = () => {
    this.cancel.emit();
  }

  onSubmit = () => {
    
  }
}
