import { Project } from 'app/shared/model/projects';
import { ProjectsService } from '../shared/model/projects.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	project = <Project>{};
	pics: Array<string> = []
	selected = <String>"";

	constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.projectsService.findOne(params.title).subscribe(elem => {
				this.project = elem;
				this.pics = Object.keys(elem.files).map(key => elem.files[key]);
				this.selected = this.pics[0];
			});
		});
	}

	clickedPic(src: String) {
		this.selected = src;
	}

}
