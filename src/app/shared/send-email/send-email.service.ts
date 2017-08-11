import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SendEmailService {

	private to = "danutzcodrescu@gmail.com";
	private subject = 'Mesaj de pe site';

	constructor(private http: Http) {}

	send(data) {
		const body = {
			to: this.to,
			from: data.email,
			subject: data.subject,
			html: `<p>Salut Manu,</p>
				<p>Ai un nou mesaj de pe site:</p>
				<ul>
					<li>Nume: ${data.fname} ${data.lname}</li>
					<li>Email: ${data.email}</li>
					<li>Mesaj: ${data.mess}</li>
				</ul>
			`
		};
		// this.http.post(`https://api.mailgun.net/v3/${this.MAILGUN_DOMAIN}/messages`, body, options)
	}

}
