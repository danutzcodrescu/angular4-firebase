import { CanActivate, Router } from "@angular/router";
import { AdminService } from "app/shared/auth/admin.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private adminService: AdminService, private router: Router) { }

	canActivate(): boolean {
		if (this.adminService.logged) {
			return true;
		} else {
			this.router.navigate(['/login'])
		}
		return false;
	}

}
