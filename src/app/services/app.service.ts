import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    public showFooter: boolean = true;
    public footerObserver = new Subject();

    constructor() {
        setTimeout(() => this.footerObserver.next(true), 100);
    }

    public toggleFooter(show?: boolean) {
        this.showFooter = show !== undefined ? !!show : !this.showFooter;
        this.footerObserver.next(this.showFooter);
    }
}