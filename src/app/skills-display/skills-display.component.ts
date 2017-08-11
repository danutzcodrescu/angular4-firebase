import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-skills-display',
	templateUrl: './skills-display.component.html',
	styleUrls: ['../root/root.component.scss']
})
export class SkillsDisplayComponent implements OnInit {

	@Input() title: string;

	@Input() selected = false;

	constructor() { }

	ngOnInit() {
	}

}
