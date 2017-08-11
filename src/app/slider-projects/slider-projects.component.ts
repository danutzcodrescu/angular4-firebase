import { TranslateService } from './../shared/translate/translate.service';
import { Project } from './../shared/model/projects';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-slider-projects',
	templateUrl: './slider-projects.component.html',
	styleUrls: ['../root/root.component.scss']
})
export class SliderProjectsComponent implements OnInit {

	@Input() projects: Project[];
	slides = [];
	index = 0;
	constructor() { }

	ngOnInit() {
		this.slides = this.projects.filter((project, index) => index < 4).map(project => {
			const index = incrementIndex(project);
			return project.files[index];
		});
	}

	next() {
		if (this.index >= this.projects.length) { return}
		this.index += 4;
		this.recalculate();
	}

	prev() {
		if (this.index <= 0) { return}
		this.index -= 4;
		this.recalculate();
	}

	recalculate() {
		this.slides = this.projects.filter((project, index) => project && index >= this.index && index < this.index + 4).map(project => {
			const index = incrementIndex(project);
			return project.files[index];
		})
	}

}

const incrementIndex = (project: Project): number => {
	let index = 0;
	while (!project.files[index]) {
		index++;
	}
	return index;
}
