import { Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    main : boolean = false;
    
    constructor(private router : Router) {

    }

    ngOnInit() {
        this.router.events.subscribe( (val) => {
            if (val instanceof NavigationEnd) {
                this.main = val.url !=="/" ? true : false;
                if (val.url==="/login" || val.url==="/admin") {
                    this.main=false;
                } 
            }
        });
    }
}
