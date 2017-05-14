import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import { Subject } from "rxjs/Subject";

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

	private images: [string] = ['/assets/images/1980-2.jpeg', '/assets/images/1980-3.jpeg', '/assets/images/1980-dow3nload.jpeg', '/assets/images/1980-downloa2d.jpeg', '/assets/images/1980-1download.jpeg'];
	selected: string = this.images[0];

	private timer$;
	private next$ = new Subject();
	private prev$ = new Subject();
	private counter = 0;

	constructor() { }

	ngOnInit() {
		this.timer$ = Observable.merge(
			this.next$.mapTo('next'),
			this.prev$.mapTo('prev'),
			Observable.interval(3500).mapTo('time')
		);
		this.timer$.subscribe(time => {
			switch(time) {
				case 'time' :
				case 'next' :
					this.counter++;
					if (this.counter === this.images.length) this.counter=0;
					break;
				case 'prev' :
					this.counter--;
					if (this.counter === -1) this.counter = this.images.length - 1;
					break;	
			}
			this.selected = this.images[this.counter];
		});
	}

    ngOnDestroy() {
        this.timer$.unsubscribe();
    }
}
