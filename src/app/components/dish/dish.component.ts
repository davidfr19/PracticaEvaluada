import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.sass']
})
export class DishComponent implements OnInit {

  @Input() dish;

  constructor() { }

  ngOnInit() {
  }

}
