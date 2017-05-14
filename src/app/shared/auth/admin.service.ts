import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AdminService {

	constructor(private afAuth: AngularFireAuth) { }

	login(email:string, password:string):Observable<any> {
		return this.fromFirebaseAuthPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
	}

	fromFirebaseAuthPromise(promise):Observable<any> {
		const subject = new Subject<any>();
		promise.then(res => {
			subject.next(res);
			subject.complete();
		},
		err => {
			subject.error(err);
			subject.complete();
		});
		return subject.asObservable();
	}

}
