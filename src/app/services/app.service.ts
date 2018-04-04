import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

    public showFooter: boolean = true;
    public footerObserver = new Subject();
    public appTitle: string = '';
    
    constructor() {
        setTimeout(() => this.footerObserver.next(true), 100);
    }

    public toggleFooter(show?: boolean) {
        if (this.showFooter === show) return;

        this.showFooter = show !== undefined ? !!show : !this.showFooter;
        this.footerObserver.next(this.showFooter);
    }

    public setTitle(title: string): void {
        if (this.appTitle === title) return;

        document.title = title;
        this.appTitle = title;
    }
}