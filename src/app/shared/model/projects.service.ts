import { Project } from './projects';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectsService {

	constructor(private db: AngularFireDatabase) { }

	allProjects() {
		return this.db.list('/projects');
	}

	findOne(key) {
		return this.db.object('/projects/' + key);
	}
}
