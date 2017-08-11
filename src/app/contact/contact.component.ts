import { TranslateService } from 'app/shared/translate/translate.service';
import { SendEmailService } from './../shared/send-email/send-email.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from "@angular/forms/src/forms";

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor(private email: SendEmailService, public translate: TranslateService) { }

	ngOnInit() {
	}

	sendEmail(form: NgForm) {
		const obj = {
			fname: form.value.fname,
			lname: form.value.lname,
			email: form.value.email,
			mess: form.value.mess
		}
		form.resetForm();
		// this.email.send(form).subscribe(result => {
		// 	console.log(result);
		// 	this.form.nativeElement.reset();
		// }, error => {
		// 	console.log(error);
		// });
	}

}
