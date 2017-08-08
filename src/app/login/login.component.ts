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

	public form:FormGroup;

	constructor(private fb: FormBuilder, private adminService: AdminService, private router: Router) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ngOnInit() {
	}

	login() {
		const formValue = this.form.value;
		this.adminService.login(formValue.email, formValue.password)
			.subscribe(
				()=> this.router.navigate(['/admin'])
			)
	}

}