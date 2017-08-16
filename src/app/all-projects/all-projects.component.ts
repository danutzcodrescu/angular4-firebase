import { ProjectsService } from './../shared/model/projects.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-all-projects',
	templateUrl: './all-projects.component.html',
	styleUrls: ['../login/login.component.scss'],
	providers: [ProjectsService]
})
export class AllProjectsComponent implements OnInit {
	public projects: any;
	@Output() project: EventEmitter<string> = new EventEmitter<string>();

	constructor(private projectsService: ProjectsService) { }

	ngOnInit() {
		this.projects = this.projectsService.allProjects();
	}

	clicked(value) {
		this.project.emit(value);
	}

}
