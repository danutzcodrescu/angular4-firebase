import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectsService } from './../shared/model/projects.service';
import { Component, OnInit, Input, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';

@Component({
	selector: 'app-edit-project',
	templateUrl: './edit-project.component.html',
	styleUrls: ['../login/login.component.scss'],
	providers: [ProjectsService]
})
export class EditProjectComponent implements OnInit {

	@Input() id: String;
	public project: any = { files: [] };
	public form: FormGroup;
	private firebase: any;
	private Observable;

	constructor( @Inject(FirebaseApp) firebase: firebase.app.App, private projectService: ProjectsService, private fb: FormBuilder) {
		this.firebase = firebase;
		this.form = this.fb.group({
			client: ['elem.client', Validators.required],
			location: ['elem.location'],
			start: ['elem.start', Validators.required],
			end: ['elem.end'],
			description: ['elem.description'],
			details: ['elem.details'],
			files: ['']
		});
	}

	ngOnInit() {
		this.projectService.findOne(this.id).subscribe(elem => {
			this.project = elem;
			this.form = this.fb.group({
				client: [elem.client],
				location: [elem.location],
				start: [elem.start],
				end: [elem.end],
				description: [elem.description],
				details: [elem.details],
				files: ['']
			});
		});
	}

	deleteImg = (event) => {
		const storage = this.firebase.storage();
		const ref = storage.refFromURL(event);
		ref.delete().then(function () {
			this.project.files = [...this.project.files.slice(0, this.project.files.indexOf(event)), ...this.project.files.slice(this.project.files.indexOf(event) + 1)];
		}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	}

	updateProject(event) {
		event.preventDefault();
		const formValue = this.form.value;
		const obj: any = {};
		obj.client = formValue.client;
		obj.location = formValue.location;
		obj.start = formValue.start;
		obj.end = formValue.end;
		obj.description = formValue.description;
		obj.details = formValue.details;
		const promises = [];
		const files = event.target.files.files;
		for (let i = 0; i < files.length; i++) {
			const img: File = files[i];
			const storage = firebase.storage().ref();
			const ref = storage.child(`images-manu/${img.name}`);
			promises.push(ref.put(img));
			files[i].value = '';
		}

		Promise.all(promises).then(imgs => {
			obj.files = this.project.files.concat(imgs.map(img => {
				return img.downloadURL;
			}));
			// obj.files.push(ref.getDownloadURL());
			this.projectService.findOne(this.id).update(obj);
			this.project = obj;
		})
			.catch(err => console.log(err));
	}

}
