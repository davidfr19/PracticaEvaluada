import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Dish} from './../../models/Dish';
@Component({
  selector: 'app-new-dish-form',
  templateUrl: './new-dish-form.component.html',
  styleUrls: ['./new-dish-form.component.sass']
})
export class NewDishFormComponent implements OnInit {

  @Output() sendDish = new EventEmitter();

  name = 'name';
  price = 0;
  description = 'description';
  category = 'category';

  constructor() { }



  ngOnInit() {
  }

  onDone() {
    this.sendDish.emit(new Dish(this.name, this.price, this.description, this.category));
    this.name = 'name';
    this.price = 0;
    this.description = 'description';
    this.category = 'category';
  }


}
