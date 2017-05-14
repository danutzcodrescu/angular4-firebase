import { Component, OnInit, Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
	private firebase: any;
	constructor( @Inject(FirebaseApp) firebase: firebase.app.App) {
		this.firebase = firebase;
	}

	ngOnInit() {
	}

	upload(event) {
		event.preventDefault();
		const file: File = event.target.file.files[0];
		const storage = firebase.storage().ref();
		const ref = storage.child(`images-manu/${file.name}`);
		ref.put(file).then(function (snapshot) {
			console.log(snapshot);
		});
	}

}
