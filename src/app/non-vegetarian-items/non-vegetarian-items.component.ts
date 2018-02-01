import { Component, OnInit } from '@angular/core';
import { nonvegetarianMenu } from './non-vegetarian-items.component.data';
import { nonVegitems } from './non-vegetarian-items.component.itemjson';

@Component({
  selector: 'app-non-vegetarian-items',
  templateUrl: './non-vegetarian-items.component.html',
  styleUrls: ['./non-vegetarian-items.component.css']
})
export class NonVegetarianItemsComponent implements OnInit {

	nonvegetarianMenu=nonVegitems;
  	constructor() { }

  	ngOnInit() {}
}
