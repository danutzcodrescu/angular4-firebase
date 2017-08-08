import { ProjectComponent } from './../../app/project/project.component';
import { ProjectsComponent } from './../../app/projects/projects.component';
import { RootComponent } from './../../app/root/root.component';
import { HomeComponent } from './../../app/home/home.component';
import { ContactComponent } from "app/contact/contact.component";
import { AdminComponent } from "app/admin/admin.component";
import { LoginComponent } from "app/login/login.component";

export const routerConfig = [
	{
		path: '',
		component: HomeComponent
	},

	{
		path: 'login',
		component: LoginComponent
	},

	{
		path: 'admin',
		component: AdminComponent
	},

	{
		path: ':lang',
		component: RootComponent,
	},

	{
		path: ':lang/contact',
		component: ContactComponent
	},

	{
		path: ':lang/projects',
		component: ProjectsComponent
	},

	{
		path: ':lang/projects/:title',
		component: ProjectComponent
	},

	{
		path: '**',
		component: HomeComponent
	}
]
