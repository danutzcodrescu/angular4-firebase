import { Project } from './projects';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectsService {

	constructor(private db: AngularFireDatabase) { }

	findAllProjects(): Observable<Project[]> {
		return this.db.list('projects')
			.map(projects=> <Project[]> projects)
			.take(1);
	}
}
