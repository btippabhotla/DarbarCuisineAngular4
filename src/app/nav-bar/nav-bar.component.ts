import { Component, OnInit } from '@angular/core';
import { Title, Menu } from './nav-bar.component.data';
import { Menus } from './nav-bar.component.menujson';
import {trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
  		trigger('collapse', [
    		state('open', style({
      		opacity: '1',
      		display: 'block',
      		transform: 'translate3d(0, 0, 0)'
    	})),
    	state('closed',   style({
     	opacity: '0',
      	display: 'none',
      	transform: 'translate3d(0, -100%, 0)'
    	})),
    	transition('closed => open', animate('200ms ease-in')),
    	transition('open => closed', animate('100ms ease-out'))
  	])
]
})
export class NavBarComponent implements OnInit {
	title: Title = {
		name: 'Darbar Indian Cuisine'
	};

	collapse:string = "closed";
	toggleCollapse(){
		this.collapse = this.collapse == "open" ? 'closed' : 'open';
	}

	Menu=Menus;

	
  constructor() { }
  ngOnInit() {}
}


