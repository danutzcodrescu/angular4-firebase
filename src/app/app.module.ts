import { SendEmailService } from './shared/send-email/send-email.service';
import { TranslateService } from './shared/translate/translate.service';
import { ProjectsService } from './shared/model/projects.service';
import { routerConfig } from './../assets/routes/routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ImgComponent } from './img/img.component';
import { SliderProjectsComponent } from './slider-projects/slider-projects.component';
import { TranslatePipe } from './shared/translate/translate.pipe';
import { SentanceCasePipe } from './shared/pipes/sentance-case.pipe';
import { SkillsTabComponent } from './skills-tab/skills-tab.component';
import { SkillsDisplayComponent } from './skills-display/skills-display.component';
import { AuthGuard } from "app/shared/auth/loginGuard";


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
		LoginComponent,
		AllProjectsComponent,
		NewProjectComponent,
		EditProjectComponent,
		ImgComponent,
		SliderProjectsComponent,
		TranslatePipe,
		SentanceCasePipe,
		SkillsTabComponent,
		SkillsDisplayComponent
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
	providers: [ProjectsService, AdminService, TranslateService, SendEmailService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
