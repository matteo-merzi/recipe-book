import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Very tasty', 'http://www.cicis.com/media/1137/pizza_trad_alfredo.png', []),
    new Recipe('Soup', 'Less tasty', 'http://www.my7daydiet.com/images/wonder-soup.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
