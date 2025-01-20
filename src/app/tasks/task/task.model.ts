export interface Task {
    id: string;
    userId: string;
    dueDate: string;
    name: string;
    description: string;
  }

  export interface NewTask {
    name: string;
    description: string;
    date: string;
  }