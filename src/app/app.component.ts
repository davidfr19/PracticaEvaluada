import { Component } from '@angular/core';
import {Dish} from './models/Dish';
import {Category} from './models/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dishes = [
  new Dish('Gallo Pinto 1', 3000,'Gallo Pinto con carne en salsa', 'breakfast'), 
  new Dish('Gallo Pinto 2',3500,'Gallo Pinto con carne en salsa y huevos', 'breakfast')];

  categories = [new Category('breakfast'),new Category('lunch'),new Category('drinks')];

  recievedDish(dish) {
    console.log(dish)
    for(var i = 0; i < this.categories.length; i ++) {
      if(this.categories[i].getCategory() === dish.getCategory()) {
        this.categories[i].getDishes().push(dish);
      }
    }
  }
  
  

}
