import { ProjectsService } from './../shared/model/projects.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	list: string;
	edit = false;

	constructor( private afAuth: AngularFireAuth, private router: Router) { }

	ngOnInit() {
	}

	clicked(type: string, param: string) {
		if (type === "edit" && this.edit === false) {
			this.edit = true;
		}
		if (type === "list" && this.edit === true) {
			this.edit = false;
		}
		this.list = param;
	}

	logout() {
		this.afAuth.auth.signOut();
		this.router.navigate(['/login']);
	}


	projects(event) {
		if (event === "new") {
			this.edit = true;
		} else {
			this.edit = true;
			this.list = 'project*' + event;
		}
	}

}
