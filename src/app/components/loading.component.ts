import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
        <div class="app-loading" *ngIf="visible">
            <svg viewBox="25 25 50 50" class="circular">
                <circle
                    cx="50" cy="50" r="20" fill="none" stroke-color="#f00"
                    stroke-width="5" stroke-miterlimit="10" class="path">
                </circle>
            </svg>
        </div>
    `,
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
    @Input('visible') visible = false;
}
