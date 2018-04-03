import { AppService } from './services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  showFooter: boolean = false;

  constructor(public appService: AppService) {
    this.appService = appService;
  }

  ngOnInit() {
    this.appService.footerObserver.subscribe(isShow => {
      this.showFooter = <boolean>isShow;
    })
  }

  toggleFooter() {
    this.appService.toggleFooter();
  }
}
