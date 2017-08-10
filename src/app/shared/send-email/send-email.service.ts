import { Injectable } from '@angular/core';
// const Mailgun = require('mailgun-js');

@Injectable()
export class SendEmailService {

	private to = "danutzcodrescu@gmail.com";
	private subject = 'Mesaj de pe site';
	private mailgun;

	constructor() {
		// this.mailgun = new Mailgun({apiKey: this.MAILGUN_KEY, domain: this.MAILGUN_DOMAIN});
	}

	send(data): void {
		const content = {
			from: data.email,
			to: this.to,
			subject: this.subject,
			html: `<p>Nume: ${data.fname} ${data.lname}</p>
			<p>Email: ${data.email}</p>
			<p>Mesaj:${data.mess}</p>`
		}

		this.mailgun.messages().send(content, function (err, body) {
			if (err) {
				console.log("got an error: ", err);
			} else {
				console.log(body);
			}
		});
	}

}
