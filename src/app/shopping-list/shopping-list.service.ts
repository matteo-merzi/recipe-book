import {Ingredient} from "../shared/ingredient";
export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]){
    // push every single item in items to the this.items array
    Array.prototype.push.apply(this.items, items);
  }

}
