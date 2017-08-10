import { Injectable } from '@angular/core';
// const Mailgun = require('mailgun-js');

@Injectable()
export class SendEmailService {

	private to = "danutzcodrescu@gmail.com";
	private subject = 'Mesaj de pe site';
	private MAILGUN_KEY = "key-049d8bfbaaf83f13ef74a61d8e2e7603";
	private MAILGUN_DOMAIN = "sandboxd3ac8bab0104460ba996b8e1f08b09e9.mailgun.org";
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
