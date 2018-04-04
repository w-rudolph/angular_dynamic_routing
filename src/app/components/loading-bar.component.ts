import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading-bar',
    template: `
        <div class="app-loading-bar" *ngIf="!loaded">
            <div [ngStyle]="{'width': value + '%'}" class="app-loading-bar__progress"></div>
        </div>
    `,
    styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent {
    @Input('value') value: number = 0;
    @Input('loaded') loaded: boolean = true;
}