import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
    toolbarItems = [{ 
        text: '首页',
        path: '/home'
    }, {
        text: '关于Form',
        path: '/about'
    }, {
        text: 'Todo',
        path: '/todos'
    }]
}