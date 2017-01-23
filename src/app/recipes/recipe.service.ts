import {Injectable} from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Very tasty', 'http://www.cicis.com/media/1137/pizza_trad_alfredo.png', []),
    new Recipe('Soup', 'Less tasty', 'http://www.my7daydiet.com/images/wonder-soup.jpg', [])
  ];

  constructor() {
  }

  getRecipies() {
    return this.recipes;
  }

}
