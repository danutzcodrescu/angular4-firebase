import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../shared/model/projects.service';
import { Project } from "app/shared/model/projects";

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	public projects: any;

	constructor(private projectsService: ProjectsService) { }

	ngOnInit() {
		this.projectsService.allProjects().subscribe(arr => {
			this.projects = arr;
		});
	}

	picture(project: Project): number {
		let index = 0;
		while (!project.files[index]) {
			index++;
		}
		return project.files[index];
	}

}
