import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    public appTitle = '';
    public showFooter = true;
    public showLoading = false;

    public footerObserver = new Subject();
    public loadingObserver = new Subject();

    constructor() {
        setTimeout(() => this.footerObserver.next(true), 100);
    }

    public toggleFooter(show?: boolean) {
        if (this.showFooter === show) {
            return;
        }

        this.showFooter = show !== undefined ? !!show : !this.showFooter;
        this.footerObserver.next(this.showFooter);
    }

    public setTitle(title: string): void {
        if (this.appTitle === title) {
            return;
        }

        document.title = title;
        this.appTitle = title;
    }

    public toggleLoading(show?: boolean) {
        if (this.showLoading === show) {
            return;
        }

        this.showLoading = show !== undefined ? !!show : !this.showLoading;
        this.loadingObserver.next(this.showLoading);
    }
}
