import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todos-detail',
    template: `
        <div>Todos item</div>
    `
})
export class TodosDetailComponent implements OnInit {
    constructor(private appService: AppService) {
        this.appService = appService;
    }

    ngOnInit() {
        setTimeout(() => this.appService.toggleFooter(false), 100)
    }

    ngOnDestroy() {
        this.appService.toggleFooter(true);
    }
}