import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TranslateService {

	private lang: String;
	public translation: Object;

	constructor(private http: Http) { }

	use(param: String): void {
		this.lang = param;
		this.translation = require('../../../assets/i18n' + param + '.json');
	}

	get(param: string): string {
		let property;
		const keys = param.split('.');
		for (let i = 0; i < keys.length; i++) {
			property = property ? property[keys[i]] : this.translation[keys[i]];
		}
		return property;
	}

}
