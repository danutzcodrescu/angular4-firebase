import { FormGroup } from '@angular/forms';
import { SendEmailService } from './../shared/send-email/send-email.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	form: FormGroup;

	constructor(private email: SendEmailService) { }

	ngOnInit() {
	}

	sendEmail(form) {
		console.log(this.form);
		// this.email.send(form).subscribe(result => {
		// 	console.log(result);
		// 	this.form.nativeElement.reset();
		// }, error => {
		// 	console.log(error);
		// });
	}

}
