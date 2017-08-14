import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/observable/interval';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from "app/shared/translate/translate.service";

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	lang = "fr";

	toggled = false;
	private clicked = false;

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

		const resize = Observable.fromEvent(window, 'resize');
		const result = resize.throttle(ev => Observable.interval(200));
		result.subscribe((event: any) => this.resizeWindow(event.target.innerWidth));
		this.resizeWindow(window.innerWidth);
	}

	toggleMenu() {
		this.toggled = !this.toggled;
		this.clicked = !this.clicked;
	}

	resizeWindow(width: number) {
		if (width >= 768 && !this.toggled) {
			this.toggled = true;
			this.clicked = false;
		}
		if (width < 768 && !this.clicked && this.toggled) {
			this.toggled = false;
		}
	}

}
