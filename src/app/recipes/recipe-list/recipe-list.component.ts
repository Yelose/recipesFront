import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: RecipeModel[] = [
    {
      name: 'A test recipe',
      subtitle: 'Subtitle recipe',
      description: 'this is a test',
      imagePath:
        'https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?b=1&s=170667a&w=0&k=20&c=VdQrz3S2SUrRRN_IqlGYVjtgwxdR-QMK49dYvIHW5W8=',
    },
    {
      name: 'A test recipe',
      subtitle: 'Subtitle recipe',
      description: 'this is a test',
      imagePath:
        'https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?b=1&s=170667a&w=0&k=20&c=VdQrz3S2SUrRRN_IqlGYVjtgwxdR-QMK49dYvIHW5W8=',
    },
  ];
}
