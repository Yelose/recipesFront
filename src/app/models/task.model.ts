import { ThemePalette } from '@angular/material/core';
import { IngredientModel } from './ingredient.model';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  ingredients?: IngredientModel[];
}
