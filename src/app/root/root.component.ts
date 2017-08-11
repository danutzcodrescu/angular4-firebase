import { TranslateService } from 'app/shared/translate/translate.service';
import { ProjectsService } from './../shared/model/projects.service';
import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

	projects = [];
	constructor(private projectsService: ProjectsService, public translate: TranslateService) { }

	ngOnInit() {
		this.projectsService.allProjects().subscribe(arr => {
			this.projects = arr;
		});
	}

}
