import { ProjectsService } from './../shared/model/projects.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminService } from "app/shared/auth/admin.service";

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

	list = "project";
	edit = false;

	constructor( private adminService: AdminService, private router: Router) { }

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
		this.adminService.logout();
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
