import { Component, Input } from '@angular/core';

interface TabItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-toolbar',
  template: `
    <div class="toolbar">
        <ul class="toolbar-items">
          <li *ngFor="let item of toolbarItems" class="toolbar-item" routerLinkActive="active" [routerLink]="item.path">
            <span>{{item.text}}</span>
          </li>
        </ul>
    </div>
  `,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  title = 'toolbar';
  @Input('toolbarItems') toolbarItems: Array<TabItem>;
}
