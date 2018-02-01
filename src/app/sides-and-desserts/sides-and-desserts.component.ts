import { Component, OnInit } from '@angular/core';
import { sides } from './sides-and-desserts.component.itemjson';
import { sidesDesserts } from './sides-and-desserts.component.data';

@Component({
  selector: 'app-sides-and-desserts',
  templateUrl: './sides-and-desserts.component.html',
  styleUrls: ['./sides-and-desserts.component.css']
})

export class SidesAndDessertsComponent implements OnInit {

	sidesDesserts=sides;
  	
  	constructor() { }

  	ngOnInit() {}

}
