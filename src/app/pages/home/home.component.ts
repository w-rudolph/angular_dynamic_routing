import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    visible: boolean = false;

    constructor() { }

    ngOnInit() { }

    showModal() {
        this.visible = true;
    }

    handleModalClose(visible: boolean) {
        this.visible = visible;
    }
}