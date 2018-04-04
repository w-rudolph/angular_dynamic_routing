import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
        <div class="app-loading" *ngIf="!loaded">
            <div [ngStyle]="{'width': value + '%'}" class="app-loading-progress"></div>
        </div>
    `,
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
    @Input('value') value: number = 0;
    @Input('loaded') loaded: boolean = true;
}