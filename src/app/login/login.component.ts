import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AdminService } from "app/shared/auth/admin.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public form: FormGroup;

	constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ngOnInit() {
		// const pure = document.createElement('link');
		// pure.type = 'text/css';
		// pure.rel = 'stylesheet';
		// pure.href = "https://unpkg.com/purecss@1.0.0/build/pure-min.css";
		// pure.integrity = "sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w";
		// // pure.crossorigin = "anonymous";
		// document.querySelector('head').appendChild(pure);
	}

	login() {
		const formValue = this.form.value;
		this.adminService.login(formValue.email, formValue.password)
			.subscribe(
				()=> this.router.navigate(['/admin'])
			)
	}

}
