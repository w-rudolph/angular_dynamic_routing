import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[app-phone-validator][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }]
})
export class PhoneValidatorDirective implements Validator {

    @Input() value: string;

    validate(ctr: AbstractControl): ValidationErrors | null {

        // console.log(this.value)
        return /^(10|13|14|15|16|17|18|19)\d{9}$/.test(ctr.value) ? null : { phone: { value: ctr.value, msg: '' } };
    }
}
