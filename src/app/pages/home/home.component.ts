import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    visible: boolean = false;
    appService: AppService;

    constructor(appService: AppService) {
        this.appService = appService;
    }

    ngOnInit() { }

    showModal() {
        this.visible = true;
    }

    handleModalClose(visible: boolean) {
        this.visible = visible;
    }

    showLoadingComponent() {
        this.appService.toggleLoading();
    }
}