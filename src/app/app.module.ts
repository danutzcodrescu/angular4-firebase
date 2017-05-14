import { ProjectsService } from './shared/model/projects.service';
import { routerConfig } from './../assets/routes/routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RootComponent } from './root/root.component';
import { SliderComponent } from './slider/slider.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { config as firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AdminService } from 'app/shared/auth/admin.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'firebase/storage';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MenuComponent,
		FooterComponent,
		RootComponent,
		SliderComponent,
		ProjectsComponent,
		ContactComponent,
		ProjectComponent,
		AdminComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
        ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(routerConfig),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
	],
	providers: [ProjectsService, AdminService],
	bootstrap: [AppComponent]
})
export class AppModule { }
