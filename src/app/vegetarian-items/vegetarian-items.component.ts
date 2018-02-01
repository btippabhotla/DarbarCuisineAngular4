import { Component, OnInit } from '@angular/core';
import { vegetarianMenu } from './vegetarian-items.component.data';
import { Vegitems } from './vegetarian-items.component.itemison';

@Component({
  selector: 'app-vegetarian-items',
  templateUrl: './vegetarian-items.component.html',
  styleUrls: ['./vegetarian-items.component.css']
})
export class VegetarianItemsComponent implements OnInit {

	vegetarianMenu=Vegitems;	
  	
  	constructor() { }

  	ngOnInit() {}
}
