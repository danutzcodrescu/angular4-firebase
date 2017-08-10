import { SendEmailService } from './../shared/send-email/send-email.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(private email: SendEmailService) { }

	ngOnInit() {
	}

	sendEmail(form) {
		this.email.send(form);
	}

}
