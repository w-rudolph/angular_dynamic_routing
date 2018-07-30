import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AppService } from './services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    showFooter = false;
    loadingValue = 0;
    isLoaded = false;
    showLoading = false;

    constructor(public appService: AppService, router: Router) {
        this.appService = appService;

        this.appService.loadingObserver.subscribe(showLoading => {
            this.showLoading = <boolean>showLoading;
        });

        router.events.subscribe(res => {
            if (res instanceof NavigationStart) {
                this.isLoaded = false;
                this.loadingValue = 20;
            }
            if (res instanceof NavigationEnd) {
                this.loadingValue = 100;
                setTimeout(() => {
                    this.isLoaded = true;
                }, 400);
            }
            if (res instanceof NavigationCancel || res instanceof NavigationError) {
                this.isLoaded = true;
            }
        });
    }

    ngOnInit() {
        this.appService.footerObserver.subscribe(isShow => {
            this.showFooter = <boolean>isShow;
        });
    }
}
