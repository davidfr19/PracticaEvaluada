import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../models/Dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.sass']
})
export class DishComponent implements OnInit {

  @Input() dish;// = new Dish('', '', '', '');

  constructor() { }

  ngOnInit() {
  }

}
