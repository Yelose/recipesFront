import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  task: Task = {
    name: 'Shopping List',
    completed: false,
    color: 'primary',
    ingredients: [
      { name: 'Apples', amount: 5, completed: false, color: 'primary' },
      { name: 'Eggs', amount: 2, completed: false, color: 'accent' },
      {
        name: 'Milk',
        amount: 250,
        units: 'ml.',
        completed: false,
        color: 'warn',
      },
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete =
      this.task.ingredients != null &&
      this.task.ingredients.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.ingredients == null) {
      return false;
    }
    return (
      this.task.ingredients.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.ingredients == null) {
      return;
    }
    this.task.ingredients.forEach((t) => (t.completed = completed));
  }
}
