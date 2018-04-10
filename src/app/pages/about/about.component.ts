import { TestService } from './../../services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  Name: string;
  Email: string;

  constructor(testService: TestService) {
    testService.getTest().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() { }

  handleFormSubmit(evt, form) {
    console.log(form.valid);
  }
}