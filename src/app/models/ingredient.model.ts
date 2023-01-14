import { ThemePalette } from '@angular/material/core';

export class IngredientModel {
  public name: string;
  public amount: number;
  public units?: string;
  public completed: boolean;
  public color: ThemePalette;
}
