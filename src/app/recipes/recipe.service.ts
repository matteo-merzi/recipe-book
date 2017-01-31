import {Injectable} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Very tasty', 'http://www.cicis.com/media/1137/pizza_trad_alfredo.png', [
      new Ingredient('Tomatoes', 2),
      new Ingredient('Mozzarella', 1)
    ]),
    new Recipe('Soup', 'Less tasty', 'http://www.my7daydiet.com/images/wonder-soup.jpg', [])
  ];

  constructor(private http: Http) {
  }

  getRecipies() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-c4806.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://recipebook-c4806.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
        }
      );
  }

}
