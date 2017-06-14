import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-img',
	templateUrl: './img.component.html',
	styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

	@Output() img: EventEmitter<string> = new EventEmitter<string>();

	@Input() src: any;

	constructor() { }

	ngOnInit() {
	}

	del(e) {
		e.preventDefault();
		this.img.emit(this.src);
	}
}
