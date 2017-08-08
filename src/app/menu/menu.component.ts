import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	lang = <String>"fr";

	constructor(private router: Router) { }

	ngOnInit() {
		this.lang = this.router.url.includes('/en') ? "/en" : "/fr";
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				if (event.url.includes('/en/')) {
					this.lang = "/en";
				} else {
					this.lang = "/fr";
				}
			}
		});
	}

}
