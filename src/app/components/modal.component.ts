import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    template: `
        <div class="app-modal" *ngIf="visible">
            <div class="app-modal__overlay" (click)="handleModalClick()"></div>
            <div class="app-modal__content-container">
                <div class="app-modal__content">
                    <ng-content></ng-content>
                </div>
                <div class="app-modal__close" (click)="closeModal()">
                    <svg viewBox="0 0 60 60" width="30" height="30">
                        <g fill="none" fillRule="evenodd">
                            <ellipse cx="30" cy="30" fill="#000" opacity=".2" rx="30" ry="30"/>
                            <path fill="#FFF"
                                d="M30 27.584L17.92 15.503a1.709 1.709 0 1 0-2.417 2.416L27.583 30l-12.08 12.08a1.709 1.709 0 1 0 2.416 2.417L30 32.417l12.08 12.08a1.709 1.709 0 1 0 2.417-2.416L32.417 30l12.08-12.08a1.709 1.709 0 1 0-2.416-2.417L30 27.583z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    @Input('visible') visible: boolean = false;
    @Input('hideOnClickModal') hideOnClickModal: boolean = false;
    @Output('close') close: EventEmitter<any> = new EventEmitter<any>();

    closeModal() {
        this.close.emit(false);
    }

    handleModalClick() {
        if (this.hideOnClickModal) {
            this.closeModal();
        }
    }
}