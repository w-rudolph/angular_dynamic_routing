import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    public showFooter: boolean = true;
    public footerObserver = new Subject();

    constructor() {
        setTimeout(() => this.footerObserver.next(true), 100);
    }

    toggleFooter() {
        this.showFooter  = !this.showFooter ;
        this.footerObserver.next(this.showFooter);
    }
}