import { ProjectsService } from './../shared/model/projects.service';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';

@Component({
	selector: 'app-new-project',
	templateUrl: './new-project.component.html',
	styleUrls: ['../login/login.component.scss'],
	providers: [ProjectsService]
})
export class NewProjectComponent implements OnInit {

	private firebase: any;
	public form: FormGroup;

	constructor( @Inject(FirebaseApp) firebase: firebase.app.App, private fb: FormBuilder, private projects: ProjectsService) {
		this.firebase = firebase;
		this.form = this.fb.group({
			client: ['', Validators.required],
			location: [''],
			start: ['', Validators.required],
			end: [''],
			description: [''],
			details: [''],
			files: ['']
		});
	}

	ngOnInit() {
	}

	createProject(event) {
		event.preventDefault();
		const formValue = this.form.value;
		const obj: any = {};
		obj.client = formValue.client;
		obj.location = formValue.location;
		obj.start = formValue.start;
		obj.end = formValue.end;
		obj.description = formValue.description;
		obj.details = formValue.details;
		obj.files = [];
		const projects = this.projects.allProjects();
		const promises = [];
		const files = event.target.files.files;
		for (let i = 0; i < files.length; i++) {
			const img: File = files[i];
			const storage = firebase.storage().ref();
			const ref = storage.child(`images-manu/${img.name}`);
			promises.push(ref.put(img));
		}

		Promise.all(promises).then(imgs => {
			obj.files = imgs.map(img => {
				return img.a.downloadURLs[0];
			});
			// obj.files.push(ref.getDownloadURL());
			projects.push(obj);
		})
			.catch(err => console.log(err));
	}

}
