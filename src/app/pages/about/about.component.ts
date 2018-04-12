import { TestService } from './../../services/test.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl, FormGroup, FormBuilder, Validators, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  Name: string;
  Email: string;
  Phone: String;

  Name1 = new FormControl();
  Email1 = new FormControl();

  formData: FormGroup = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    Email: new FormControl('', [Validators.required, Validators.email])
  })

  fg: FormGroup;

  constructor(testService: TestService, private fb: FormBuilder) {
    testService.getTest().subscribe(res => {
      // console.log(res);
    });

    this.createForm();
  }

  createForm() {
    this.fg = this.fb.group({
      Name: '',
      Email: '',
      Address: this.fb.group({
        City: ['', [Validators.required]],
        Street: ['', [this.customValidator]],
        State: ['', [], [this.asyncValidator]],
      })
    })
  }

  ngOnInit() { }

  handleFormSubmit(evt, form) {
    console.log(form);
  }

  hasError(fb: FormGroup, type: string, field: string[]): boolean {
    return fb.hasError(type, field);
  }

  customValidator(fctr: AbstractControl) {
    const value = fctr.value;
    return !value ? { 'custom': { value, info: '这是一个自定义错误' } } : null
  }


  asyncValidator(ctr: FormControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        const value = ctr.value;
        resolve(!value ? { custom: { value, msg: '这是一个异步的自定义错误！' } } : null);
      }, 1000)
    })
  }
}