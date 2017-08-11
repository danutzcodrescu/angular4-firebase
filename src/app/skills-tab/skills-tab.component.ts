import { SkillsDisplayComponent } from './../skills-display/skills-display.component';
import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
	selector: 'app-skills-tab',
	templateUrl: './skills-tab.component.html',
	styleUrls: ['../root/root.component.scss']
})
export class SkillsTabComponent implements AfterContentInit {

	@ContentChildren(SkillsDisplayComponent) tabs: QueryList<SkillsDisplayComponent>;

	constructor() { }

	ngAfterContentInit() {
		const selectedTab = this.tabs.find(tab => tab.selected);
		if (!selectedTab) {
			this.tabs.first.selected = true;
		}
	}

	selectedTab(title: string) {
		this.tabs.forEach(tab => {
			if (tab.selected) tab.selected = false;
			if (tab.title === title) tab.selected = true;
		});
	}

}
