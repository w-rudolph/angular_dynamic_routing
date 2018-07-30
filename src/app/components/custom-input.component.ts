import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-input',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: CustomInputComponent,
        multi: true
    }],
    template: `
        <div>
            <input [(ngModel)]="value" (input)="handleChange()"/>
        </div>
    `

})
export class CustomInputComponent implements ControlValueAccessor {

    value: any;
    valueChange: (_: any) => {};

    constructor() {

    }
    handleChange() {
        this.valueChange(this.value);
    }
    writeValue(value: any) {
        console.log(value);
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.valueChange = fn;
    }

    registerOnTouched() {

    }
}
