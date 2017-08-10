import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from "app/shared/translate/translate.service";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	lang = <String>"fr";

	constructor(private router: Router, private translate: TranslateService) {}

	ngOnInit() {
		this.lang = this.router.url.includes('/en') ? "/en" : "/fr";
		this.translate.use(this.lang);
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				if (event.url.includes('/en')) {
					this.lang = "en";
				} else {
					this.lang = "fr";
				}
			}
		});
	}

}
