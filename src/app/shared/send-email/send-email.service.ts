import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SendEmailService {

	private to = "danutzcodrescu@gmail.com";
	private subject = 'Mesaj de pe site';

	constructor(private http: Http) {}

	send(data) {
		return this.http.post('https://email-xbqvwfqvcl.now.sh/', data);
	}

}
