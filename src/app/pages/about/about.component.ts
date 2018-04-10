import { TestService } from './../../services/test.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  Name: string;
  Email: string;

  Name1 = new FormControl();
  Email1 = new FormControl();

  formData: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required)
  })

  fg: FormGroup;

  constructor(testService: TestService, private fb: FormBuilder) {
    testService.getTest().subscribe(res => {
      console.log(res);
    });

    this.createForm();
  }

  createForm() {
    this.fg = this.fb.group({
      Name: '',
      Email: '',
      Address: this.fb.group({
        City: '',
        Street: '',
        State: ''
      })
    })
    /*
     等价于：
     this.fg = new FormGroup({
      Name: new FormControl(),
      Email: new FormControl(),
      Address: new FormGroup({
        City: new FormControl(),
        Street: new FormControl(),
        State: new FormControl()
      })
    })
    */
  }

  ngOnInit() { }

  handleFormSubmit(evt, form) {
    console.log(form);
  }
}